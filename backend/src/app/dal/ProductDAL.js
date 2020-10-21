import Product from '../models/Product';
import Photo from '../models/Photo';

import ProductBuilded from '../builders/ProductBuilder';

class ProductDAL {
  async getAll() {
    try {
      const product = await Product.findAll({
        include: [{
          model: Photo,
          as: 'photos',
          through: { attributes: [] }
        }]
      });
  
      return product;
    } catch (err) {
      console.log("Exception from ProductDAL.js/getAll: " + err);
    }  
  }

  async create(photos) {
    try {
      const product = await Product.create({
        nome: ProductBuilded.getNome(),
        categoria: ProductBuilded.getCategoria(),
        ativo: ProductBuilded.getAtivo(),
        valor: ProductBuilded.getValor(),
      });

      

      if (photos && photos.length > 0) {
        photos.map((photo) => {
          console.log(photo.id);
          product.setPhotos(photo.id);
        });
      }
  
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

  async update(body) {
    try {
      console.log(body);

      const product = await Product.findOne({
        where: {
          id: body.id
        }
      });

      const productUpdated = await product.update(body);
  
      return productUpdated;
    } catch (err) {
      console.log("Exception from ProductDAL.js/update: " + err);
      return false;
    }  
  }

  async inactivate(id) {
    try {
      const product = await Product.findOne({
        where: {
          id: id
        }
      });

      const productInactive = await product.update({ ativo: 0 });
  
      return productInactive;
    } catch (err) {
      console.log("Exception from ProductDAL.js/inactivate: " + err);
      return false;
    }  
  }
}

export default new ProductDAL();
