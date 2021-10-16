const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const conf = {
    host : 'localhost',
    dialect : 'mysql'
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
const seq = new Sequelize('koa2_weibi_test','root','ljs024816',conf);   // 数据库名字

// // 测试连接
// seq.authenticate().then( () => {
//     console.log('ok');
// }).catch( () => {
//     console.log('err');
// })

module.exports = seq;