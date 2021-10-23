/**
 * @description 数据格式化
 * @author ljs
 */
function _formatUserPicture (obj) {
    if (obj.picture == null) {
        obj.picture = 'xxx'
    }
    return obj;
}