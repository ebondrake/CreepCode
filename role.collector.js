module.exports={
  run: function(creep){
    var target;
    var energySource;



    if(Memory.collector.length > Memory.collectorTotal || (creep.memory.level < Memory.cityLevel && Memory.collector.length > 1)){
      creep.moveTo(Game.spawns.Home);
    }else{

      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

      if(!creep.memory.working && creep.carry.energy === 0){creep.memory.working = true;}
      if(creep.memory.working && creep.carry.energy === creep.carryCapacity) {creep.memory.working = false;}

      if(creep.memory.aboutToDie){
        creep.moveTo(Game.spawns.Home);
      }else{
        if(creep.memory.working){

          energySource = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
          if(energySource){

            if(creep.pickup(energySource) === ERR_NOT_IN_RANGE){
              creep.moveTo(energySource);
            }
          }else{//if no dropped energy then
            energySource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_STORAGE ) && (structure.store[RESOURCE_ENERGY] > 0);}});
            if(!energySource){//if no storage then
              energySource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_CONTAINER ) && (structure.store[RESOURCE_ENERGY] > 0);}});
              //if(!energySource && ){
              //      energySource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER) && structure.energy > creep.carryCapacity;}});
              //  }
            }
            if(energySource) {//if storage or container
              if(creep.withdraw(energySource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(energySource);
              }
            }else{//if no dropped energy or storage or container
              if(Game.spawns.Home.energy < Game.spawns.Home.energyCapacity && Memory.roomEnergy > 300){
                energySource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy > 0;}});
                if(!energySource){
                    energySource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER) && structure.energy > 0;}});
                }
                if(creep.withdraw(energySource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                  creep.moveTo(energySource);
                }
              }else{//if no dropped energy or storage or container or spawn is full or roomenergy is less than 300
              creep.memory.working = false;
              }
            }
          }//END if no energy on ground
        }else{//END if working
          target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER) && structure.energy <= structure.energyCapacity/2;}});
          if(!target){
            target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
            if(!target){
              target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy < structure.energyCapacity;}});
              if(!target){
                var towers = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;}});
                if(towers.length) {
                  towers.sort((a,b) => a.energy - b.energy);
                }
                target = towers[0];
                if(!target){
                  target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_CONTAINER ) && (structure.store[RESOURCE_ENERGY] < structure.storeCapacity);}});
                  if(!target){
                    target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_STORAGE ) && (structure.store[RESOURCE_ENERGY] < structure.storeCapacity);}});
                  }
                }
              }
            }
          }

          if(target){
            if(creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
              creep.moveTo(target);
            }
          }else{
            //creep.memory.working = true;
            creep.moveTo(Game.flags.Idle);
          }//END if target
        }//END if not working
      }//END need to heal
    }//END greater than collector length
  }//END function
}//END module.exports
