const Router = require("koa-router");
const routes = require("./routes");

var router = new Router();

Object.keys(routes).forEach((key) => {
  router.use("/" + key, routes[key]);
});

router.prefix("/api");

module.exports = router;
