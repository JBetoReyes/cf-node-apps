const debug = require('debug')('b:routers')
const {ProductsRouter} = require('./productsRouter');

const routers = [
  ProductsRouter
];

class RouterManager {
  registerRoutes(app) {
    routers.forEach((Router) => {
      new Router(app);
    });
  }
}

module.exports.routerManager = new RouterManager();
