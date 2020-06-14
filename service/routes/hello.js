const Router = require("koa-router");

const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = `Hello ${ctx.name || "Koa"}!`;
  await next();
});

router.post("/", async (ctx, next) => {
  ctx.body = ctx.request.body;
  await next();
});

module.exports = router.routes();
