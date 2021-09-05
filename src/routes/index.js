const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log("aaa");
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


router.get('/profile/:userName', async (ctx, next) => {
  let params = ctx.params;
  console.log("params====>",params);
  ctx.body = {
    title: 'this is a profile',
    userName : params.userName
  }
})

router.get('/loadMore/:userName/:pageIndex',async (ctx, next) => {
  let params = ctx.params;
  console.log("params====>",params);
  ctx.body = {
    title: 'this is a profile',
    userName : params.userName,
    pageIndex : params.pageIndex
  }
})

module.exports = router
