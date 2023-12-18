const merge = require("lodash.merge");

const commonConfiguration = require("./webpack/common");

module.exports = (_env, { mode }) => {
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfiguration, properlyConfig);
  return mergedConfig;
};
