class ClientsBuilder {
  
  constructor() {
    this.nome = undefined;
    this.cpf = undefined;
    this.dataNasc = undefined;
    this.email = undefined;
    this.password = undefined;
    this.ativo = undefined;
  }

  setNome(nome) {
    this.nome = nome;
    return this;
  }

  setCpf(cpf) {
    this.cpf = cpf;
    return this;
  }

  setDataNasc(dataNasc) {
    this.dataNasc = dataNasc;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPassword(password) {
    this.password = password;
    return this;
  }

  setAtivo(ativo) {
    this.ativo = ativo;
    return this;
  }

  /* ---------------------------------------------- */

  getNome() {
    return this.nome;
  }

  getCpf() {
    return this.cpf;
  }

  getDataNasc() {
    return this.dataNasc;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getAtivo() {
    return this.ativo;
  }
}

export default new ClientsBuilder();
