/**
 * @description user api test
 * @author ljs
 */
const server = require('../server');

// 用户信息
const testUserInfo = {
    userName : `u_${Date.now()}`,
    password : `p_${Date.now()}`,
    nickName : `u_${Date.now()}`,
    gender : 1
}
console.log('testUserInfo ==>',testUserInfo);

// 存储 cookie

let COOKIE = '';

// 注册
test ('注册一个用户，应该成功', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUserInfo);
    
    expect(res.body.errno).toBe(0);
})

// 重复注册
test ('重复注册一个用户，应该失败', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUserInfo);
    
    expect(res.body.errno).not.toBe(0);
})

// 查询用户是否存在
test ('查询用户是否存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send(testUserInfo);
    
    expect(res.body.errno).toBe(0);
})

// json schema 检测
test ('json schema 检测， 非法的格式，注册应该失败', async() => {
    const res = await server
        .post('/api/user/resgister')
        .send({
            userName: '123', // 用户名不是字母（或者下划线）开头,
            password : 'a',  // 最小长度不是 3
            gender : 'man'   // 不是数字
        })
    expect(res.body.errno).not.toBe(0);
})

// 登录
test('登录应该成功', async () => {
    console.log("开始测试 登录应该成功")
    const res = await server
        .post('/api/user/login')
        .send(testUserInfo);
    expect(res.body.errno).toBe(0);

    // 获取 cookie
    COOKIE = res.headers['set-cookie'].join(';');
})

// 修改基本信息
test ('修改基本信息应该成功', async () => {
    const res = await server.patch('/api/user/changeInfo').send({
        nickName : '测试昵称',
        city : '测试城市',
        picture : '/test.png'
    }).set('cookie', COOKIE)
    // 有了 cookie 证明已经登录了
    expect(res.body.errno).toBe(0)
})

// 修改用户密码
test ('修改密码应该成功', async () => {
    console.log("测试 修改密码");
    const res = await server.patch('/api/user/changePassword').send({
        password : testUserInfo.password ,
        newPassword: `p_${Date.now()}`
    })
    expect(res.body.errno).toBe(0)
})

// 删除 ，删除之前会有个 session 
test ('删除用户', async () => {
    const res = await server.post('/api/user/delete').set('cookie', COOKIE);
    expect(res.body.errno).toBe(0);
})

// 退出登录，
test ('退出登录', async () => {
    const res = await server.post('/api/user/logout').set('cookie', COOKIE);
    expect(res.body.errno).toBe(0);
})

// 查询用户是否存在，不应该存在
test ('查询用户是否存在, 不应该存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send(testUserInfo);
    
    expect(res.body.errno).not.toBe(0);
})

