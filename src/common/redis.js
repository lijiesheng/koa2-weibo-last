// https://blog.csdn.net/qq_33589252/article/details/85535890
const Redis = require('ioredis');

let redis = {};
redis = new Redis();   //   默认 Connect to 127.0.0.1:6379


/**
 * redis 操作的例子
 * @type {*|{}}
 */
async function redisTest() {
    await redis.set("name", "ljs")
    await redis.set("age", 20)
     await redis.del("weibo.sess:zl3y_ru9ryxtEFHNLFX4cHJSoeISQtia")
    console.log(await redis.get("name"))
    console.log(await redis.get("age"))
    await redis.del("age")
    await redis.del("name")
}
redisTest();
module.exports = { redis };
