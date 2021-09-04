const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log("aaa");
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/strin', async (ctx, next) => {
  ctx.body = 'koa3 string'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
