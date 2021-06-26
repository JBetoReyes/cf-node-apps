const { ProductModel } = require('./productModel');

class ModelsManager {
  constructor(sequelize) {
    this._sequelize = sequelize;
    this._classModels = [
      ProductModel
    ];
  }

  initModels() {
    this._classModels.forEach((model) => {
      new model(this._sequelize).initModel();
    });
  }
}

module.exports.ModelsManager = ModelsManager;
