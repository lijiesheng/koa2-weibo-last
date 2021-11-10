/**
 * @description user API 路由
 * @author ljs
 */

const router = require('koa-router')();
const redis = require('../../common/redis');
 const { isExist, register, login, deleteUser, changeInfo, changePassword, logout } = require('../../controller/user')
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
     console.log("用户名是否存在   进来了");
     const { userName } = ctx.request.body;
     console.log("userName controller ===>", userName);
     let res = await isExist(userName);
     console.log("res ====> ", res);
     ctx.body = res;
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

 /**
  * 修改个人信息
  * 修改用 patch
  * 新增用 post
  */
 router.patch('/changeInfo', 
        loginCheck, 
        genValidator(userValidate) , 
        async(ctx, next) => {
            const { nickName, city, picture } = ctx.request.body;
            // controller
            ctx.body = await changeInfo(ctx, 
                {
                    nickName,
                    city,
                    picture
                }
            );
 } )

 /**
  * 修改密码
  */
 router.patch ('/changePassword', 
        loginCheck, 
        genValidator(userValidate),
        async(ctx, next) => { 
            const {password , newPassword} = ctx.request.body;
            // controller
            // 修改密码也会改变 session， 所以要传入 ctx
            ctx.body = await changePassword(ctx, {
                newPassword,
                password
    })
}) 

/**
 * 退出登录
 */
router.post('/logout', loginCheck, async (ctx, next) => {
    ctx.body = await logout(ctx);
})


module.exports = router;