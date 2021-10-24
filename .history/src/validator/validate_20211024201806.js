/**
 * @description json schema 数据校验
 * @author ljs
 */

 const Ajv = require('ajv');
 const ajv = new Ajv({
     // allErrors : true   // 输出所有的错误
 })

 /**
  * json schema 校验
  * @param {*} schema 规则
  * @param {*} data 校验数据
  */
 function validate(schema, data = {}) {
    const valid = ajv.validate(schema, data) {
        if ( !valid ) {
            return ajv.errors[0];
        }
    }
 }