/**
 * @description user API 路由
 * @author ljs
 */

const router = require('koa-router')();
const redis = require('../../common/redis');
 const { isExist, register, login, deleteUser } = require('../../controller/user')
 const { userValidate } = require('../../validator/user')
 const { genValidator } = require('../../middlewares/validator');
 router.prefix('/api/user');
 const {isTest} = require('../../utils/env');
 const { loginCheck }= require('../../middlewares/loginChecks');

 // 注册路由
 router.post('/register', genValidator(userValidate) , async (ctx, next) => {
     console.log('controller 测试进来了');
     const { userName , password , gender} = ctx.request.body;
     console.log("userName = ", userName , "; password ==>", password, "; gender",gender);
     ctx.body = await register({userName , password , gender});
 })

 // 用户名是否存在
 router.post('/isExist', async (ctx, next) => {
     const { userName } = ctx.request.body;
     ctx.body = await isExist(userName);
 })

 // 登录
 router.post('/login', async (ctx, next) => {
     console.log('登录测试');
     const { userName, password } = ctx.request.body;
     console.log('登录测试');
     ctx.body = await login({ctx, userName, password});
 })

 /**
  * 不登录，不能删除
  */
 router.post('/delete', loginCheck, async (ctx, next) => {
    if (isTest) {
        // 测试环境下，测试账号登录后，删除自己
        const { userName } = ctx.session.userInfo;
        console.log("删除");
        ctx.body = await deleteUser({userName});
    }
 })

 module.exports = router;