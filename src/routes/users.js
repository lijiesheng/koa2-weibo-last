const router = require('koa-router')()

// 前缀
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


router.post('/login',async (ctx, next) => {
  let params = ctx.request.body;
  console.log("params====>",params);
  ctx.body = {
    userName : params.userName,
    password : params.password
  }
})



module.exports = router
