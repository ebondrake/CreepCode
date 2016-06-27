var roleHarvester = {
  run: function(creep) {

    //if harvesting value is null set to false.
    if(creep.memory.harvesting === null){
      creep.memory.harvesting = false;
    }

    //if not harvesting and not carrying energy set harvesting to true.
    if(!creep.memory.harvesting && creep.carry.energy === 0){
      var energy = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      creep.memory.harvesting = true;
    }

    //if harvesting and carrying full energy set harvesting to false.
    if(creep.memory.harvesting && creep.carry.energy === creep.carryCapacity){
      creep.memory.harvesting = false;
    }

    //if harvesting then do this
    if(creep.memory.harvesting){
      if(creep.carry.energy < creep.carryCapacity){
        var droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        if(droppedEnergy){
          if(creep.pickup(droppedEnergy) === ERR_NOT_IN_RANGE){
            creep.moveTo(droppedEnergy);
          }
        }else{
          //var energy = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
          if(creep.harvest(energy) === ERR_NOT_IN_RANGE){
            creep.moveTo(energy);
          }
        }
      }
      //if not harvesting then to this
    }else{
      if(creep.room.energyAvailable < creep.room.energyCapacityAvailable){
        var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
        if(creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          if(creep.moveTo(target) === ERR_NOT_FOUND){
            creep.moveTo(Game.flags.Idle);
          }
        }
      }else{
        creep.moveTo(Memory.Idle);
      }
    }
  }//END run function
};module.exports = roleHarvester;
