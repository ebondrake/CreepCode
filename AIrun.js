var AIrun = {
  run: function(AIrun) {

    Memory.harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    Memory.attacker = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    Memory.upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    Memory.builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    Memory.repair = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
    Memory.explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer');

    Memory.Idle = Game.flags.Idle;

    //spawn amount
    Memory.attackerTotal = 1;
    Memory.upgraderTotal = 1;
    Memory.builderTotal = 4;
    Memory.repairTotal = 3;
    Memory.explorerTotal = 0;
    Memory.harvesterTotal = ((Memory.upgraderTotal + Memory.builderTotal + Memory.repairTotal) / 2);

    if (Memory.harvesterFull = null){
      Memory.harvesterFull = false;
    }else {
      Memory.harvesterFull = (Memory.harvester.length >= Memory.harvesterTotal);
    }

    if(Memory.cityLevel === null){
      Memory.cityLevel = 1;
    }

    Memory.roomEnergy = Game.spawns.Home.room.energyAvailable;

    Memory.roomEnergyCapacity = Game.spawns.Home.room.energyCapacityAvailable;

    Memory.roomEnergyFull = (Game.spawns.Home.room.energyAvailable === Memory.roomEnergyCapacity);


    if(Game.spawns.Home.room.energyCapacityAvailable <= 300){
      Memory.cityLevel = 1;
    }
    else if (Game.spawns.Home.room.energyCapacityAvailable > 300 && Game.spawns.Home.room.energyCapacityAvailable <= 550) {
      Memory.cityLevel = 2;
    }
    else if (Game.spawns.Home.room.energyCapacityAvailable > 550 && Game.spawns.Home.room.energyCapacityAvailable <= 800) {
      Memory.cityLevel = 3;
    }

    //level 1 creeps
    var roleHarvester = require('role.harvester');
    var roleAttacker = require('role.attacker');
    var roleUpgrader = require('role.upgrader');
    var roleBuilder = require('role.builder');
    var roleRepair = require('role.repair');
    var roleExplorer = require('role.explorer');
    //END level 1 creeps

    for(var name in Game.creeps) {
      var creep = Game.creeps[name];

      if(creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
      }
      else if(creep.memory.role == 'attacker') {
        roleAttacker.run(creep);
      }
      else if(creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }
      else if(creep.memory.role == 'builder') {
        roleBuilder.run(creep);
      }
      else if(creep.memory.role == 'repair') {
        roleRepair.run(creep);
      }
      else if(creep.memory.role == 'explorer') {
        roleExplorer.run(creep);
      }

    }//end for loop

  }//end function(spawn)
};module.exports = AIrun;
