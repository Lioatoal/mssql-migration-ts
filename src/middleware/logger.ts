import log4js from 'log4js'

const logger = log4js.getLogger('api');

export const httpMethodLog = async (ctx: any, next: any) =>{
  const agent = ctx.request.header['user-agent'];
  const host = ctx.request.header.host;
  const method = ctx.request.method;
  const url = ctx.request.url;

  logger.trace(`HOST:${host} - METHOD:${method} - URL:${url} - AGENT:${agent}`)

  await next()
}