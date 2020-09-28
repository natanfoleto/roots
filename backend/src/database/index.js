import Sequelize from "sequelize";

import User from '../app/models/User';
import Product from '../app/models/Product';

import config from '../config/database';

const models = [User, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conn = new Sequelize(config);

    models.map(model => model.init(this.conn));
  }
}

export default new Database();
