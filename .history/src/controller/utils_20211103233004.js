/**
 * @description utils controller
 * @author ljs
 */

const { SuccessModel, ErrorModel} = require('../model/ResModel');

const MAX_SIZE = 1024 * 1024 * 1024   // 文件上传最大为 1G
async function saveFile({name, type, size, filePath}) {
    if (size > MAX_SIZE) {
        return new Error
    }
}

module.exports = {
    saveFile
}