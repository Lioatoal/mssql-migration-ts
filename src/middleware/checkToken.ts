
export default async (ctx, next) => {
  const token = ctx.request.headers.authorization  
  console.log(token);
  
  ctx.info = {}

  await next()
}
