const router = require('koa-router')()

const { loginRedirect } = require('../middlewares/loginChecks')

router.get('/' ,async (ctx, next) => {
  console.log("aaa ====");
  // 返回页面
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg : 'this is a msg,您好',
    isMe : true,
    blogList : [
      {
        id : 1,
        title : "aaa"
      },
      {
        id : 2,
        title : "bbb"
      },
      {
        id : 3,
        title : "ccc"
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  console.log("bbb");
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.sonsession;

  // // 页面查看次数
  // if (session.viewNum == null) {
  //   session.viewNum = 0;
  // }
  session.viewNum++;

  // 返回
  ctx.body = {
    title: 'koa2 json',
    // viewNum : session.viewNum
  }
})


router.get('/profile/:userName', async (ctx, next) => {
  let params = ctx.params;
  console.log("params====>",params);
  ctx.body = {
    title: 'this is a profile',
    userName : params.userName
  }
})

router.get('/loadMore/:userName/:pageIndex',async (ctx, next) => {
  let params = ctx.params;
  console.log("params====>",params);
  ctx.body = {
    title: 'this is a profile',
    userName : params.userName,
    pageIndex : params.pageIndex
  }
})

module.exports = router
