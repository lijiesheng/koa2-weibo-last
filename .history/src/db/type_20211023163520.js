

/**
 * @description 数据类型
 * @author ljs
 * 原文链接
 * https://www.cnblogs.com/cangqinglang/p/11934302.html
 */

 const { Sequlize } = require('sequelize');
 module.exports = {
    STRING : Sequelize.STRING,       // VARCHAR(255)
    INTEGER : Sequelize.INTEGER,
    TEXT : Sequelize.TEXT,  // TEXT
    BIGINT : Sequelize.BIGINT ,// BIGINT
    DECIMAL(10, 2) : Sequelize.DECIMAL(10, 2), // DECIMAL(10,2)
    FLOAT : Sequelize.FLOAT ,// FLOAT
    DOUBLE : Sequelize.DOUBLE, // DOUBLE
    DOUBLE(11) : Sequelize.DOUBLE(11) // DOUBLE(11)
 }

