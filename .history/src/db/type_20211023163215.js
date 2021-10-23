

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
    BIGINT : Sequelize.BIGINT // BIGINT
        Sequelize.STRING(1234) // VARCHAR(1234)
Sequelize.STRING.BINARY // VARCHAR BINARY

Sequelize.TEXT('tiny') // TINYTEXT

Sequelize.INTEGER // INTEGER

Sequelize.BIGINT(11) // BIGINT(11)

Sequelize.FLOAT // FLOAT

Sequelize.FLOAT(11, 12) // FLOAT(11,12)

Sequelize.REAL // REAL 仅限于PostgreSQL.
Sequelize.REAL(11) // REAL(11) 仅限于PostgreSQL.
Sequelize.REAL(11, 12) // REAL(11,12) 仅限于PostgreSQL.

Sequelize.DOUBLE // DOUBLE
Sequelize.DOUBLE(11) // DOUBLE(11)
Sequelize.DOUBLE(11, 12) // DOUBLE(11,12)




 }

