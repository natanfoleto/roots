import Sequelize, { Model } from 'sequelize';

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        campo: Sequelize.STRING,
        valor_anterior: Sequelize.STRING,
        valor_posterior: Sequelize.STRING,
        entidade: Sequelize.STRING,
        op: Sequelize.STRING
      },
      {
        sequelize,
        updatedAt: false
      }
    );
  }

}

export default Log;
