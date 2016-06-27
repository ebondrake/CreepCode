var roleBuilder = {

  run: function(creep) {

    var buildCap = 500;

    if(creep.memory.building === null){
      creep.memory.building = false;
    }

    if(creep.memory.building && creep.carry.energy === 0) {
      creep.memory.building = false;
    }

    if(!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
	     creep.memory.building = true;
     }

     //creep.say(creep.memory.building);

     if(!creep.memory.building) {
       //creep.say(creep.carry.energy < creep.carryCapacity);
       if(creep.carry.energy < creep.carryCapacity){
         var extentionSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy === structure.energyCapacity;}});
         var spawnSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy === structure.energyCapacity;}});

         if(extentionSource){
           var energySource = extentionSource;
         }else if (spawnSource) {
           var energySource = spawnSource;
         }
         //console.log(energySource + ' - ' + Memory.harvesterFull + ' - ' + Memory.roomEnergy + ' - ' + Memory.roomEnergyCapacity / 2);
         //console.log(energySource && Memory.harvesterFull && (Memory.roomEnergy >= Memory.roomEnergyCapacity / 2));
         if(energySource && Memory.harvesterFull && (Memory.roomEnergy >= Memory.roomEnergyCapacity / 3)){
           if(energySource.transferEnergy(creep) === ERR_NOT_IN_RANGE){
             creep.moveTo(energySource);
           }
         }else {
           //creep.say('Idle');
           creep.moveTo(Game.flags.Idle);
         }
       }
     }else {//if creep is building

       //find items to finish building
       var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_SPAWN ) && (structure.hits <= buildCap);}});
       if (!targets.length){
         targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_EXTENSION ) && (structure.hits <= buildCap);}});
         if (!targets.length) {
           targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_RAMPART ) && (structure.hits <= buildCap);}});
           if (!targets.length) {
             targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_WALL ) && (structure.hits <= buildCap);}});
             if (!targets.length) {
               targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_ROAD ) && (structure.hits <= buildCap);}});
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
           creep.moveTo(Memory.Idle);
         }//END if no construction target

       }//END if no building target

     }//END if building

   }//END run function

 };module.exports = roleBuilder;
