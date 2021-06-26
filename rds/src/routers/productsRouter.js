const {BaseRouter} = require('./baseRouter');

class ProductsRouter extends BaseRouter {
  constructor(app) {
    super(app, '/products', 'product');
	}

  getProduct() {
    return {
      handler: (req, res) => {
        console.log('params: ', req.params);
        res.json({ name: 'hello world'})
      }
    };
  }
  getProducts() {
    return {
      handler: async (req, res) => {
        const models = this._app.get('models');
        const { Product } = models;
        let products;
        try {
          products = await Product.findAll();
        } catch (err) {
          console.log(err);
        }
        res.json({ 
          data: { 
            products: products.map(p => p.get({ plain: true }))
          }
        });
      }
    }
  }
  postProduct() {
    return {
      handler: (req, res) => {
        console.log('params: ', req.params);
        res.json({ name: 'hello world'})
      }
    };
  }
  postProducts() {
    return {
      handler: (req, res) => {
        res.json({ name: 'hello world'})
      }
    }
  }
  putProduct() {
    return {
      handler: (req, res) => {
        res.json({ name: 'hello world'})
      }
    };
  }
  putProducts() {
    return {
      handler: (req, res) => {
        res.json({ name: 'hello world'})
      }
    };
  }
  deleteProduct() {
    return {
      handler: (req, res) => {
        res.json({ name: 'hello world'})
      }
    };
  }
  deleteProducts() {
    return {
      handler: (req, res) => {
        res.json({ name: 'hello world'})
      }
    };
  }
}

module.exports.ProductsRouter = ProductsRouter;
