import http from 'http'
import log4js from 'log4js'
import dotenv from 'dotenv'

//koa
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors';

import router from './src/router'
import middleware from './src/middleware'
import utils from './src/utils'
// import { hccmkDBSQL, yoxiDBSQL, testDBConnection } from './src/model'

if (process.env.ENVIRONMENT === undefined) {
  dotenv.config({path: './config.env'});
}

log4js.configure({
  appenders: {
    std: {
      type: 'stdout', 
      layout: {
        type: 'pattern',
        pattern: '%d %p %c *%x{user}* %m%n',
        tokens: { user: () => { return 'System' }}
      },
    },
    file: { type: "dateFile", filename: "log.txt", encoding: "utf-8" }
  },
  categories: { 
    default: { appenders: ['std'], level: 'info' },
    api: { appenders: ['std', 'file'], level: 'all' } 
  },
});

const app = new Koa()

app
  .use(bodyParser({
    enableTypes: ['json', 'form', 'text'],
    jsonLimit: '5mb',
    formLimit: '5mb',
    textLimit: '5mb',
  }))
  .use(cors({ credentials: true }))
  .use(middleware.errorHandler)
  .use(router())

const server = http.createServer(app.callback())
const logger = log4js.getLogger()

server.listen(process.env.PORT || 3000, () => {
  logger.info(`Server start on port ${process.env.PORT || 3000}...`)
  // testDBConnection(hccmkDBSQL)
  // testDBConnection(yoxiDBSQL)
})

export default app;
