const Koa = require('koa')
const app = new Koa()
var cors = require('koa2-cors');

const json = require('koa-json')
const onerror = require('koa-onerror')

const koaBody = require('koa-body') 
const logger = require('koa-logger')

// const admin = require('./routes/admin')
// const category = require('./routes/category')
const comment = require('./routes/comment')
const order = require('./routes/order')
const product = require('./routes/product')
const wechatUser = require('./routes/wechatUser')

// error handler
onerror(app)

app.use(koaBody());
app.use(cors())
// middlewares

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))



// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(admin.routes(), admin.allowedMethods())
// app.use(category.routes(), category.allowedMethods())
app.use(order.routes(), order.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())

app.use(product.routes(), product.allowedMethods())
app.use(wechatUser.routes(), wechatUser.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
