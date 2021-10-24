/**
 * @description json schema 数据校验
 * @author ljs
 */

 const Ajv = require('ajv');
 const ajv = new Ajv()

 /**
  * json schema 校验
  * @param {*} schema 规则
  * @param {*} data 校验数据
  */
 function validate(schema, data = {}) {

 }