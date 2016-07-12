var roleHealer = require('role.healer');

module.exports={
  run: function(creep) {
    if(Memory.attacker.length > Memory.attackerTotal || (creep.memory.level < Memory.cityLevel && Memory.attacker)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{
      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}



        var targetWall = Game.getObjectById('578108df356031b25fe69a1b');
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        if(targetWall){
          //console.log(targetWall);
          if(creep.dismantle(targetWall) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targetWall);
          }
        }else if(target){
          if(creep.attack(target) == ERR_NOT_IN_RANGE){
            creep.moveTo(target);
          }
        }else{
          var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_SPAWN);}});
          if(!target){
            var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_EXTENSION);}});
            if(!target){
              var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_WALL) && (structure.hits  < 300000);}});
            }
          }

          if(target) {
              if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(target);
              }
          }else {
            //roleHealer.run(creep);
            creep.moveTo(Game.flags.KILL);
          }
        }
    }
  }
}
