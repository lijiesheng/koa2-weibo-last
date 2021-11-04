/**
 * @description 公用方法   图片上传
 * @author ljs
 * @url https://blog.csdn.net/ojb98K/article/details/107590088
 */

const router = require('koa-router')();
const koaForm = require('formidable-upload-koa');
const { loginCheck } = require('../../middlewares/loginChecks');

router.prefix('/api/utils')

// 下载模块的参数
const option = {
    uploadDir: `${__dirname}/`,  // 文件存放的位置
    keepExtensions: true,  // 包含扩展名
    maxFileSize: 1024 * 1024 * 512 // 大小为 512m
}

// 上传图片
router.post('/upload', loginCheck, koaForm(options), async (ctx, next) => {
    const file = ctx.req.files['file']  // 在ctx.req.files里获取到上传的文件，['file']是前端input上传文件组件的name属性值
    const { size, path, name, type } = file  // file 里面的参数
    ctx.body = await saveFile({  // 将文件移动的静态资源目录，用于下载
        name,
        type,
        size,
        filePath: path
    })
})


module.exports = router
