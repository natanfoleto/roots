import Sequelize, { Model } from 'sequelize';

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        item: Sequelize.STRING,
        entidade: Sequelize.STRING,
        op: Sequelize.STRING
      },
      {
        sequelize,
        updatedAt: false
      }
    );

    return this;
  }

}

export default Log;
