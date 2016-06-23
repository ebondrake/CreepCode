var roleHarvester = {

  run: function(creep) {
    //source ids
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    creep.memory.source = source;

    if(creep.carry.energy < creep.carryCapacity) {
      if(creep.harvest(creep.memory.source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.memory.source);
      }

    }else {//if creep carry capacity full

      //find empty energy containers
      var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});

      if(targets.length > 0) {
        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }else {//energy full and no targets to fill
        creep.moveTo(Game.flags.Harvester);
      }
    }

  }//end run function

};module.exports = roleHarvester;
