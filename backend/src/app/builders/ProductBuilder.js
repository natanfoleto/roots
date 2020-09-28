class ProductBuilder {
  
  constructor() {
    this.nome = undefined;
    this.categoria = undefined;
    this.ativo = undefined;
    this.valor = undefined;
  }

  setNome(nome) {
    this.nome = nome;
    return this;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
    return this;
  }

  setAtivo(ativo) {
    this.ativo = ativo;
    return this;
  }

  setValor(valor) {
    this.valor = valor;
    return this;
  }

  /* ---------------------------------------------- */

  getNome() {
    return this.nome;
  }

  getCategoria() {
    return this.categoria;
  }

  getAtivo() {
    return this.ativo;
  }

  getValor() {
    return this.valor;
  }
}

export default new ProductBuilder();
