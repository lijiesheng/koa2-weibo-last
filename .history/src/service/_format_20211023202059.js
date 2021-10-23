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


