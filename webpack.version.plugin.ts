import { Compiler } from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

export class VersionIncrementPlugin {
  private readonly versionFile: string;
  private isFirstRun: boolean = true;

  constructor(versionFile: string) {
    this.versionFile = versionFile;
  }

  private async updateVersion(isDev: boolean): Promise<void> {
    try {
      const packagePath = path.resolve('package.json');
      const packageData = JSON.parse(await fs.promises.readFile(packagePath, 'utf8'));
      const prevVersion = packageData.version;
      let build = 0;
      let fullVersion = prevVersion;

      if (isDev) {
        // dev: use .dev_build_number (local only)
        const buildFile = path.resolve('.dev_build_number');
        if (fs.existsSync(buildFile)) {
          build = parseInt((await fs.promises.readFile(buildFile, 'utf8')).trim(), 10) || 0;
        }
        build += 1;
        await fs.promises.writeFile(buildFile, build.toString(), 'utf8');
        fullVersion = `${prevVersion}.${build}`;
      } else {
        // prod: version only (no build number)
        fullVersion = prevVersion;
      }

      console.debug(`[GlanceBrief][VersionIncrementPlugin] New version: ${fullVersion}`);
      process.env.APP_VERSION = fullVersion;
    } catch (error) {
      console.error('[VersionIncrementPlugin] Error:', error);
    }
  }

  apply(compiler: Compiler): void {
    /* Hook for production build */
    compiler.hooks.beforeRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      const isDev =
        process.env.NODE_ENV === 'development' ||
        (compilation.options && compilation.options.mode === 'development');
      await this.updateVersion(isDev);
      callback();
    });

    /* Hook for hot reload in development environment */
    compiler.hooks.watchRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      if (this.isFirstRun) {
        const isDev =
          process.env.NODE_ENV === 'development' ||
          (compilation.options && compilation.options.mode === 'development');
        await this.updateVersion(isDev);
        this.isFirstRun = false;
      }
      callback();
    });

    /* Hook for file change */
    compiler.hooks.invalid.tap('VersionIncrementPlugin', () => {
      if (!this.isFirstRun) {
        const isDev = process.env.NODE_ENV === 'development';
        this.updateVersion(isDev).catch(error => {
          console.error('[VersionIncrementPlugin] Error during hot reload:', error);
        });
      }
    });
  }
}
