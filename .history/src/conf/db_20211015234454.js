/**
 * @description 存储配置 ，包括 redis mysql
 * @author ljs
 */

const ENV = require('../utils/env')

 // 本地 redis
 let REDIS_CONF = {
     port : 6379,
     host : '127.0.0.1'
 }

 let MYSQL_CONF = {
     databases : 'koa2_weibi_test',
     username : 'root',
     password : 'ljs024816'
 }

 // 线上 redis
 if (ENV.isProd) {
     REDIS_CONF = {
        port : 6379,
        host : 'xxx.xxx.xxx.xxx'
     }
 }


 // 测试 redis
 if (ENV.isDev) {
     REDIS_CONF = {
        port : 6379,
        host : '127.0.0.1'
     }
 }

console.log("输出当前环境：ENV ==> ",ENV);
console.log("当前环境：",REDIS_CONF)
 module.exports = {
    REDIS_CONF
 }