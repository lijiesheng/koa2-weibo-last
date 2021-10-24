/**
 * @description user service
 * @author ljs
 * 
 */

 const { User } = require('../db/model/index')
 const { formatUser } = require('./_format')

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
    if (result == null) {
        return result;
    }

    // 格式化
    formatUser(result);
    return result.dataValues;
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
 async function createUser(userName, password, nickName, gender, picture, city) {
     let data = {
        userName,
        password,
        nickName : nickName ? nickName : userName,
        gender,
     }
     if (picture) {
        data.picture = picture
     }
     if (city) {
        data.city = city;
     }
     const user = await User.create(data)
     return user.dataValues;
 }

 module.exports = {
    getUserInfo,
    createUser
 }