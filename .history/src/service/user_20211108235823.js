/**
 * @description user service
 * @author ljs
 * 
 */

 const { User } = require('../db/model/index')
 const { formatUser } = require('./_format')
 const { doCrypto } = require('../utils/crpy')

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
        attributes : ['id', 'userName', 'password', 'nickName', 'gender', 'picture', 'city'],
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
 async function createUser({userName, password, nickName, gender, picture, city}) {
     console.log('doCrypto(password)===>',doCrypto(password));
     let data = {
        userName,
        password: doCrypto(password),
        nickName : nickName ? nickName : userName,
        gender,
     }
     if (picture) {
        data.picture = picture
     }
     if (city) {
        data.city = city;
     }
     const user = await User.create(data);
     return user.dataValues;
 }

 /**
  * 
  */
 async function deleteUserService ({userName}) {
     const user = await User.destroy({
         where : {
             userName
         }
     });
     return user.dataValues;
 }

/**
 * 
 * @param {*} param0 修改参数
 * @param {*} param1 修改条件
 */
 async function updateUser (
     {newPassword, newNickName, newPicture, newCity}, 
     { userName, password }
) {
    // 拼接修改内容
    
}

 module.exports = {
    getUserInfo,
    createUser,
    deleteUserService
 }