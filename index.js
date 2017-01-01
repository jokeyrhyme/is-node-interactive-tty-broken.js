var satisfies = require('semver').satisfies

var BROKEN = '>=4 <4.2 || >=5 <5.3 || >=5.6 <6.2'
var FIXED = '<4 || >=4.2 <5 || >=5.3 <5.6 || >= 6.2'

function isWindows (platform) {
  return (platform || process.platform).indexOf('win') === 0
}

function isBroken (version, platform) {
  if (isWindows(platform)) {
    return satisfies(version || process.version, BROKEN)
  }
  return false
}

function isFixed (version, platform) {
  if (isWindows(platform)) {
    return satisfies(version || process.version, FIXED)
  }
  return true
}

module.exports = {
  isBroken: isBroken,
  isFixed: isFixed
}
