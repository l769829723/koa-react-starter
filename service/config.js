const develop = {
  address: "127.0.0.1",
  port: 5009,
};

const product = {
  address: "0.0.0.0",
  port: 5009,
};

const test = {};

module.exports = ((env) => {
  const envs = {
    dev: develop,
    pro: product,
    test: test,
  };
  return envs[env] || product;
})(process.env.SERVER_MODE);
