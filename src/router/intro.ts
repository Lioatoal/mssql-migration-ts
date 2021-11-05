

export default [
  {
    method: 'get',
    path: 'intro',
    beforeAction: [],
    controller: ctx => {
      //todo check params exist
      const { err } = ctx.request.query
      
      if(err !== undefined) ctx.throw('INTERNAL_SERVER_ERROR')
      ctx.body = '/get-intro' 
    },
  }
]
