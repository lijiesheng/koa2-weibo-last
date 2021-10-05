/**
 * @description 连接 redis 的方法 get set
 * @author ljs
 */

 const redis = require('redis');

 const { REDIS_CONF } = require('../conf/db');

 // 创建一个客户端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

// 监听 redis 的错误
redisClient.on('error', err => {
    console.log('redis error',err);
});

/**
 * set 方法 过期时间是1小时以后
 * redis set
 * @param {string} key key
 * @param {string} val val
 * @param {number} timeout 过期时间，单位 s
 */

function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        // 对象变为字符串
        val = JSON.stringify(val);
    }
    redisClient.set(key, val);
    redisClient.expire(key, timeout);
}

/**
 * redis get
 * @param {string} key key
 */
function get(key) {
    // if (typeof key === 'object') {
    //     key = JSON.stringify(key);
    // }
    // return redisClient.get(key);
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (var == null) {
                resolve(null)
                return
            }
            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (ex) {
                resolve(val);
            }
        })
    })
    return promise;
}

module.exports = {
    set,
    get
}
