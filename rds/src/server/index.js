const express = require('express');
const debug = require('debug')('b:server');

const { routerManager } = require('../routers');
const { DB } = require('../db');

const {
  POSTGRES_HOST: pgHost,
  POSTGRES_DB: pgDBName,
  POSTGRES_USER: pgUser,
  POSTGRES_PASSWORD: pgPassword
} = process.env;

const { 
  APP_PORT: appPort = 3000
} = process.env;

class Server {
  constructor() {
    this._app = new express();
  }

  _startPGDBConnection() {
    const db = new DB({
      dialect: 'postgres', 
      user: pgUser,
      password: pgPassword,
      host: pgHost,
      dbName: pgDBName
    });
    this._app.set('db', db);
    this._app.set('models', db.getModels());
  }

  _registerRoutes() {
    routerManager.registerRoutes(this._app);
  }

  start() {
    this._startPGDBConnection();
    this._registerRoutes();
    this._app.listen(appPort, () => {
      debug(`App listening on port ${appPort}`)
    });
  }
}

module.exports.Server = Server;
