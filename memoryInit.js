module.exports={
  run: function(){



    Memory.Home = Game.spawns.Home.room;
    Memory.Room01 = Game.rooms.W21S9;





//    for(let name in Game.spawns){
//      var spawn = Game.spawns[name];
//      console.log(spawn);
//      Game.spawns.Home = spawn;
//    }

    Memory.Home.constructionSites = Memory.Home.find(FIND_CONSTRUCTION_SITES)
//    Memory.Room01.constructionSites = Memory.Room01.find(FIND_CONSTRUCTION_SITES);


    Memory.harvester = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
    Memory.attacker = _.filter(Game.creeps, (creep) => creep.memory.role === 'attacker');
    Memory.defender = _.filter(Game.creeps, (creep) => creep.memory.role === 'defender');
    Memory.healer = _.filter(Game.creeps, (creep) => creep.memory.role === 'healer');
    Memory.collector = _.filter(Game.creeps, (creep) => creep.memory.role === 'collector');
    Memory.claimer = _.filter(Game.creeps, (creep) => creep.memory.role === 'claimer');
    Memory.builder = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
    Memory.upgrader = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');

    Memory.roomEnergy = Game.spawns.Home.room.energyAvailable;
    Memory.roomEnergyCapacity = Game.spawns.Home.room.energyCapacityAvailable;
    Memory.roomEnergyFull = (Game.spawns.Home.room.energyAvailable === Memory.roomEnergyCapacity);
    Game.spawns.Home.canRenew = Game.spawns.Home.energy >= 20 && Memory.harvester.length > 0;
    if(Game.spawns.Home.room.energyCapacityAvailable < 550 || (Memory.harvester.length === 0 || Memory.collector.length === 0)){Memory.cityLevel = 1;}
    else if ((Memory.harvester.length > 0 && Memory.collector.length > 0) && Game.spawns.Home.room.energyCapacityAvailable >= 550 && Game.spawns.Home.room.energyCapacityAvailable < 800) {Memory.cityLevel = 2;}
    else if ((Memory.harvester.length > 0 && Memory.collector.length > 0) && Game.spawns.Home.room.energyCapacityAvailable >= 800 && Game.spawns.Home.room.energyCapacityAvailable < 1300) {Memory.cityLevel = 3;}
    else if ((Memory.harvester.length > 0 && Memory.collector.length > 0) && Game.spawns.Home.room.energyCapacityAvailable >= 1300 && Game.spawns.Home.room.energyCapacityAvailable < 1800) {Memory.cityLevel = 4;}
    else if ((Memory.harvester.length > 0 && Memory.collector.length > 0) && Game.spawns.Home.room.energyCapacityAvailable >= 1800) {Memory.cityLevel = 5;}


    Memory.Idle = Game.flags.Idle;

    if(Memory.collector.length > 0){Memory.harvesterTotal = 4;} else{Memory.harvesterTotal = 1;}
    Memory.attackerTotal = 0;
    Memory.defenderTotal = 2;
    Memory.healerTotal = 0;
    Memory.collectorTotal = 3;
    if(Memory.cityLevel > 2){Memory.claimerTotal = 0;}else {Memory.claimerTotal = 0;}
    if (Memory.Home.constructionSites.length){Memory.builderTotal = 4;}else{Memory.builderTotal = 1;}
    if (Memory.Home.constructionSites.length){Memory.upgraderTotal = 0;}else{Memory.upgraderTotal = Math.round(Memory.cityLevel/2);}


    Memory.harvesterFull = Memory.harvester.length >= Memory.harvesterTotal;
    Memory.attackerFull = Memory.attacker.length >= Memory.attackerTotal;
    Memory.defenderFull = Memory.defender.length >= Memory.defenderTotal;
    Memory.healerFull = Memory.healer.length >= Memory.healerTotal;
    Memory.collectorFull = Memory.collector.length >= Memory.collectorTotal;
    Memory.claimerFull = Memory.claimer.length >= Memory.claimerTotal;
    Memory.builderFull = Memory.builder.length >= Memory.builderTotal;
    Memory.upgraderFull = Memory.upgrader.length >= Memory.upgraderTotal;
    Memory.creepFull = Memory.harvesterFull && Memory.attackerFull && Memory.defenderFull && Memory.healerFull && Memory.collectorFull && Memory.claimerFull && Memory.builderFull && Memory.upgraderFull;







    var targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_SPAWN ) && (structure.hits < structure.hitsMax);}});
    if (!targets.length){
      targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_EXTENSION ) && (structure.hits  < structure.hitsMax);}});
      if (!targets.length) {
        targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_RAMPART ) && (structure.hits  < structure.hitsMax/30);}});
        if (!targets.length) {
          targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_CONTAINER ) && (structure.hits  < structure.hitsMax/2);}});
          if (!targets.length) {
            targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_STORAGE ) && (structure.hits  < structure.hitsMax/2);}});
            if (!targets.length) {
              targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_WALL ) && (structure.hits  < structure.hitsMax/1000);}});
              if (!targets.length) {
                targets = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_ROAD ) && (structure.hits  < structure.hitsMax/2);}});
              }
            }
          }
        }
      }
    }

    if(targets.length){
        //console.log(targets[0] + ' needs repaired.');
      Memory.roomNeedsRepaired = true;
    }else {
      Memory.roomNeedsRepaired = false;
    }


  }
}
