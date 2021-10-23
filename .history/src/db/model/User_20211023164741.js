/**
 * 
 * 
 * @description 用户数据模型
 * @author ljs
 */

 const seq = require('../seq');
 const { STRING, INTEGER, DECIMAL} = require('../type')

 // User 模型 表名是 users
 const User = seq.define('users', {
     // id 会自动创建，并设置为主键，自增
     userName : {
         type : STRING,    // varchar (255)
         allowNull : false,
         unique : true,    // 用户名唯一
         comment : '用户名，唯一'
     },
     password : {
         type : STRING,
         allowNull : false,
         comment : '密码'
     },
     nickName : {                   // 可以为空
         type : STRING,
         comment : '昵称'
     },
     gender : {
         type : DECIMAL,
         allowNull : false,
         
     }
 })