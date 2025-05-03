import { Compiler } from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

export class VersionIncrementPlugin {
  private readonly versionFile: string;
  private isFirstRun: boolean = true;

  constructor(versionFile: string) {
    this.versionFile = versionFile;
  }

  private async updateVersion(): Promise<void> {
    try {
      /* Read version file */
      const versionPath = path.resolve(this.versionFile);
      const versionData = JSON.parse(await fs.promises.readFile(versionPath, 'utf8'));

      /* Increment build number */
      versionData.build += 1;

      /* Generate version string */
      const fullVersion = `${versionData.version}.${versionData.build}`;
      console.debug(`[GlanceBrief][VersionIncrementPlugin] New version: ${fullVersion}`);

      /* Update version file */
      await fs.promises.writeFile(versionPath, JSON.stringify(versionData, null, 2), 'utf8');

      /* Set version info to environment variable */
      process.env.APP_VERSION = fullVersion;
    } catch (error) {
      console.error('[VersionIncrementPlugin] Error:', error);
    }
  }

  apply(compiler: Compiler): void {
    /* Hook for production build */
    compiler.hooks.beforeRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      await this.updateVersion();
      callback();
    });

    /* Hook for hot reload in development environment */
    compiler.hooks.watchRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      /* Update version only on first run */
      if (this.isFirstRun) {
        await this.updateVersion();
        this.isFirstRun = false;
      }
      callback();
    });

    /* Hook for file change */
    compiler.hooks.invalid.tap('VersionIncrementPlugin', () => {
      if (!this.isFirstRun) {
        /* Update version on hot reload */
        this.updateVersion().catch(error => {
          console.error('[VersionIncrementPlugin] Error during hot reload:', error);
        });
      }
    });
  }
}
