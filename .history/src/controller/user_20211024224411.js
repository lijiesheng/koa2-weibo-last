/**
 * @description user controller
 * @author ljs
 */

 const { getUserInfo, createUser } = require('../service/user')
 const { SuccessModel, ErrorModel} = require('../model/ResModel');
 const { registerUserNameExistInfo, 
   registerUserNameNotExistInfo, 
   registerFailInfo,loginPasswordNotExistInfo } = require('../model/ErrorInfo');
 const { doCrypto } = require('../utils/crpy')

 /**
  * 用户名是否存在
  * 异步 ，因为要查询数据库，花时间
  * @param {*} userName 
  */
 async function isExist(userName) {
    const userInfo = await getUserInfo(userName);
    if (userInfo) {
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
   // 判断用户名是否存在
   const userInfo = await getUserInfo(userName);
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

 async function login({userName, password}) {
    console.log("进来了");
    // 判断用户名是否存在
    const userInfo = await getUserInfo(userName);
    if (userInfo == null) {
       // 用户名不存在
      return new ErrorModel(registerUserNameNotExistInfo);
    }
    // 判断密码是否正确
    const passwordCrypto = doCrypto(password);
    if (passwordCrypto != password) {
       return new ErrorModel(loginPasswordNotExistInfo);
    }
    return new SuccessModel();
 }

 module.exports = {
    isExist,
    register,
    login
 }