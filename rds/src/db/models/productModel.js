const { DataTypes } = require('sequelize');
const { BaseModel } = require('./baseModel');

class ProductModel extends BaseModel {
  constructor(sequelize) {
    super(sequelize, 'Product', {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      maker: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  }
}

module.exports.ProductModel = ProductModel;
