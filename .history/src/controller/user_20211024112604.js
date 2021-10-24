/**
 * @description user controller
 * @author ljs
 */

 const { getUserInfo } = require('../service/user')
 const { SuccessModel, ErrorModel} = require('../model/ResModel');
 const { registerUserNameNotExistInfo } = require('../model/ErrorInfo');

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
  * @param {*} nickName 
  * @param {*} gender 
  * @param {*} picture 
  * @param {*} city 
  */
 async function register(userName, password, nickName, gender, picture, city) {

 }


 module.exports = {
    isExist
 }