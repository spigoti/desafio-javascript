var argv = require('minimist')(process.argv.slice(2));
exports.import = name => {
  const path = `${process.env.TESTS_PATH}/${name}`;
  return require(path);
};
