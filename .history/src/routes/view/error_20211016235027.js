/**
 * @description error 404 路由
 * @author ljs
 */

 const router = require('koa-router')()

 // error
 router.get('/error', async (ctx, next) => {
     await ctx.render('error');
 })

 // 404

 module.exports = router