import ProductFactory from '../factorys/ProductFactory';
import ProductDAL from '../dal/ProductDAL';

class ProductController {
  async index(req, res) {
    try {
      const products = await ProductDAL.getAll();

      return res.json(products);
    } catch (err) {
      console.log("Exception from ProductController.js/index: " + err);
    }
  }

  async create(req, res) {
    try {
      const { data, photos } = req.body;
      const { nome, categoria, valor } = data;

      const product = { 
        nome: nome, 
        categoria: categoria, 
        valor: valor
      };

      await ProductFactory.makeProduct(product);

      const response = await ProductDAL.create(photos);

      if (!response) {
        return res.status(400).json({ error: 'Erro ao cadastrar um produto, tente novamente!' });
      }
      
      return res.json(response);
    } catch (err) {
      console.log("Exception from ProductController.js/create: " + err);
      return res.status(400).json({ error: 'Erro ao cadastrar um produto, tente novamente!' });
    }
  }

  async update(req, res) {
    try {
      const products = await ProductDAL.update(req.body);

      return res.json(products);
    } catch (err) {
      console.log("Exception from ProductController.js/update: " + err);
    }
  }
  
  async inactivate(req, res) {
    try {
      const { id } = req.params;

      const products = await ProductDAL.inactivate(id);

      return res.json(products);
    } catch (err) {
      console.log("Exception from ProductController.js/inactivate: " + err);
    }
  }
}

export default new ProductController();
