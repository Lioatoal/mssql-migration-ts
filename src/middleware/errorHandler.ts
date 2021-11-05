import { v4 as uuidv4 } from 'uuid';

import errorCode from '../../errorCode.json'

export default async (ctx, next) => {
  try { await next() } 
  catch (err) {
    ctx.status = err.status || 500

    if (ctx.status === 404) {
      ctx.body = '404 Not Found'
    } else {
      const { type, error, data} = errorCode[err.message]
      ctx.body = {
        eid: uuidv4(),
        success: false,
        type,
        error,
        data,
      }
    }
  }
}