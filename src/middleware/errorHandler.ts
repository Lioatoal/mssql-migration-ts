import log4js from 'log4js'

import errorConfig from '../../config/errorConfig'

export default async (ctx, next) => {
  //throw error example
  //ctx.throw({code: 'E40100', log: 'api', message: 'URL: /login - Error: username or password is required'})

  try { await next() } 
  catch (err) {
    const { code, log, message } = err
    const { eid, error, data, status } = errorConfig[code] || errorConfig['E50000']
    
    log4js.getLogger(log ? log : 'default').error(`Eid: ${eid} - ${message || data}`)
    
    ctx.status = status || 500
    if (err.status === 404) {
      ctx.body = '404 Not Found'
    } else {
      ctx.body = {
        eid, 
        error, 
        data,
        success: false,
      }
    }
  }
}