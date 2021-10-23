/**
 * @description 数据格式化
 * @author ljs
 */
const { PICTURE_URL } = require();

 /**
  * 用户默认头像
  * @param {*} obj 
  */
function _formatUserPicture (obj) {
    if (obj.picture == null) {
        obj.picture = '
    }
    return obj;
}

/**
 * 格式化用户信息
 * @param {Array | objectv} list 用户列表或者单个用户对象
 */
function formatUser (list) {
    if (list == null) {
        return list;
    }
    if (list instanceof Array) {
         // list.forEach(v => _formatUserPicture(v));  都一样
        list.map(_formatUserPicture);
        return list;
    }
    return _formatUserPicture(list);
}

module.exports = {
    formatUser
}