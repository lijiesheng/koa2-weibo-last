/**
 * @description 数据格式化
 * @author ljs
 */

 /**
  * 用户默认头像
  * @param {*} obj 
  */
function _formatUserPicture (obj) {
    if (obj.picture == null) {
        obj.picture = 'https://dwz.cn/rnTnftZs'
    }
    return obj;
}

/**
 * @param {Array | objectv} list 用户列表或者单个用户对象
 */
function formatUser (list) {

}

module.exports = {
    _formatUserPicture
}