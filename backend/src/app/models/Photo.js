import Sequelize, { Model } from 'sequelize';

class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        tamanho: Sequelize.STRING,
        formato_imagem: Sequelize.STRING,
        url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Product, { 
      through: 'photos_products',
      foreignKey: 'id_foto', 
      as: 'products' 
    });
  }
}

export default Photo;