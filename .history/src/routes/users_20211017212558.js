const router = require('koa-router')()
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')


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
    userInfo = {
      userName : userName,
      password : password
    }
  }

  // 加密 userInfo
  let token ;
  if (userInfo) {
    token = jwt.sign(userInfo, );
  }

  if (userInfo == null) {
    ctx.body = {
      error : -1,
      message : "登录失败"
    }
    return ;
  }

  ctx.body = {
    error : 0,
    data : userInfo
  }
})



module.exports = router
