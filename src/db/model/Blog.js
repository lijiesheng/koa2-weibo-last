/**
 *  @description 博客数据模型
 *  @author ljs
 */
const seq = require('../seq')
const User = require('./User')

const { STRING, INTEGER, DECIMAL, TEXT} = require('../type')

// Blog 模型 表名是 blogs
const Blog = seq.define('blogs', {
    // id 会自动创建，并设置为主键，自增
    userId : {
        type : INTEGER,
        allowNull : false,
        comment : '用户Id'
    },
    content : {
        type : TEXT,
        allowNull : false,
        comment: '博客内容'
    },
    image : {
        type : STRING,
        comment : '图片地址'
    }
    // createdAt 和 updateAt 会自动生成
})



module.exports = Blog