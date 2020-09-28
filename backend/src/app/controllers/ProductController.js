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
      const { nome, categoria, valor } = req.body;

      const product = { 
        nome: nome, 
        categoria: categoria, 
        valor: valor
      };

      await ProductFactory.makeProduct(product);

      const data = await ProductDAL.create();

      if (!data) {
        return res.status(400).json({ error: 'Erro ao cadastrar um produto, tente novamente!' });
      }
      
      return res.json(data);
    } catch (err) {
      console.log("Exception from ProductController.js/create: " + err);
      return res.status(400).json({ error: 'Erro ao cadastrar um produto, tente novamente!' });
    }
  }
}

export default new ProductController();
