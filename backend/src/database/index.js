import Sequelize from "sequelize";

import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';
import Photo from '../app/models/Photo';
import Provider from '../app/models/Provider';
import Client from '../app/models/Client';
import Log from '../app/models/Log';

import config from '../config/database';

const models = [User, Product, Category, Photo, Provider, Client, Log];

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
