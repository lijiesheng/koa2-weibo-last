/**
 * @description sequelize 实例
 * @author ljs
 * 如果想要测试 sql.js 文件  终端输入 node ./src/conf/seq.js
 */

const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const { MYSQL_CONF } = require('./db');

// 引入 环境判断


const {databases, username, password, host, dialect} = MYSQL_CONF;
const conf = {
    host ,
    dialect 
}

// 线上环境，使用连接池
// conf.pool = {
//     max : 5,  // 连接池中最大的连接数量
//     min : 0,
//     idle : 10000  // 一个连接池10s 内没有被使用就会被释放
// }

/**
 * 数据库名 ：koa2_weibi_test
 * 用户名 : root
 * 密码 : ljs024816
 * ip : localhost
 * 数据库类型 : mysql
 */
const seq = new Sequelize(databases, username, password, conf);   // 数据库名字

// 测试连接
seq.authenticate().then( () => {
    console.log('ok');
}).catch( () => {
    console.log('err');
})

module.exports = seq;