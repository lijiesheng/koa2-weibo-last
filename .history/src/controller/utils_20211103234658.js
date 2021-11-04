/**
 * @description utils controller
 * @author ljs
 */

const { SuccessModel, ErrorModel} = require('../model/ResModel');
const { registerUserNameExistInfo, 
    registerUserNameNotExistInfo, 
    registerFailInfo,
    loginPasswordNotExistInfo,
    deleteUserFailInfo,
    uploadFileSizeFailInfo } = require('../model/ErrorInfo');

const fse = require('fs-extra');   // 文件操作

const MAX_SIZE = 1024 * 1024 * 1024   // 文件上传最大为 1G

/**
 * 
 * @param {*} name  文件名 
 * @param {*} type 文件类型
 * @param {*} size 文件体积大小
 * @param {*} filePath 文件路径
 */
async function saveFile({name, type, size, filePath}) {
    if (size > MAX_SIZE) {
        // 删除文件
        await fse.remove(filePath);
        return new ErrorModel(uploadFileSizeFailInfo);
    }
    // 移动文件
    const fileName = 
}

module.exports = {
    saveFile
}