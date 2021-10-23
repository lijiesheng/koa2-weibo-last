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
     
 })