/**
 * 
 * 
 * @description 用户数据模型
 * @author ljs
 */

 const {Sequelize} = require('sequelize');
 const seq = require('../seq');

 // User 模型 表名是 users
 const User = seq.define('users', {
     // id 会自动创建，并设置为主键，自增
     userName : {
         type : Sequelize.STRING,    // varchar (255)
         allowNull : false,
         comment : '用户名'
     },
     password : {
         type : Sequelize.STRING,
         allowNull : false,
         comment : '密码'
     },
     nickName : {                   // 可以为空
         type : Sequelize.STRING,
         comment : '昵称'
     },
     gender : {
         type : Sequelize.Num
     }
 })