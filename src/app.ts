export const qiankun = fetch('/config').then(() => 
({
  apps: [
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
  lifeCycles: {
    // see https://github.com/umijs/qiankun#registermicroapps
    afterMount: (props: any) => {
      console.log(props);
    },
  },
})
);
