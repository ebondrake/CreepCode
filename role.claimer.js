var roleHealer = require('role.healer');

module.exports={
  run: function(creep) {
    if(Memory.claimer.length > Memory.claimerTotal || (creep.memory.level < Memory.cityLevel && Memory.claimer.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{
      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}
      if(creep.room.controller && !creep.room.controller.my) {
        if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
      }else{
        creep.moveTo(Game.flags.KILL);
      }
    }
  }
}
