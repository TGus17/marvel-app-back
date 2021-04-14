require('dotenv').config();

const {
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_HOSTNAME,
  MYSQL_DATABASE,
} = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USERNAME,
    "password": MYSQL_PASSWORD,
    "database": MYSQL_DATABASE,
    "host": MYSQL_HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
