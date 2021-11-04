/**
 * @description 公用方法   图片上传
 * @author ljs
 */

const router = require('koa-router')();
const koaForm = require('formidable-upload-koa');
const { loginCheck } = require('../../middlewares/loginChecks');

router.prefix('/api/utils')


// 上传图片
router.post('/upload', loginCheck,  async (ctx, next) => {
    
})


module.exports = router
