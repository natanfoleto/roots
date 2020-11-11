import Provider from '../models/Provider';

class ProviderController {
  async index(req, res) {
    try {
      const providers = await Provider.findAll();

      return res.json(providers);
    } catch (err) {
      console.log("Exception from ProviderController.js/index: " + err);
    }
  }

  async create(req, res) {
    try {
      const response = await Provider.create(req.body);

      if (!response) {
        return res.status(400).json({ error: 'Erro ao cadastrar um produto, tente novamente!' });
      }

      return res.json(response);
    } catch (err) {
      console.log("Exception from ProviderController.js/create: " + err);
      return res.status(400).json({ error: 'Erro ao cadastrar um fornecedor, tente novamente!' });
    }
  }

  async update(req, res) {
    try {
      const { id, nome } = req.body;

      const providers = await Provider.update({ nome }, {
        where: {
          id: id
        }
      });

      return res.json(providers);
    } catch (err) {
      console.log("Exception from ProviderController.js/update: " + err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const provider = await Provider.findOne(
        {
          where: {
            id: id
          }
        }
      );

      const response = await provider.destroy();

      console.log(response);

      return res.json(response);
    } catch (err) {
      console.log("Exception from ProviderController.js/delete: " + err);
    }
  }
}

export default new ProviderController();
