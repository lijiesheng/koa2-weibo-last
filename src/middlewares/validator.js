/**
 * @description json schema 验证中间件
 * @author ljs
 */

const { ErrorModel } = require("../model/ResModel");
const { jsonSchemaFileInfo } = require("../model/ErrorInfo");


 /**
  * 生成 json schema 验证的中间件
  * @param {function} validateFn 验证函数
  */
 function genValidator(validateFn) {
     // 定义中间件函数
     async function validator (ctx, next) {
         // 校验数据
         const data = ctx.request.body;
         const error = validateFn(data);
         if (error) {
             console.log('数据格式错误');
             ctx.body = new ErrorModel(jsonSchemaFileInfo);
             return
         }
         // 验证成功，继续往下走
         await next();
     }
     return validator;
 }

 module.exports = {
    genValidator
 }