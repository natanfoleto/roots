import Sequelize from "sequelize";

import User from '../app/models/User';
import Product from '../app/models/Product';
import Categorie from '../app/models/Categories';
import Photo from '../app/models/Photo';
import Provider from '../app/models/Provider';

import config from '../config/database';

const models = [User, Product, Categorie, Photo, Provider];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conn = new Sequelize(config);

    models
      .map(model => model.init(this.conn))
      .map(model => model.associate && model.associate(this.conn.models));
  }
}

export default new Database();
