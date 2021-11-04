/**
 * @description user view [页面]路由
 * @author ljs
 */

const { ne } = require('sequelize/types/lib/operators');

  const router = require('koa-router')();

  /**
   * 获取登录信息
   * @param {*} ctx 
   */
  function getLoginInfo (ctx) {
    let data = {
      isLogin : false  // 默认未登录
    }

    const userInfo = ctx.session.userInfo
    if (userInfo) {
      data = {
        isLogin : true,
        userName : userInfo.userName
      }
    }
    console.log('data====>',data);
    return data;
  }

  router.get('/login', async (ctx, next) => {
      // 返回给 login.js 页面的数据
      await ctx.render('login', getLoginInfo(ctx));
  })

  router.get('/register', async (ctx, next) => {
      // 返回给 register.js 页面的数据
    await ctx.render('register',getLoginInfo(ctx)); 
  })

  router.get('/setting', async (ctx,next) => {
    await ctx.render();
  })

  module.exports = router;  