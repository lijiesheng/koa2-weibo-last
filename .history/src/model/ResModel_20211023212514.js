/**
 * @description res 的数据模型
 * @author ljs
 */

 /**
  * 基础模块
  */
 class BaseModel {
    constructor({ errno, data, message}) {
        this.errno = errno;
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
 }

 /**
  * 成功的数据模型
  */
 class SuccessModel extends BaseModel {
    constructor(data = {}) {
        super();
    }
 }
