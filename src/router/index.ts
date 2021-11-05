import compose from 'koa-compose'
import Router from 'koa-router'
import { env } from 'process'

import Config from '../../config/dbConfig'
import middleware from '../middleware'

import intro from './intro'
import information from './information'

const routeMap = {
  '/': intro,
  '/info': information,
}

const proceedNestedRoute = routes => {
  const router = new Router()
  if (Array.isArray(routes)) {
    for (let i = 0; i < routes.length; i++) {
      const {
        method, path, controller, beforeAction = [], afterAction = [],
      } = routes[i]

      if(path !== 'login') beforeAction.push(middleware.checkToken)
      beforeAction.push(middleware.logger.httpMethodLog)

      router[method](path, ...beforeAction, controller, ...afterAction)
    }
  }

  return router
}

const proceedRouteMap = (routes, router) => {
  if (!routes || !router) return

  Object.keys(routes).forEach(key => {
    const nestedRouter = proceedNestedRoute(routes[key])
    router.use(key, nestedRouter.routes())
  })
}

const mainRouter = new Router()
proceedRouteMap(routeMap, mainRouter)

// index html
mainRouter.get('/', async ctx => {
  const { projectName, version } = Config
  ctx.body = { title: projectName, version }
})

export default function () {
  return compose([
    mainRouter.routes(),
    mainRouter.allowedMethods(),
  ])
}
