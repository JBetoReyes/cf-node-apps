const {Router} = require('express');
const baseDebugger = require('debug')('b:router');

class BaseRouter {
  constructor(app, mainPath, entity) {
    this._app = app;
    this._entity = `${entity.charAt(0).toUpperCase()}${entity.slice(1)}`;
    this._mainPath = mainPath;
    this._expressRouter = Router();
    this.registerRoutes();
  }

  getDebugger() {
    return baseDebugger.extend(`${this._mainPath}`)
  }

  registerRoutes() {
    const routerDebugger = this.getDebugger();
    const methods = [
      'get',
      'post',
      'put',
      'delete'
    ];
    methods.forEach((method) => {
      // router handler to perform an action over a set of entities
      if (this[`${method}${this._entity}s`]) {
        this._expressRouter[method]('/', this[`${method}${this._entity}s`]().handler.bind(this))
        routerDebugger(`${method.toUpperCase()} ${this._mainPath} route added`);
      }
      // router handler to perform an action over a single entity
      if (this[`${method}${this._entity}`]) {
        this._expressRouter[method]('/:id', this[`${method}${this._entity}`]().handler.bind(this))
        routerDebugger(`${method.toUpperCase()} ${this._mainPath}/:id route added`);
      }
    });
    this._app.use(this._mainPath, this._expressRouter);
  }
}

module.exports.BaseRouter = BaseRouter;
