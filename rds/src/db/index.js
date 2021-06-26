const { Sequelize } = require('sequelize');
const { ModelsManager } = require('./models');
const debug = require('debug')('b:server');

class DB {
  constructor({
    dialect,
    user,
    password,
    host,
    dbName,
    port = '',
  }) {
    const portNumber = this._getPort(port, dialect);
    debug(`db url: ${dialect}://${user}:${password}@${host}:${portNumber}/${dbName}`)
    this._sequelize = new Sequelize(dbName, user, password, {
      host,
      dialect,
      port: portNumber,
      define: {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    });
    this._initModels();
    debug('Models initialized')
  }

  _initModels() {
    new ModelsManager(this._sequelize).initModels();
  }

  _getPort(port, dialect) {
    if (port) {
      return port;
    }
    if (dialect === 'postgres') {
      return 5432;
    }
    return '';
  }

  getModels() {
    return this._sequelize.models;
  }
}

module.exports.DB = DB;
