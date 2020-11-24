import Sequelize from 'sequelize';
const Op = Sequelize.Op;

import Product from '../models/Product';
import Photo from '../models/Photo';

class SearchProductController {
  async index(req, res) {
    try {
      const { product } = req.body;

      let products;

      if (product === "") {
        products = await Product.findAll({
          include: [{
            model: Photo,
            as: 'photos',
            through: { attributes: [] }
          }]
        });
      } else {
        products = await Product.findAll({
          where: {
            nome: {
              [Op.like]: `%${product}%`
            }
          },
          include: [{
            model: Photo,
            as: 'photos',
            through: { attributes: [] }
          }]
        });
      }

      return res.json(products);
    } catch (err) {
      console.log("Exception from SearchProductController.js/index: " + err);
    }
  }
}

export default new SearchProductController();
