const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const redisStore = require('koa-redis')
const session = require('koa-generic-session')
const JWT = require('koa-jwt')

const index = require('./routes/index')
const user = require('./routes/view/user')
const error = require('./routes/view/error')
const { SECRET } = require('./conf/constants')

const {REDIS_CONF} = require('./conf/db')
const {isProd} = require('./utils/env')

app.use(JWT({
  secret : SECRET
}).unless({
  // path : [/^\/users\/login\/test/]   // 自定义哪些目录忽略 jwt 的验证，因为第一次登录，没有token
     path : [/^\/login/, /^\/login/]   // 自定义哪些目录忽略 jwt 的验证，因为第一次登录，没有token
}))

let onerroeConf = {}
if (isProd) {
  onerroeConf = {
    redirect : '/error'
  }
}



// error handler
onerror(app, onerroeConf)

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


// session 配置
// 自动将 session 的值key的值存入到 redis 中
app.keys = ['UIsdf_787#s%'];  // 加密 这个是我随便起的
app.use(session({
  key : 'weibo.sid',  // cookie key的 默认值是 'koa.sid'
  prefix : 'weibo.sess:', // redis key 的前缀，默认是 koa:sess:
  cookie : {
    path: '/',
    httpOnly : true,
    maxAge: 24 * 60 * 60 * 1000 // ms  cookie过期时间，redis的过期时间也是这个
  },
  store : redisStore({
    all : `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
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
app.use(user.routes(),index.allowedMethods())



// 404路由在 放在最后
app.use(error.routes(), error.allowedMethods()) 

// error-handling   打印error信息
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
