/**
 * 
 */

const seq = require('./seq');

// 测试连接
seq.authenticate().then( () => {
    console.log('ok');
}).catch( () => {
    console.log('err');
})


// 执行同步  force 无论有在数据库有没有表，都会删除数据库的表，然后重新创建
// process.exit() 创建完表 后退出
seq.sync({ force : true}).then( () => {
    console.log('同步成功');
    process.exit();
})
