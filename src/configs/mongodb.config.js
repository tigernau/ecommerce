"use strict";

const dev = {
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    cluster: process.env.DEV_DB_CLUSTER || "example",
    // port: process.env.DEV_DB_PORT || 27017,
    // name: process.env.DEV_DB_NAME || "devDB",
    username: process.env.DEV_DB_USERNAME || "username",
    password: process.env.DEV_DB_PASSWORD || "password",
  },
};

const pro = {
  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    cluster: process.env.PRO_DB_CLUSTER || "example",
    // port: process.env.PRO_DB_PORT || 27017,
    // name: process.env.PRO_DB_NAME || "proDB",
    username: process.env.PRO_DB_USERNAME || "username",
    password: process.env.PRO_DB_PASSWORD || "password",
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || "dev";
export default config[env];
