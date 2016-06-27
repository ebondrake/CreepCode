var cleanup = require('cleanup');
var AIspawn = require('AIspawn');
var AIrun = require('AIrun');

module.exports.loop = function () {

  //console.log('broken');

  cleanup.run(cleanup);
  AIrun.run(AIrun);
  AIspawn.run(AIspawn);

  var tower = Game.getObjectById('576d64ee4c28d01755d99541');

if(tower){
  var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  if(closestHostile) {
      tower.attack(closestHostile);
  }
}

if(tower && (Memory.harvester.length == Memory.harvesterTotal) && (Memory.builder.length == Memory.builderTotal) && Memory.roomFull) {

    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
    });
    if(closestDamagedStructure) {
        tower.repair(closestDamagedStructure);
    }
}

}//END loop function
