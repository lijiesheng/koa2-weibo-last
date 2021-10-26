// https://blog.csdn.net/qq_33589252/article/details/85535890
const Redis = require('ioredis');

let redis = {};
redis = new Redis();   //   默认 Connect to 127.0.0.1:6379

module.exports = redis;
