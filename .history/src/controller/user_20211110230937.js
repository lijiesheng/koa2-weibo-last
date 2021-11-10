/**
 * @description user controller
 * @author ljs
 */

 const { getUserInfo, createUser, deleteUserService, updateUser } = require('../service/user')
 const { SuccessModel, ErrorModel} = require('../model/ResModel');
 const { registerUserNameExistInfo, 
   registerUserNameNotExistInfo, 
   registerFailInfo,
   loginPasswordNotExistInfo,
   changeInfoFailInfo ,
   deleteUserFailInfo , changePasswordFailInfo} = require('../model/ErrorInfo');
 const { doCrypto } = require('../utils/crpy');
const { formatUser } = require('../service/_format');

 /**
  * 用户名是否存在
  * 异步 ，因为要查询数据库，花时间
  * @param {*} userName 
  */
 async function isExist(userName) {
   console.log("userName service ===>", userName);
    const userInfo = await getUserInfo(userName);
    if (userInfo) {
       console.log('查询测试 是否存在');
       return new SuccessModel(userInfo);
    } 
    return new ErrorModel(registerUserNameNotExistInfo);
 }

 /**
  * 
  * @param {*} userName 用户名
  * @param {*} password 密码
  * @param {*} nickName 昵称
  * @param {*} gender 性别
  * @param {*} picture 图像
  * @param {*} city 城市
  */
 async function register({userName, password, nickName, gender, picture, city}) {
   console.log('service 测试进来了');
   console.log("userName ===>", userName);
   // 判断用户名是否存在
   const userInfo = await getUserInfo(userName);
   console.log("userInfo ===>",userInfo);
   if (userInfo) {
      // 用户名存在
      return new ErrorModel(registerUserNameExistInfo);
   }
   try {
      await createUser({userName, password, nickName, gender, picture, city});
      return new SuccessModel();
   } catch (ex) {
      console.error(ex.message, ex.stack);
      return new ErrorModel(registerFailInfo);
   }
 }

 // 这里需要用到 session 所以需要从路由传入 ctx
 async function login({ctx, userName, password}) {
    console.log("进来了");
    // 判断用户名是否存在
    const userInfo = await getUserInfo(userName);
    if (userInfo == null) {
       // 用户名不存在
      return new ErrorModel(registerUserNameNotExistInfo);
    }
    // 判断密码是否正确
    const passwordCrypto = doCrypto(password);
    if (passwordCrypto != userInfo.password) {
       console.log('密码不正确');
       return new ErrorModel(loginPasswordNotExistInfo);
    }
    console.log("成功");
    // 将值存入到 session 中
    if (ctx.session.userInfo == null) {
       ctx.session.userInfo = userInfo;
    }
    return new SuccessModel();
 }

 /**
  * @param {string} userName 在数据库中是唯一的
  * 
  */
 async function deleteUser({userName}) {
      const userInfo = await getUserInfo(userName);
      if (userInfo == null) {
         // 用户名不存在
         return new ErrorModel(registerUserNameNotExistInfo);
      }
      try {
         await deleteUserService({userName});
         return new SuccessModel();
      } catch (ex) {
         console.error(ex.message, ex.stack);
         return new ErrorModel(deleteUserFailInfo);
      }
 }

 /**
  * 
  * @param {*} ctx 修改完基本信息后，要将 session 的值变一下
  * @param {*} param1 
  */
 async function changeInfo(ctx, { nickName, city, picture }) {
   const { userName } = ctx.session.userInfo;
   if (!nickName) {
      nickName = userName;
   }
   
   // service 
   const result = await updateUser(
         {
            newPassword
         }, 
         {
            userName,
            
         }
   );
   if (result) {
      // 执行成功，更新session
      Object.assign(ctx.session.userInfo, {
         nickName,
         city,
         picture
      })
      // 返回
      return new SuccessModel();
   }
   return new ErrorModel(changeInfoFailInfo);
 }

 /**
  * @param 
  */
 async function changePassword(ctx, { newPassword,password }) {
    const userInfo = ctx.session.userInfo;
    // 第一步判断密码是否相同
    console.log("userInfo ==>",ctx.session.userInfo);
    if (doCrypto(password) != userInfo.password) {
       // 原来的密码不正确
      return new ErrorModel(changePasswordFailInfo);
    }
    // 第二步 更新session
     Object.assign(ctx.session.userInfo, {
      
   })

    // 第二步同步到数据库
    const result = await updateUser({
      newPassword,
      password
    });
    if (result) {
       // 执行成功，更新session
       Object.assign(ctx.session.userInfo, {
         newPassword
       })
       return new SuccessModel();
    }
    return new ErrorModel(changeInfoFailInfo);
 }

 module.exports = {
    isExist,
    register,
    login,
    deleteUser,
    changeInfo,
    changePassword
 }