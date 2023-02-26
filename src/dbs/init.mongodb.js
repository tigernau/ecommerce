"use strict";
import mongoose from "mongoose";
import mongodbConfig from "../configs/mongodb.config.js";

const { cluster, username, password } = mongodbConfig.db;
const CONNECTION_STRING = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect(CONNECTION_STRING);
      console.log("Connect to Mongodb success!");
    } catch (error) {
      console.log("Connect to Mongodb faild!");
      console.log(error.message);
    } finally {
      console.log("Mongodb disconnect!");
      await mongoose.disconnect();
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
