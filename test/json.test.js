const { TestWatcher } = require('jest');
const server = require('./server');

test ('json 接口返回数据格式正确',async () => {
    const res = await server.get('/json');
    expect(res.body).toEqual({
        title: 'koa2 json',
    });
    expext(res.body.title).toBe('koa2 json');
});


// test ('json 接口返回数据格式正确', async () => {
//     const res = await server.post('/json').send({
//         userName : 'zhangsan',
//         password : '123'
//     });
//     expect(res.body).toEqual({
//         title: 'koa2 json',
//     });
//     expext(res.body.title).toBe('koa2 json');
// })