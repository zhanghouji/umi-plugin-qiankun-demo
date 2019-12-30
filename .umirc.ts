import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        // { path: '/app1', exact: true, component: '../pages/subAppContainer'},
        // { path: '/operate-web', exact: true, component: '../pages/subAppContainer'}
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'micro_frontend',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    ['@umijs/plugin-qiankun', {
      master: {
        defer: true,
        jsSandbox: true,
        prefetch: true,
      },
    }],
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3032',
      changeOrigin: true,
    },
    '/app1': {
      target: 'http://localhost:3031',
      changeOrigin: true,
    },
  },
}

export default config;
