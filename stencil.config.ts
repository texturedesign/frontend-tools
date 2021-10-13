import { Config } from '@stencil/core';

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
  plugins: []
};
