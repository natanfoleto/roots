import PhotoBuilder from '../builders/PhotoBuilder';

class PhotoFactory {
  async makePhoto(photo) {
    try {
      PhotoBuilder
        .setNome(photo.nome)
        .setTamanho(photo.tamanho)
        .setFormatoImagem(photo.formatoImagem)
        .setUrl(photo.url)

      return PhotoBuilder;
    } catch (err) {
      console.log("Exception from PhotoFactory.js/makePhoto: " + err);
    }
  }
}

export default new PhotoFactory();
