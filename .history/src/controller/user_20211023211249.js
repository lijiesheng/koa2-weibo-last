/**
 * @description user controller
 * @author ljs
 */

 const { getUserInfo } = require('../service/user')

 /**
  * 用户名是否存在
  * 异步 ，因为要查询数据库，花时间
  * @param {*} userName 
  */
 async function isExist(userName) {
    getUserInfo(userName)
 }


 module.exports = {
    isExist
 }