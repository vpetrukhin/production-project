const path = require('path');

const resolveRoot = (...segments) => path.resolve(__dirname, '..', '..', 'src', ...segments);

module.exports = resolveRoot;