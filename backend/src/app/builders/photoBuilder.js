class PhotoBuilder {
  
  constructor() {
    this.nome = undefined;
    this.tamanho = undefined;
    this.formatoImagem = undefined;
    this.url = undefined;
  }

  setNome(nome) {
    this.nome = nome;
    return this;
  }

  setTamanho(tamanho) {
    this.tamanho = tamanho;
    return this;
  }

  setFormatoImagem(formatoImagem) {
    this.formatoImagem = formatoImagem;
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  /* ---------------------------------------------- */

  getNome() {
    return this.nome;
  }

  getTamanho() {
    return this.tamanho;
  }

  getFormatoImagem() {
    return this.formatoImagem;
  }

  getUrl() {
    return this.url;
  }
}

export default new PhotoBuilder();
