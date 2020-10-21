import Photo from '../models/Photo';

import PhotoBuilded from '../builders/PhotoBuilder';

class PhotoDAL {
  async get() {
    try {
      const photos = await Photo.findAll();

      return photos;
    } catch (err) {
      console.log("Exception from PhotoDAL.js/get: " + err);
      return false;
    }
  }

  async create() {
    try {
      const photo = await Photo.create({
        nome: PhotoBuilded.getNome(),
        tamanho: PhotoBuilded.getTamanho(),
        formato_imagem: PhotoBuilded.getFormatoImagem(),
        url: PhotoBuilded.getUrl(),
      });

      return photo;      
    } catch (err) {
      console.log("Exception from PhotoDAL.js/create: " + err);
      return false;
    }  
  }
}

export default new PhotoDAL();
