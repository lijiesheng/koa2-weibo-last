/**
 * @description user service
 * @author ljs
 * 
 */

 const { User } = require('../db/model/index')

 /**
  * 获取用户信息   异步
  * @param {*} userName 用户名
  * @param {*} password 密码
  */
 async function getUserInfo(userName, password) {
    // 查询条件
    const whereOpt = {
        userName
    };
    if (password) {
        Object.assign(whereOpt , { password })
    };
    // 查询
    const result = await User.findOne({
        attributes : ['id', 'userName', 'nickName', 'gender', 'picture', 'city'],
        where : whereOpt
    });
    if (return == null) {
        return result
    }
    return result.dataValues;
 }

 module.exports = {
    getUserInfo
 }