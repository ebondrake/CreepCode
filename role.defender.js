var roleHealer = require('role.healer');

module.exports={
  run: function(creep) {
    if(Memory.defender.length > Memory.defenderTotal || (creep.memory.level < Memory.cityLevel && Memory.defender.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{
      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

      if(creep.memory.aboutToDie){
        creep.moveTo(Game.spawns.Home);
      }else{
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target){
          if(creep.attack(target) == ERR_NOT_IN_RANGE){
            creep.moveTo(target);
          }else{
            console.log('Attacking: ' + target + '!');
          }
        }else{
          roleHealer.run(creep);
          //creep.moveTo(Game.flags.defender);
        }
      }
    }
  }
}
