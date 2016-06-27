var cleanup = require('cleanup');
var AIrun = require('AIrun');
var AIspawn = require('AIspawn');
var roomDefense = require('roomDefense');

module.exports.loop = function () {

  cleanup.run(cleanup);
  AIrun.run(AIrun);
  AIspawn.run(AIspawn);
  roomDefense.run(roomDefense);

}//END loop function
