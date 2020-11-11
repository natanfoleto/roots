import Sequelize, { Model } from 'sequelize';

class Providers extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Providers;