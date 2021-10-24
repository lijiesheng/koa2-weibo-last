/**
 * @description 加密方法
 * @author ljs
 */

 const crypto = require('crypto');
 const { SRCRET_KEY } = require('../conf/constants')
 
 /**
  * md5 加密
  */
 function _md5(content) {
    const md5 = crypto.createHash('md5');   // 按照 md5 的方式加密
    return md5.update(content).digest('hex');  // 16进制
 }

 function doCrypto (content) {
    const str = `password=${content}&key=${SRCRET_KEY}`;        
    return _md5(str);
 }

 module.exports = {
    doCrypto
 }