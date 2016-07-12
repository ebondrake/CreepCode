module.exports = {

  run: function(creep) {


    if(Memory.upgrader.length > Memory.upgraderTotal || (creep.memory.level < Memory.cityLevel && Memory.upgrader.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{


    if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

    if(creep.ticksToLive <=1){
      console.log(creep.name + ' is dead.. (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + Memory.attacker.length + '/' + Memory.attackerTotal +') (C:' + Memory.collector.length + '/' + Memory.collectorTotal +') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (U:' + (Memory.upgrader.length-1) + '/' + Memory.upgraderTotal + ')');
      creep.say('DEAD');
    }

    if(creep.memory.upgrading === null){
      creep.memory.upgrading = true;
    }

    if(creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
    }
    else if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	   creep.memory.upgrading = true;
   }

   if(creep.memory.aboutToDie){
     //creep.say('healing');
     creep.drop(RESOURCE_ENERGY);
     creep.moveTo(Game.spawns.Home);
   }else {


   if(!creep.memory.upgrading) {
     var storageSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_STORAGE) && structure.store[RESOURCE_ENERGY] > 0;}});
     var containerSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;}});
     var extentionSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy > 0;}});
     var spawnSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy === 300;}});

     if(storageSource){var energySource = storageSource;}
     else if(containerSource){var energySource = containerSource;}
     else if(extentionSource){var energySource = extentionSource;}
     else if(spawnSource){var energySource = spawnSource;}

     //console.log(energySource);

     if(energySource && Memory.roomEnergy >= Memory.roomEnergyCapacity / 2){
       if(energySource.structureType === STRUCTURE_CONTAINER || energySource.structureType === STRUCTURE_STORAGE){
         if(Memory.creepFull){
           if(creep.withdraw(energySource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
             creep.moveTo(energySource);
           }
         }
       }else{
         if(Memory.creepFull){
           if(creep.withdraw(energySource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
             creep.moveTo(energySource);
           }
         }else{
         creep.drop(RESOURCE_ENERGY);
       creep.moveTo(Memory.Idle);
       //roleCollector.run(creep);
     }
       }
     }else{
         creep.drop(RESOURCE_ENERGY);
       creep.moveTo(Memory.Idle);
       //roleCollector.run(creep);
     }
   }else{
     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.room.controller);
     }
   }
}

}

 }
}
