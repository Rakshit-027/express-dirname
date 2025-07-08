const path = require('path");
const { fileURLToPath } = require('url');

function getDirname(metaUrl) {
  if (metaUrl && metaUrl.startsWith('file://')) {
    return path.dirname(fileURLToPath(metaUrl));
  }
  return __dirname;
}

module.exports = { getDirname };