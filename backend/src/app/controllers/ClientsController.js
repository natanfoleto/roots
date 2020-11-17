import ClientsFactory from '../factorys/ClientsFactory';
import ClientsDAL from '../dal/ClientsDAL';

class ClientsController {
  async index(req, res) {

  }

  async create(req, res) {
    try {
      const { nome, cpf, data_nasc, email, password } = req.body;

      const client = { 
        nome: nome, 
        cpf: cpf, 
        data_nasc: data_nasc, 
        email: email, 
        password: password 
      };

      await ClientsFactory.makeUser(client);

      const clientEmail = await ClientsDAL.findByEmail();

      if (clientEmail) {
        return res.status(400).json({ error: 'Um usuário com este e-mail já existe.' });
      }

      const clientCPF = await ClientsDAL.findByCpf();

      if (clientCPF) {
        return res.status(400).json({ error: 'Um usuário com este CPF já existe.' });
      }

      const data = await ClientsDAL.create();
      
      return res.json(data);
    } catch (err) {
      console.log("Exception from ClientsController.js/create: " + err);
    }
  }
}

export default new ClientsController();
