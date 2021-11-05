require('dotenv').config({path: './config.env'});

export default {
  projectName: 'Koa2 Server',
  version: '1.0.0',
  hccmkDB: {
    database: process.env.HCCMK_DB || '',
    replication: {
      read: [
        {
          host: process.env.HCCMK_HOST || 'localhost',
          username: process.env.HCCMK_USERNAME || '',
          password: process.env.HCCMK_PASSWORD || '',
          port: 1433,
        },
      ],
      write: {
        host: process.env.HCCMK_HOST || 'localhost',
        username: process.env.HCCMK_USERNAME || '',
        password: process.env.HCCMK_PASSWORD || '',
        port: 1433,
      },
    },
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialect: 'mssql'  as  'mssql',
    define: {
      freezeTableName: true,
      underscored: false,
    },
    logging: false,
  },
  yoxiDB: {
    database: process.env.YOXI_DB || '',
    replication: {
      read: [
        {
          host: process.env.YOXI_HOST || 'localhost',
          username: process.env.YOXI_USERNAME || '',
          password: process.env.YOXI_PASSWORD || '',
          port: 1433,
        },
      ],
      write: {
        host: process.env.YOXI_HOST || 'localhost',
        username: process.env.YOXI_USERNAME || '',
        password: process.env.YOXI_PASSWORD || '',
        port: 1433,
      },
    },
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialect: 'mssql'  as  'mssql',
    define: {
      freezeTableName: true,
      underscored: false,
    },
    logging: false,
  },
}