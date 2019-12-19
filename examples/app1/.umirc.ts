import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  base: '/app1',
  treeShaking: true,
  publicPath: '//localhost:8081/',
  // mountElementId: 'app1',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'app1',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    ['@umijs/plugin-qiankun', {

    }],
  ],
}

export default config;
