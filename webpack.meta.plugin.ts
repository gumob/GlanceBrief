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

    /* バージョン番号の更新 */
    if (process.env.APP_VERSION) {
      const version = isDev
        ? process.env.APP_VERSION
        : process.env.APP_VERSION.split('.').slice(0, -1).join('.');
      processedBlock = processedBlock.replace(/(\/\/ @version\s+).*$/m, `$1${version}`);
    }

    /* 開発環境では、URLを修正 */
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

    /* ファイルパスの構築 */
    const userscriptPath = path.join(outputPath, this.getFilename(compilation));
    const metafilePath = path.join(outputPath, this.options.metafile);

    console.debug(
      `[GlanceBrief][UserscriptMetaPlugin] Looking for userscript at: ${userscriptPath}`
    );
    console.debug(
      `[UserscriptMetaPlugin] Current version: ${process.env.APP_VERSION || 'unknown'}`
    );

    /* ファイルの存在確認 */
    if (!fs.existsSync(userscriptPath)) {
      console.debug(
        `[GlanceBrief][UserscriptMetaPlugin] Userscript file not found: ${userscriptPath}`
      );
      return;
    }

    /* ユーザースクリプトファイルからメタデータを抽出 */
    const content = await fs.promises.readFile(userscriptPath, 'utf8');
    const processedMetaBlock = this.getMetadataBlock(content, isDev, outputDir);

    if (processedMetaBlock) {
      /* メタファイルに書き込み */
      await fs.promises.writeFile(metafilePath, processedMetaBlock, 'utf8');
      console.debug(`[GlanceBrief][UserscriptMetaPlugin] Meta file generated: ${metafilePath}`);

      /* ユーザースクリプトファイルのメタデータも更新 */
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
    /* 本番ビルド用のフック */
    compiler.hooks.afterEmit.tapAsync('UserscriptMetaPlugin', async (compilation, callback) => {
      try {
        await this.updateMetadata(compilation);
        callback();
      } catch (error) {
        console.error('[UserscriptMetaPlugin] Error:', error);
        callback();
      }
    });

    /* 開発環境のホットリロード用のフック */
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
