/**
 * @description utils controller
 * @author ljs
 */

const path = require('path')
const { SuccessModel, ErrorModel} = require('../model/ResModel');
const { registerUserNameExistInfo, 
    registerUserNameNotExistInfo, 
    registerFailInfo,
    loginPasswordNotExistInfo,
    deleteUserFailInfo,
    uploadFileSizeFailInfo } = require('../model/ErrorInfo');

const fse = require('fs-extra');   // 文件操作

// 文件存储目录  
/**
 * __dirname 当前目录
 * .. 向上一级
 * .. 向上一级
 */
const uploadDir = path.join(__dirname, '..', '..', 'uploadFiles' )

// 文件上传最大为 1G
const MAX_SIZE = 1024 * 1024 * 1024   

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
    const fileName = Date.now() + '.' + name // 防止重名
    const disFilePath = path.join(uploadDir, fileName); // 文件存放的地方
    await fse.move(filePath, disFilePath);  // 移动文件

    // 返回图片的地址
    return new SuccessModel({
        data : 
    });
}

module.exports = {
    saveFile
}