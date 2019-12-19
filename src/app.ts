export const qiankun = fetch('/config').then(() => 
({
  apps: [
      {
        name: 'app1',
        entry: 'http://localhost:8081/app1',
        base: '/app1',
        mountElementId: 'root-subapp-container',
      },
      {
        name: 'app2',
        entry: 'http://localhost:8001/app2',
        base: '/app2',
        mountElementId: 'root-subapp-container',
      },
      {
        name: 'operate-web',
        entry: 'http://localhost:8000/operate-web',
        base: '/operate-web',
        mountElementId: 'root-subapp-container',
      }
      // {
      //   name: 'app2',
      //   entry: 'http://localhost:8002/app2',
      //   base: '/app2',
      //   mountElementId: 'root-subapp-container',
      //   props: {
      //     testProp: 'test',
      //   },
      // },
  ],
  lifeCycles: {
    // see https://github.com/umijs/qiankun#registermicroapps
    afterMount: (props: any) => {
      console.log(props);
    },
  },
})
);
