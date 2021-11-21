/**
 * @description 数据模型入口文件
 * @author ljs
 */
const User = require('./User');
const Blog = require('./Blog')

// Blog 和 User 的关系
Blog.belongsTo(User, {
    // 创建外键 Blog.userId -> User.id
    foreignKey : 'userId'
})

// Blog 和 User 的关系
User.hasMany(Blog, {
    foreignKey : 'userId'
})


module.exports = { 
    User,
    Blog
}