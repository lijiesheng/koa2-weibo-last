/**
 * @description 登录验证中间件
 * @author ljs
 */

const { loginCheckFailInfo } = require('../model/ErrorInfo');
const { SuccessModel, ErrorModel} = require('../model/ResModel');

 // api 登录验证
 async function loginCheck(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        // 已登录 
        await next();
        return;
    }
    // 为登录
    ctx.body = new ErrorModel(loginCheckFailInfo);
 }

 // 页面 登录验证
 async function loginRedirect(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        // 已登录 
        await next();
        return;
    }
    // 未登录
    // 1、获取当前的 url
    const curUrl = ctx.url;
    // 2、跳转到登录页面
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl));
 }

 module.exports = {
    loginCheck,
    loginRedirect
 }