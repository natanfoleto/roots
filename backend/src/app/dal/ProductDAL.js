import Product from '../models/Product';

import ProductBuilded from '../builders/ProductBuilder';

class ProductDAL {
  async getAll() {
    try {
      const product = await Product.findAll();
  
      return product;
    } catch (err) {
      console.log("Exception from ProductDAL.js/getAll: " + err);
    }  
  }

  async create() {
    try {
      const product = await Product.create({
        nome: ProductBuilded.getNome(),
        categoria: ProductBuilded.getCategoria(),
        ativo: ProductBuilded.getAtivo(),
        valor: ProductBuilded.getValor(),
      });
  
      return product;
    } catch (err) {
      console.log("Exception from ProductDAL.js/create: " + err);
      return false;
    }  
  }

  async findByEmail(email) {
    try {
      let user;

      if (email) {
        user = await User.findOne({ 
          where: { email: email }
        });
      } else {
        user = await User.findOne({ 
          where: { email: UserBuilded.getEmail() }
        });
      }
  
      if (user) {
        return user;
      }

    } catch (err) {
      console.log("Exception from ProductDAL.js/findByEmail: " + err);
    }
  }
}

export default new ProductDAL();
