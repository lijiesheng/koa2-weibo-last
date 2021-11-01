/**
 * @description user api test
 * @author ljs
 */
const server = require('../server');

// 用户信息
const testUserInfo = {
    userName : `u_${Date.now()}`,
    password : `p_${Date.now()}`,
    nickName : userName,
    gender : 1
}

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
        .send(testUserInfo.userName);
    
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
    const res = await server
        .post('/api/user/login')
        .send(testUserInfo);
    expect(res.body.errno).toBe(0);

    // 获取 cookie
    COOKIE = res.headers['set-cookie'].join(';');
})

// 删除
test ('删除用户', async () => {
    const res = await server.post('/api/user/delete').set('cookie', COOKIE);
    expect(res.body.errno).toBe(0);
})

// 查询用户是否存在
test ('查询用户是否存在, 不应该存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send(testUserInfo.userName);
    
    expect(res.body.errno).not.toBe(0);
})