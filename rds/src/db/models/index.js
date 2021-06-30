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
      const dbModel = new model(this._sequelize);
      dbModel.initModel();
      dbModel.sync();
    });
  }
}

module.exports.ModelsManager = ModelsManager;
