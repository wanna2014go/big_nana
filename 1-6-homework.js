const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const json = require("koa-json");

const app = new Koa();
const router = new Router();

router.prefix("/api");

router.post("/user", async (ctx) => {
    let {
        header
    } = ctx.request
    let {
        body
    } = ctx.request;
    let code = 200
    let msg = '上传成功'

    console.log('header==', header)
    console.log('body==', body)

    if (!header.role || header.role != 'admin') {
        code = 401
        msg = 'unauthorized post'
    }

    if (!body.name || !body.email) {
        code = 404
        msg = 'name与email不得为空'
    }

    if (code == 200) {
        ctx.body = {
            code: code,
            data: {
                ...body
            },
            msg: msg
        }
    } else {
        ctx.body = {
            code: code,
            msg: msg
        }
    }
});

app.use(koaBody());
app.use(cors());
app.use(json({
    pretty: false,
    param: "pretty"
}));
app.use(router.routes()).use(router.allowedMethods);

app.listen(3000);