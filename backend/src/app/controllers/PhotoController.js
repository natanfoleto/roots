import PhotoFactory from '../factorys/PhotoFactory';
import PhotoDAL from '../dal/PhotoDAL';

class PhotoController {
  async get(req, res) {
    const { id_produto } = req.body;

    const data = await PhotoDAL.get(id_produto);

    return res.json(data);
  }

  async create(req, res) {
    const { originalname: name, filename: path, mimetype, size } = req.file;

    const url = "http://localhost:3333/photos/" + path;

    const photo = {
      nome: name,
      tamanho: size,
      formatoImagem: mimetype,
      url: url
    };

    await PhotoFactory.makePhoto(photo);

    const data = await PhotoDAL.create();

    return res.json(data);
  }
}

export default new PhotoController();
