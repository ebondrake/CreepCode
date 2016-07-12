var roleCollector = require('role.collector');
var roleUpgrader = require('role.upgrader');

module.exports={
  run: function(creep){

//    if(Memory.test === undefined || Memory.test >= 100){Memory.test = 0};
//    Memory.test++;
    //console.log(creep.room.name);

    var energySource;
    if(Memory.builder.length > Memory.builderTotal || (creep.memory.level < Memory.cityLevel && Memory.builder.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{
      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

      if(creep.memory.working && creep.carry.energy === 0) {creep.memory.working = false;}
      if(!creep.memory.working && creep.carry.energy === creep.carryCapacity)  {creep.memory.working = true;}

      if(creep.memory.aboutToDie){
        creep.drop(RESOURCE_ENERGY);
        creep.moveTo(Game.spawns.Home);
      }else{
        if(!creep.memory.working){
          if(Memory.roomNeedsRepaired){
            var storageSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_STORAGE) && structure.store[RESOURCE_ENERGY] > 0;}});
            var containerSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0;}});
            var extentionSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy > 0;}});
            var spawnSource = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy === 300;}});

            if(storageSource) {energySource = storageSource;}
            else if(containerSource)  {energySource = containerSource;}
            else if(extentionSource)  {energySource = extentionSource;}
            else if(spawnSource)  {energySource = spawnSource;}

            if(energySource && Memory.roomEnergy >= Memory.roomEnergyCapacity / 2){
              if(energySource.structureType === STRUCTURE_CONTAINER || energySource.structureType === STRUCTURE_STORAGE){
                if(energySource.transfer(creep, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                  creep.moveTo(energySource);
                }
              }else{
                if(Memory.creepFull){
                  if(creep.withdraw(energySource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                    creep.moveTo(energySource);
                  }
                }else{ //END if energy source
                  //creep.moveTo(Memory.Idle);
                  roleUpgrader.run(creep);
                }
              }
            }else{ //END if energy source
              //creep.moveTo(Memory.Idle);
              roleUpgrader.run(creep);
            }
          }else{
            //creep.moveTo(Memory.Idle);
            roleUpgrader.run(creep);
          }
            }else{//find items to finish building
                var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_SPAWN ) && (structure.hits < structure.hitsMax);}});
                if (!targets.length){
                    targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_EXTENSION ) && (structure.hits  < structure.hitsMax);}});
                    if (!targets.length) {
                        targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_RAMPART ) && (structure.hits  < structure.hitsMax/28);}});
                        if (!targets.length) {
                            targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_CONTAINER ) && (structure.hits  < structure.hitsMax);}});
                            if (!targets.length) {
                                targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_STORAGE ) && (structure.hits  < structure.hitsMax);}});
                                if (!targets.length) {
                                  targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_WALL ) && (structure.hits  < structure.hitsMax/1000);}});
                                  if (!targets.length) {
                                    targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_ROAD ) && (structure.hits  < structure.hitsMax/2);}});
                                  }
                                }
                              }
                            }
                          }
                        }

                        if(targets.length) {
                          targets.sort((a,b) => a.hits - b.hits);
                          if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                          }
                        }else{//if no building target
                          targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                          if(targets.length) {
                            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                              creep.moveTo(targets[0]);
                            }
                          }else{//if no construction target
                            roleUpgrader.run(creep);
                          }//END if no construction target
                        }//END if no building target
                      }//END if building
                    }//END about to die
                  }//END kill creep // Memory.builder.length > Memory.builderTotal || (creep.memory.level < Memory.cityLevel && Memory.builderFull
                }//END run function
              }
