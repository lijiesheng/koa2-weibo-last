const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares  解析post数据
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())   // 打印日志
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// // logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes 路由注册
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling   打印error信息
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
