export default [
  {
    method: 'get',
    path: '/',
    beforeAction: [],
    controller: ctx => {
      //todo check params exist
      const { err } = ctx.request.query
      
      if(err !== undefined) {
        ctx.throw({code: 'E40100', log: 'api', message: 'URL: /login - Error: error'})
      }
      ctx.body = '/get-intro' 
    },
  }
]
