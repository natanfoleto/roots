import api from '../services/api';

class Logs {
  async create(log) {
    try {
      await api.post('/logs', log);

    } catch (err) {
      console.log("Exception from RegisterLogs.js/create: " + err);
    }
  }
}

export default new Logs();
