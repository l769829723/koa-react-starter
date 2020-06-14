const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./router");
const config = require("./config");

const app = new Koa();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

if (!module.parent) app.listen(config.port);
