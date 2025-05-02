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
      /* バージョンファイルの読み込み */
      const versionPath = path.resolve(this.versionFile);
      const versionData = JSON.parse(await fs.promises.readFile(versionPath, 'utf8'));

      /* ビルド番号のインクリメント */
      versionData.build += 1;

      /* バージョン文字列の生成 */
      const fullVersion = `${versionData.version}.${versionData.build}`;
      console.debug(`[GlanceBrief][VersionIncrementPlugin] New version: ${fullVersion}`);

      /* バージョンファイルの更新 */
      await fs.promises.writeFile(versionPath, JSON.stringify(versionData, null, 2), 'utf8');

      /* 環境変数にバージョン情報を設定 */
      process.env.APP_VERSION = fullVersion;
    } catch (error) {
      console.error('[VersionIncrementPlugin] Error:', error);
    }
  }

  apply(compiler: Compiler): void {
    /* 本番ビルド用のフック */
    compiler.hooks.beforeRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      await this.updateVersion();
      callback();
    });

    /* 開発環境のホットリロード用のフック */
    compiler.hooks.watchRun.tapAsync('VersionIncrementPlugin', async (compilation, callback) => {
      /* 初回実行時のみバージョンを更新 */
      if (this.isFirstRun) {
        await this.updateVersion();
        this.isFirstRun = false;
      }
      callback();
    });

    /* ファイル変更時のフック */
    compiler.hooks.invalid.tap('VersionIncrementPlugin', () => {
      if (!this.isFirstRun) {
        /* ホットリロード時のバージョン更新 */
        this.updateVersion().catch(error => {
          console.error('[VersionIncrementPlugin] Error during hot reload:', error);
        });
      }
    });
  }
}
