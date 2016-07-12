var roleHealer = require('role.healer');

module.exports = {
  run: function() {

    var towers = Game.spawns.Home.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_TOWER );}});
    if(towers.length) {
      towers.sort((a,b) => b.energy - a.energy);


      for(let i in towers){
        var closestHostile = towers[i].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var injuredCreep = towers[i].pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < object.hitsMax;}});

        if(closestHostile) {towers[i].attack(closestHostile);}

        if(injuredCreep)  {towers[i].heal(creep);}

        if(Game.spawns.Home.energy < Game.spawns.Home.energyCapacity)  {
            towers[i].transferEnergy(Game.spawns.Home);
            //console.log(Game.spawns.Home.energy);

        }


        if(Memory.creepFull && (Memory.roomEnergy >= Memory.roomEnergyCapacity / 2)) {
          var targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_SPAWN ) && (structure.hits < structure.hitsMax);}});
          if (!targets.length){
            targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_EXTENSION ) && (structure.hits  < structure.hitsMax);}});
            if (!targets.length) {
              targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_RAMPART ) && (structure.hits  < structure.hitsMax/26);}});
              if (!targets.length) {
                targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_CONTAINER ) && (structure.hits  < structure.hitsMax);}});
                if (!targets.length) {
                  targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_STORAGE ) && (structure.hits  < structure.hitsMax);}});
                  if (!targets.length) {
                    targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_WALL ) && (structure.hits  < structure.hitsMax/1000);}});
                    if (!targets.length) {
                      targets = towers[i].room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType === STRUCTURE_ROAD ) && (structure.hits  < structure.hitsMax);}});
                    }
                  }
                }
              }
            }
          }

          if(targets.length) {
            targets.sort((a,b) => a.hits - b.hits);
            towers[i].repair(targets[i]) == ERR_NOT_IN_RANGE;
          }
        }
      }//END for loop
    }//END if towers.length
  }
}
