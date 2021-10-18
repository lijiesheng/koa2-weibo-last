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

// 测试 jwt 
router.post('/login/test', async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  let userInfo;
  if (userName === 'zhangsan' && password === 'abc') {
    // 登陆成功 ，获取用户信息
  }
  ctx.body = {
    userName : userName,
    password : password
  }
})



module.exports = router
