var roleCollector = require('role.collector');

module.exports={
  run: function(creep){
    if(Memory.harvester.length > Memory.harvesterTotal || (creep.memory.level < Memory.cityLevel && Memory.harveste.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{


    if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

    if(!creep.memory.working && creep.carry.energy === 0) {creep.memory.working = true;}
    if(creep.memory.working && creep.carry.energy === creep.carryCapacity){
      if(Memory.collector.length > 0){
        if (creep.room.name === Memory.Home.name){creep.drop(RESOURCE_ENERGY)};
      }else {
        creep.memory.working = false;
      }
    }

    if(creep.memory.aboutToDie){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else {
      if(creep.memory.working){
        if(creep.carry.energy < creep.carryCapacity){

          var droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
          if(droppedEnergy && Memory.collector.length === 0){
            if(creep.pickup(droppedEnergy) === ERR_NOT_IN_RANGE){
              creep.moveTo(droppedEnergy);
            }
          }else{
            var energy = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(energy){
              if(creep.harvest(energy) === ERR_NOT_IN_RANGE){
                creep.moveTo(energy);
              }
            }else{
                energySource = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
                if(energySource){
                    if(creep.pickup(energySource) === ERR_NOT_IN_RANGE){creep.moveTo(energySource);}
                    if (creep.room.name === Memory.Room01.name){creep.moveTo(Memory.Idle);}
                    
                }
              //if(creep.room.name === Memory.Home.name){creep.moveTo(Game.flags.KILL);}
              
              //creep.drop(RESOURCE_ENERGY);
              //creep.moveTo(Memory.Idle);
              //roleCollector.run(creep);
          
            }
          }
        }
      }else{
        //creep.moveTo(Memory.Idle);
        if(Memory.collector.length === 0){roleCollector.run(creep);}else {
          creep.drop(RESOURCE_ENERGY);
          creep.memory.working = true;

        }
        //else {roleBuilder.run(creep);}
      }
    }

}

  }
}
