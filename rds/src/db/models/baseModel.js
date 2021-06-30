class BaseModel {
  constructor(sequelize, modelName, schema) {
    this._sequelize = sequelize;
    this._modelName = modelName;
    this._schema = schema;
  }

  initModel() {
    this._model = this._sequelize.define(this._modelName, this._schema);
    return this._model;
  }

  sync(prefs = {}) {
    this._model.sync(prefs);
  }
}

module.exports.BaseModel = BaseModel;
