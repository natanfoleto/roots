import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Clients extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        data_nasc: Sequelize.DATEONLY,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        ativo: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (clients) => {
      if (clients.password) {
        clients.password_hash = await bcrypt.hash(clients.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Clients;
