import Categorie from '../models/Categories';

class CategorieController {
  async index(req, res) {
    try {
      const categories = await Categorie.findAll();

      return res.json(categories);
    } catch (err) {
      console.log("Exception from CategorieController.js/index: " + err);
    }
  }

  async create(req, res) {
    try {
      const response = await Categorie.create(req.body);

      if (!response) {
        return res.status(400).json({ error: 'Erro ao cadastrar uma categoria, tente novamente!' });
      }

      return res.json(response);
    } catch (err) {
      console.log("Exception from CategorieController.js/create: " + err);
      return res.status(400).json({ error: 'Erro ao cadastrar uma categoria, tente novamente!' });
    }
  }

  async update(req, res) {
    try {
      const { id, nome } = req.body;

      const categories = await Categorie.update({ nome }, {
        where: {
          id: id
        }
      });

      return res.json(categories);
    } catch (err) {
      console.log("Exception from CategorieController.js/update: " + err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const categorie = await Categorie.findOne(
        {
          where: {
            id: id
          }
        }
      );

      const response = await categorie.destroy();

      console.log(response);

      return res.json(response);
    } catch (err) {
      console.log("Exception from CategorieController.js/delete: " + err);
    }
  }
}

export default new CategorieController();
