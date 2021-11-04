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

const MAX_SIZE = 1024 * 1024 * 1024   // 文件上传最大为 1G
async function saveFile({name, type, size, filePath}) {
    if (size > MAX_SIZE) {
        // 删除文件
        
        return new ErrorModel(uploadFileSizeFailInfo);
    }
}

module.exports = {
    saveFile
}