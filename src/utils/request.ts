//request tool
import fetch, { Response } from 'node-fetch';
//timeout Control
import AbortController from "abort-controller"
import Log4js from 'log4js';

const logger = Log4js.getLogger('api')

const params2Str = (data: Object) => {
  let str = ''
  for (const key in data) {
    str += `${key}=${data[key]}&`
  }
  return str
}

const controller = new AbortController();

export const getCSQuery = async (params: Object, timeout = 6000, headers?) =>{
  const queryString = typeof params === 'object' ? `?${params2Str(params)}` : ''

  setTimeout(() => {
    controller.abort();
  }, timeout);

  let response: Response
  const url = process.env.HT_CMK_URL_DEV
  try {
    response = await fetch(`${url}${queryString}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ClientId': process.env.CLIENTID,
        'Authorization': process.env.TOKEN,
      },
      signal: controller.signal
    })
  } catch (error) {
    if (error.name === 'AbortError') {
      logger.error(`request was aborted: ${url}`)
		}
  } finally {
    clearTimeout(timeout);
  }

  return await response.json();
}