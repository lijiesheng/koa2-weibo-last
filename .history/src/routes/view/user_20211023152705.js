/**
 * @description user view [页面]路由
 * @author ljs
 */

  const router = require('koa-router')();

  router.get('/login', async (ctx, next) => {
      await ctx.render('login',{});
  })


  module.exports = router;