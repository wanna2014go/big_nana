const koa = require('koa')
const  app = new koa()

const middlewre = function async(ctx, next) {
    console.log('this is a middleware!')
    console.log(ctx.request.path)
    next()
}

const middlewre1 = function async(ctx, next) {
    console.log('this is a middleware1!')
    console.log(ctx.request.path)
    next()
}

const middlewre2 = function async(ctx, next) {
    console.log('this is a middleware2!')
    console.log(ctx.request.path)
    next()
}

app.use(middlewre)
app.use(middlewre1)
app.use(middlewre2)

app.listen(3000)





