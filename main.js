var cleanup = require('cleanup');
var memoryInit = require('memoryInit');
var AIrun = require('AIrun');
var AIspawn = require('AIspawn');
var roomDefense = require('roomDefense');

module.exports.loop = function () {
    cleanup.run();
    memoryInit.run();
  AIrun.run();
  AIspawn.run();
  roomDefense.run();
}
