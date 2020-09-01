import UserBuilder from '../builders/UserBuilder';

class UserFactory {
  async makeUser(user) {
    try {
      UserBuilder
        .setNome(user.nome)
        .setCpf(user.cpf)
        .setDataNasc(user.data_nasc)
        .setEmail(user.email)
        .setPassword(user.password);

      return UserBuilder;
    } catch (err) {
      console.log("Exception from UserFactory.js/makeUser: " + err);
    }
  }
}

export default new UserFactory();
