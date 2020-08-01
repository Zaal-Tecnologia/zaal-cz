'format cjs';

const engine = require('./engine');
const { types } = require('../zaal-cz.json');

module.exports = engine({
  types,
});
