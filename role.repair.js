var roleRepair = {

  run: function(creep) {

    if(creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
    }

    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	     creep.memory.repairing = true;
     }

     if(Memory.builder.length > 0){

     if(!creep.memory.repairing) {
       if(creep.carry.energy < creep.carryCapacity){

         var extentionSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy === structure.energyCapacity;}});
         var spawnSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy === structure.energyCapacity;}});

         if(extentionSource){
           var energySource = extentionSource;
         }else if (spawnSource) {
           var energySource = spawnSource;
         }

         //creep.say(energySource);

         if(energySource && Memory.harvesterFull && (Memory.roomEnergy >= Memory.roomEnergyCapacity / 3)){
           if(energySource.transferEnergy(creep) == ERR_NOT_IN_RANGE){
             creep.moveTo(energySource);
           }
         }else {
          creep.moveTo(Game.flags.Idle);
         }
       }

     }else {

       //find items to finish building
       targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN ) && (structure.hits >= structure.hitsMax/8) && (structure.hits < structure.hitsMax);}});
       if (!targets.length){
         targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION ) && (structure.hits >= structure.hitsMax/8) && (structure.hits < structure.hitsMax);}});
         if (!targets.length) {
           targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_RAMPART ) && (structure.hits >= structure.hitsMax/8) && (structure.hits < structure.hitsMax);}});
           if (!targets.length) {
             targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_WALL ) && (structure.hits >= structure.hitsMax/8) && (structure.hits < structure.hitsMax);}});
             if (!targets.length) {
               targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_ROAD ) && (structure.hits >= structure.hitsMax/8) && (structure.hits < structure.hitsMax);}});
             }
           }
         }
       }

       if(targets.length) {
         targets.sort((a,b) => a.energy - b.energy);
         if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
           creep.moveTo(targets[0]);
         }else{
             //console.log(creep.name + ' is repairing ' + targets[0].structureType);
         }
       }else{//if no building target

         targets = creep.room.find(FIND_CONSTRUCTION_SITES);
         if(targets.length) {
           if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
             creep.moveTo(targets[0]);
           }
         }else{//if no construction target
           creep.moveTo(Game.flags.Idle);
         }//END if no construction target

       }//END if no building target

     }//END if building

   }//END if builders > 0
   else{//if no construction target
     creep.moveTo(Game.flags.Idle);
   }//END if no construction target
   }//END run function
 };module.exports = roleRepair;
