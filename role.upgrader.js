var roleUpgrader = {

  run: function(creep) {

    if(creep.memory.upgrading === null){
      creep.memory.upgrading = true;
    }

    if(creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
    }
    else if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	   creep.memory.upgrading = true;
   }

   if(!creep.memory.upgrading) {

     var extentionSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy === structure.energyCapacity;}});
     var spawnSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy === structure.energyCapacity;}});

     if(extentionSource){
       var energySource = extentionSource;
     }else if (spawnSource) {
       var energySource = spawnSource;
     }

     if(energySource && Memory.harvesterFull && (Memory.roomEnergy >= Memory.roomEnergyCapacity / 3)){
       if(energySource.transferEnergy(creep) == ERR_NOT_IN_RANGE){
         creep.moveTo(energySource);
       }
     }else {
      creep.moveTo(Game.flags.idle);
     }
   }else {
     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.room.controller);
     }
   }
 }
};module.exports = roleUpgrader;
