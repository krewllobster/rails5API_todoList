export default [
  {
    path: '/',
    load: () => Promise.resolve(require('./pages/Auth').default), // file loaded in the main code chunk
  },
  {
    path: '/docs',
    load: () => Promise.resolve(require('./pages/App').default), // file loaded in the main code chunk
    children: [
      {
        path: '/:id',
        load: () => new Promise((resolve, reject) => {
          try {
            require.ensure(['./pages/Todo'], (require) => { // file loaded in a separate code chunk
              resolve(require('./pages/Todo').default);
            });
          } catch (err) {
            reject(err);
          }
        }),
      },
    ],
  },
  {
    path: '*',
    load: () => new Promise((resolve, reject) => {
      try {
        require.ensure(['./pages/Error'], (require) => { // file loaded in a separate code chunk
          resolve(require('./pages/Error').default);
        });
      } catch (err) {
        reject(err);
      }
    }),
  },
];
