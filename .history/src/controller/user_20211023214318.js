/**
 * @description user controller
 * @author ljs
 */

 const { getUserInfo } = require('../service/user')
 const { SuccessModel, ErrorModel} = require('../model/ResModel');

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
    return new ErrorModel({
        errno : 10003,
        message : '用户名不存在'
    });
 }


 module.exports = {
    isExist
 }