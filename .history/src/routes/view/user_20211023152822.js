/**
 * @description user view [页面]路由
 * @author ljs
 */

  const router = require('koa-router')();

  router.get('/login', async (ctx, next) => {
      await ctx.render('login',{});
  })

  router.get('/register', async (ctx, next) => {
      // 返回给 register.js 页面的数据
    await ctx.render('register',{});
  })


  module.exports = router;