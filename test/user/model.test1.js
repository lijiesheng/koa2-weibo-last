/**
 * @description user model test
 * @author ljs
 */

const  User  = require('../../src/db/model/User');

test ('User 模型的各个属性，符合预期', () => {
    // build 会构建一个内存的 User 实例，但是不会提交到数据库中
    const user = User.build({
        userName : 'zhangsan',
        password : 'p12333',
        nickName : '张三',
        // gender : 1,
        picture : 'xxx/xxx.png',
        city : '北京'
    })
    // 验证各个属性
    expect(user.userName).toBe('zhangsan');
    expect(user.password).toBe('p12333');
    expect(user.nickName).toBe('张三');
    expect(user.gender).toBe(0);       // 测试 gender 的默认值是不是 0
    expect(user.picture).toBe('xxx/xxx.png');
    expect(user.city).toBe('北京');
})