import ClientsFactory from '../factorys/ClientsFactory';
import ClientsDAL from '../dal/ClientsDAL';
import Client from '../models/Client';

class ClientsController {
  async index(req, res) {
    try {
      const clients = await Client.findAll();

      return res.json(clients);
    } catch (err) {
      console.log("Exception from ClientController.js/index: " + err);
    }
  }

  async create(req, res) {
    try {
      const { nome, cpf, data_nasc, email, password } = req.body.data;

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

  async update(req, res) {
    try {
      const { nome, cpf, data_nasc, email, oldPassword, password } = req.body;

      const client = await Client.findOne({
        where: { cpf: cpf }
      });

      if (cpf !== client.cpf) {
        const clientExists = await Client.findOne({
          where: { cpf }
        });

        if (clientExists) {
          return res.json({
            error: 1,
            value: 'Um usuário com este e-mail já existe.'
          });
        }
      }

      if (email !== client.email) {
        const clientExists = await Client.findOne({
          where: { email }
        });

        if (clientExists) {
          return res.json({
            error: 1,
            value: 'Um usuário com este e-mail já existe.'
          });
        }
      }

      if (oldPassword && !(await client.checkPassword(oldPassword))) {
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

      console.log(body);

      const clientUpdated = await client.update(body);

      return res.json({
        error: 0,
        client: clientUpdated
      });
    } catch (err) {
      console.log("Exception from ClientController.js/update: " + err);

      return res.json({
        error: 1,
        value: err
      });
    }
  }
}

export default new ClientsController();
