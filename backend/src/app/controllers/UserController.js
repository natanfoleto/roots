import UserFactory from '../factorys/UserFactory';
import User from '../models/User';
import UserDAL from '../dal/UserDAL';

class UserController {
  async index(req, res) {

  }

  async create(req, res) {
    try {
      const { nome, cpf, data_nasc, email, password } = req.body;

      const user = {
        nome: nome,
        cpf: cpf,
        data_nasc: data_nasc,
        email: email,
        password: password
      };

      await UserFactory.makeUser(user);

      const userEmail = await UserDAL.findByEmail();

      if (userEmail) {
        return res.status(400).json({ error: 'Um usuário com este e-mail já existe.' });
      }

      const userCPF = await UserDAL.findByCpf();

      if (userCPF) {
        return res.status(400).json({ error: 'Um usuário com este CPF já existe.' });
      }

      const data = await UserDAL.create();

      return res.json(data);
    } catch (err) {
      console.log("Exception from UserController.js/create: " + err);
    }
  }

  async update(req, res) {
    try {
      const { nome, cpf, data_nasc, email, oldPassword, password } = req.body;

      const user = await User.findOne({
        where: { cpf: cpf }
      });

      if (cpf !== user.cpf) {
        const userExists = await User.findOne({
          where: { cpf }
        });

        if (userExists) {
          return res.json({ error: 'Um usuário com este e-mail já existe.' });
        }
      }

      if (email !== user.email) {
        const userExists = await User.findOne({
          where: { email }
        });

        if (userExists) {
          return res.json({ error: 'Um usuário com este e-mail já existe.' });
        }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.json({
          error: 2,
          value: 'A senha está incorreta.'
        });
      }

      const body = {
        nome: nome,
        cpf: cpf,
        data_nasc: data_nasc,
        email: email,
        password: password
      }

      const userUpdated = await user.update(body);

      return res.json({
        error: 0,
        user: userUpdated
      });
    } catch (err) {
      console.log("Exception from UserController.js/update: " + err);

      return res.json({
        error: 1,
        value: err
      });
    }
  }
}

export default new UserController();
