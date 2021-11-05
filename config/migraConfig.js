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
    },
    "development": {
      "username": "roy",
      "password": "roy",
      "database": "hc-cmk",
      "host": "localhost",
      "dialect": "mssql",
      "operatorsAliases": false,
      "encrypt": true,
      "dialectOptions": {
        "encrypt": true,
        "options": {
          "encrypt": true,
          "requestTimeout": 450000,
        }
      },
      "logging": true
    },
    "stage": {
      "username": "roy",
      "password": "roy",
      "database": "hc-cmk",
      "host": "T-ROYSHEN",
      "dialect": "mssql",
      "operatorsAliases": false,
      "encrypt": true,
      "dialectOptions": {
        "encrypt": true,
        "options": {
          "encrypt": true,
          "requestTimeout": 450000,
        }
      },
      "logging": true
    },
    "production": {
      "username": "roy",
      "password": "roy",
      "database": "hc-cmk",
      "host": "T-ROYSHEN",
      "dialect": "mssql",
      "operatorsAliases": false,
      "encrypt": true,
      "dialectOptions": {
        "encrypt": true,
        "options": {
          "encrypt": true,
          "requestTimeout": 450000,
        }
      },
      "logging": true
    },
  }