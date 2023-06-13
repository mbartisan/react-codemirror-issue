import type { ForgeConfig } from '@electron-forge/shared-types';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import type { Configuration } from 'webpack';
import path from "path";


const webpackConfig = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /(node_modules|\.webpack)/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      '@codemirror/state': path.resolve(__dirname, 'node_modules/@codemirror/state'),
    }
  },
}

const config: ForgeConfig = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [],
  plugins: [
    new WebpackPlugin({
      mainConfig: {
        /**
         * This is the main entry point for your application, it's the first file
         * that runs in the main process.
         */
        entry: './src/index.ts',
        // Put your normal webpack config below here
        ...webpackConfig
      },
      renderer: {
        config: { ...webpackConfig },
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.tsx',
            name: 'main_window',
          },
        ],
      },
    }),
  ],
};

export default config;
