import { Effect } from 'dva';
import { Reducer } from 'redux';
import { qiankunStart } from 'umi';


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface BaseModelType {
  namespace: string;
  state: any;
  effects: {
    [key: string]: Effect;
  };
  reducers: {
    [key: string]: Reducer<any>;
  }
}

const baseModel: BaseModelType = {
  namespace: 'base',

  state: {
    apps: [],
  },

  effects: {
    *getApps(_, { put }) {
      /*
       子应用配置信息获取分同步、异步两种方式
       同步有两种配置方式，1、app.js导出qiankun对象，2、配置写在umi配置文件中，可通过import @tmp/subAppsConfig获取
      */
      // yield sleep(1000);
      // 模拟手动控制 qiankun 启动时机的场景, 需要 defer 配置为 true
      yield put({
        type: 'getAppsSuccess',
        payload: {
          apps:  [
            {
              name: 'app1',
              entry: 'http://localhost:3031/app1',
              base: '/app1',
              mountElementId: 'root-subapp-container',
            },
            {
              name: 'app2',
              entry: 'http://localhost:3032/app2',
              base: '/app2',
              mountElementId: 'root-subapp-container',
            },
          ],
        },
      })
      setTimeout(qiankunStart, 1000)
    },
  },

  reducers: {
    getAppsSuccess(state, { payload }) {
      state.apps = payload.apps;
      return state;
    },
  },
};

export default baseModel;
