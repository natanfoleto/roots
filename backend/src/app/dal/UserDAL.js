import User from '../models/User';

import UserBuilded from '../builders/UserBuilder';

class UserDAL {
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
      console.log("Exception from UserDAL.js/findByEmail: " + err);
    }
  }

  async findByCpf() {
    try {
      const user = await User.findOne({
        where: { cpf: UserBuilded.getCpf() }
      });

      if (user) {
        return user;
      }

      return null;
    } catch (err) {
      console.log("Exception from UserDAL.js/findByCpf: " + err);
    }
  }

  async create() {
    try {
      const user = await User.create({
        nome: UserBuilded.getNome(),
        cpf: UserBuilded.getCpf(),
        data_nasc: UserBuilded.getDataNasc(),
        email: UserBuilded.getEmail(),
        password: UserBuilded.getPassword(),
      });

      return user;
    } catch (err) {
      console.log("Exception from UserDAL.js/create: " + err);
    }
  }
}

export default new UserDAL();
