import UserFactory from '../factorys/UserFactory';
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
}

export default new UserController();
