import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    try {
      const categories = await Category.findAll();

      return res.json(categories);
    } catch (err) {
      console.log("Exception from CategorieController.js/index: " + err);
    }
  }

  async create(req, res) {
    try {
      const response = await Category.create(req.body);

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

      const categories = await Category.update({ nome }, {
        where: {
          id: id
        }
      });

      return res.json(categories);
    } catch (err) {
      console.log("Exception from CategoryController.js/update: " + err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const categorie = await Category.findOne(
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
      console.log("Exception from CategoryController.js/delete: " + err);
    }
  }
}

export default new CategoryController();
