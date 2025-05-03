import { Compiler, Compilation } from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

interface MetaPluginOptions {
  metafile: string;
}

export class UserscriptMetaPlugin {
  private readonly options: MetaPluginOptions;

  constructor(options: MetaPluginOptions) {
    this.options = options;
  }

  private getFilename(compilation: Compilation): string {
    const filename = compilation.outputOptions.filename;
    if (typeof filename === 'function') {
      return filename({}, {});
    }
    return filename || '';
  }

  private getMetadataBlock(content: string, isDev: boolean, outputDir: string): string {
    const metaBlock = content.match(/\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/);
    if (!metaBlock) return '';

    let processedBlock = metaBlock[0];

    /* Update version number */
    if (process.env.APP_VERSION) {
      const version = isDev
        ? process.env.APP_VERSION
        : process.env.APP_VERSION.split('.').slice(0, -1).join('.');
      processedBlock = processedBlock.replace(/(\/\/ @version\s+).*$/m, `$1${version}`);
    }

    /* In development environment, fix URL */
    if (isDev) {
      processedBlock = processedBlock.replace(
        /(\/\/ @(?:update|download)URL\s+http:\/\/localhost:8080\/)(?:.*?)(glancebrief\..*?\.js)/g,
        `$1${outputDir}/$2`
      );
    }

    return processedBlock;
  }

  private async updateMetadata(compilation: Compilation): Promise<void> {
    const outputPath = compilation.outputOptions.path || '';
    const isDev = compilation.options.mode === 'development';
    const outputDir = isDev ? 'dist/dev' : 'dist/prod';

    /* Build file path */
    const userscriptPath = path.join(outputPath, this.getFilename(compilation));
    const metafilePath = path.join(outputPath, this.options.metafile);

    console.debug(
      `[GlanceBrief][UserscriptMetaPlugin] Looking for userscript at: ${userscriptPath}`
    );
    console.debug(
      `[UserscriptMetaPlugin] Current version: ${process.env.APP_VERSION || 'unknown'}`
    );

    /* Check file existence */
    if (!fs.existsSync(userscriptPath)) {
      console.debug(
        `[GlanceBrief][UserscriptMetaPlugin] Userscript file not found: ${userscriptPath}`
      );
      return;
    }

    /* Extract metadata from userscript file */
    const content = await fs.promises.readFile(userscriptPath, 'utf8');
    const processedMetaBlock = this.getMetadataBlock(content, isDev, outputDir);

    if (processedMetaBlock) {
      /* Write to meta file */
      await fs.promises.writeFile(metafilePath, processedMetaBlock, 'utf8');
      console.debug(`[GlanceBrief][UserscriptMetaPlugin] Meta file generated: ${metafilePath}`);

      /* Also update metadata in userscript file */
      const updatedContent = content.replace(
        /\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/,
        processedMetaBlock
      );
      await fs.promises.writeFile(userscriptPath, updatedContent, 'utf8');
      console.debug(
        `[GlanceBrief][UserscriptMetaPlugin] Userscript metadata updated: ${userscriptPath}`
      );
    } else {
      console.warn('[UserscriptMetaPlugin] UserScript metadata block not found');
    }
  }

  apply(compiler: Compiler): void {
    /* Hook for production build */
    compiler.hooks.afterEmit.tapAsync('UserscriptMetaPlugin', async (compilation, callback) => {
      try {
        await this.updateMetadata(compilation);
        callback();
      } catch (error) {
        console.error('[UserscriptMetaPlugin] Error:', error);
        callback();
      }
    });

    /* Hook for hot reload in development environment */
    compiler.hooks.afterCompile.tapAsync('UserscriptMetaPlugin', async (compilation, callback) => {
      if (compilation.options.mode === 'development') {
        try {
          await this.updateMetadata(compilation);
        } catch (error) {
          console.error('[UserscriptMetaPlugin] Error during hot reload:', error);
        }
      }
      callback();
    });
  }
}
