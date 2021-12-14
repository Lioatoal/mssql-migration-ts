require('dotenv').config({path: './config.env'});

module.exports = {
    "local": {
      "username": process.env.HCCMK_USERNAME,
      "password": process.env.HCCMK_PASSWORD,
      "database": process.env.HCCMK_DB,
      "host": process.env.HCCMK_HOST,
      "dialect": "mssql",
      "operatorsAliases": false,
      "encrypt": true,
      "dialectOptions": {
        "options": {
          "requestTimeout": 450000,
          "instanceName": process.env.SEQUELIZE_INSTANCE_NAME
        }
      },
      "logging": true
    }
  }