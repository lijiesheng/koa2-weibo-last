

/**
 * @description 数据类型
 * @author ljs
 * 原文链接
 * https://www.cnblogs.com/cangqinglang/p/11934302.html
 */

 const { BOOLEAN } = require('sequelize');
 const Sequelize = require('sequelize');
 
 module.exports = {
     STRING : Sequelize.STRING,       
     INTEGER : Sequelize.INTEGER,
     TEXT : Sequelize.TEXT,  
     BIGINT : Sequelize.BIGINT ,
     DECIMAL : Sequelize.DECIMAL, 
     FLOAT : Sequelize.FLOAT ,
     DOUBLE : Sequelize.DOUBLE, 
     BOOLEAN : Sequelize.BOOLEAN
 }

