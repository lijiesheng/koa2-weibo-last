/**
 * @description 登录验证中间件
 * @author ljs
 */

const {} = require('../model/ErrorInfo')

 // api 登录验证
 async function loginCheck(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        // 已登录 
        await next();
        return;
    }
    // 为登录
    ctx.body = new ErrorModel();
 }

 // 页面 登录验证
 async function loginRedirect(ctx, next) {

 }