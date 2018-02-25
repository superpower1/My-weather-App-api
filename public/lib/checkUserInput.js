// const numOnly = require('./numOnly')
// const symbolOnly = require('./symbolOnly')

function checkUserInput(input) {
  if (!input.trim()) {
    return false;
  }
  if (numOnly(input)) {
    return false;
  }
  if (symbolOnly(input)) {
    return false;
  }
  return true;
}

// module.exports = checkUserInput
