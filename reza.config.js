const path = require('path');

module.exports = {
  modify: (config) => {
    config.resolve.alias = {  // eslint-disable-line
      '@config': path.resolve('src/server/config'),
      '@api': path.resolve('src/server/api'),
      '@middlewares': path.resolve('src/server/middlewares'),
      '@models': path.resolve('src/server/models'),
      '@services': path.resolve('src/server/services'),
      '@utils': path.resolve('src/server/utils'),
      '@routes': path.resolve('src/server/routes'),
      '@client': path.resolve('src/client'),
      '@components': path.resolve('src/client/components'),
      '@containers': path.resolve('src/client/containers'),
      '@ducks': path.resolve('src/client/ducks'),
      '@hox': path.resolve('src/client/hox')
    };
    return config;
  },
  plugins: ['scss']
};
