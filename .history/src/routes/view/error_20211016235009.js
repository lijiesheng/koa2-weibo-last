/**
 * @description error 404 路由
 * @author ljs
 */

 const router = require('koa-router')()

 router.get('/error', async (ctx, next) => {
     await ctx.render('error');
 })

 module.exports = router