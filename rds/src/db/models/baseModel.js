class BaseModel {
  constructor(sequelize, modelName, schema) {
    this._sequelize = sequelize;
    this._modelName = modelName;
    this._schema = schema;
  }

  initModel() {
    return this._sequelize.define(this._modelName, this._schema);
  }
}

module.exports.BaseModel = BaseModel;
