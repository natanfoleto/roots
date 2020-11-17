import ClientsBuilder from '../builders/ClientsBuilder';

class ClientsFactory {
  async makeUser(clients) {
    try {
      ClientsBuilder
        .setNome(clients.nome)
        .setCpf(clients.cpf)
        .setDataNasc(clients.data_nasc)
        .setEmail(clients.email)
        .setPassword(clients.password);

      return ClientsBuilder;
    } catch (err) {
      console.log("Exception from ClientsFactory.js/makeClients: " + err);
    }
  }
}

export default new ClientsFactory();
