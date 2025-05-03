import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { monkey } from 'webpack-monkey';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { UserscriptMetaPlugin } from './webpack.meta.plugin';
import { VersionIncrementPlugin } from './webpack.version.plugin';

interface WebpackConfiguration extends Configuration {
  devServer?: DevServerConfiguration;
}

const config = (env: any, argv: { mode?: string }): WebpackConfiguration => {
  const mode = argv.mode || 'production';
  const isDev = mode === 'development';
  const outputDir = isDev ? 'dist/dev' : 'dist/prod';
  const filename = 'glancebrief.user.js';
  const metafile = 'glancebrief.meta.js';

  // Basic settings for webpack-monkey plugin
  const monkeyConfig = {
    entry: './src/index.ts',
    output: {
      filename,
      path: path.resolve(__dirname, outputDir),
      publicPath: isDev ? `/${outputDir}/` : undefined,
    },
  };

  // Basic settings
  const baseConfig: WebpackConfiguration = {
    mode: mode as 'development' | 'production',
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    optimization: {
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: true /* Required to preserve metadata block */,
            },
          },
          extractComments: false,
        }),
      ],
    },
    devtool: isDev ? ('inline-source-map' as const) : false,
    plugins: [
      new VersionIncrementPlugin('version.json'),
      new UserscriptMetaPlugin({
        metafile,
      }),
    ],
  };

  // Apply webpack-monkey plugin
  const config = monkey({
    ...baseConfig,
    ...monkeyConfig,
  });

  if (isDev) {
    config.devServer = {
      static: [
        {
          directory: path.join(__dirname),
          publicPath: '/',
          serveIndex: true,
          watch: true,
        },
        {
          directory: path.join(__dirname, outputDir),
          publicPath: `/${outputDir}/`,
          serveIndex: true,
          watch: true,
        },
      ],
      watchFiles: {
        paths: ['src/**/*'],
        options: {
          usePolling: true,
          followSymlinks: false,
          ignored: ['**/node_modules/**', '**/dist/**'],
        },
      },
      hot: false,
      liveReload: true,
      port: 8080,
      open: true,
      devMiddleware: {
        writeToDisk: true,
        stats: 'minimal',
      },
      client: {
        overlay: false,
        logging: 'warn',
      },
      compress: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  return config;
};

module.exports = config;
