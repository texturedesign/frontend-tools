import { Config } from '@stencil/core';
import replace from '@rollup/plugin-replace';

const dev: boolean = process.argv && process.argv.indexOf('--dev') > -1;

import devConfig from './src/config/dev.json';
import prodConfig from './src/config/prod.json';

const configValues = dev ? devConfig : prodConfig;


// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: '../node_modules/@fortawesome/fontawesome-free/webfonts', dest: 'webfonts' }
      ], 
      baseUrl: '/tools/',
    },
  ],
  plugins: [
    replace({
      exclude: ['node_modules/**'],
      delimiters: ['<$ ', ' $>'],
      values: configValues,
      preventAssignment: false,
    })
  ]
};
