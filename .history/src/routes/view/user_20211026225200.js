/**
 * @description user view [页面]路由
 * @author ljs
 */

  const router = require('koa-router')();

  // 获取登录信息
  function getLoginInfo (ctx) {

  }

  router.get('/login', async (ctx, next) => {
      // 返回给 login.js 页面的数据
      await ctx.render('login',{
        isLogin:
        userName:
      });
  })

  router.get('/register', async (ctx, next) => {
      // 返回给 register.js 页面的数据
    await ctx.render('register',{
        isLogin:
        userName:
    });
  })


  module.exports = router;  