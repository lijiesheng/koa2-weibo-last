/**
 * @description user API 路由
 * @author ljs
 */

 const router = require('koa-router')();
 const = require('../../')
 router.prefix('/api/user')

 // 注册路由
 router.post('/register', async (ctx, next) => {

 })

 // 用户名是否存在
 router.post('/isExist', async (ctx, next) => {
     const { userName } = ctx.request.body;
     
 })

 module.exports = router;