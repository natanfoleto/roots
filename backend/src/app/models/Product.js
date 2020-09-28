import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        categoria: Sequelize.STRING,
        ativo: Sequelize.INTEGER,
        valor: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
    
    return this;
  }
}

export default Product;
