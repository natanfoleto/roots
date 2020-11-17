import Clients from '../models/Clients';

import ClientsBuilder from '../builders/ClientsBuilder';

class ClientsDAL {
  async findByEmail(email) {
    try {
      let client;

      if (email) {
        client = await Clients.findOne({ 
          where: { email: email }
        });
      } else {
        client = await Clients.findOne({ 
          where: { email: ClientsBuilder.getEmail() }
        });
      }
  
      if (client) {
        return client;
      }

    } catch (err) {
      console.log("Exception from ClientsDAL.js/findByEmail: " + err);
    }
  }

  async findByCpf() {
    try {
      const client = await Clients.findOne({ 
        where: { cpf: ClientsBuilder.getCpf() }
      });
  
      if (client) {
        return client;
      }
  
      return null;
    } catch (err) {
      console.log("Exception from ClientsDAL.js/findByCpf: " + err);
    }  
  }

  async create() {
    try {
      const client = await Clients.create({
        nome: ClientsBuilder.getNome(),
        cpf: ClientsBuilder.getCpf(),
        data_nasc: ClientsBuilder.getDataNasc(),
        email: ClientsBuilder.getEmail(),
        password: ClientsBuilder.getPassword(),
      });
  
      return client;
    } catch (err) {
      console.log("Exception from ClientsDAL.js/create: " + err);
    }  
  }
}

export default new ClientsDAL();
