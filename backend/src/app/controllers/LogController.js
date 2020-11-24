import Log from '../models/Log';

class LogController {
  async index(req, res) {
    const logs = await Log.findAll();

    return res.json(logs);
  }

  async create(req, res) {
    try {
      // const { campo, valor_anterior, valor_posterior, entidade, op } = req.body;

      const data = await Log.create(req.body);

      return res.json(data);
    } catch (err) {
      console.log("Exception from LogController.js/create: " + err);
    }
  }
}

export default new LogController();
