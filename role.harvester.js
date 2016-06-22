var roleHarvester = {

  run: function(creep) {
    //source ids
    var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
    var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
    var source = source1;

    if(creep.carry.energy < creep.carryCapacity) {
      if(creep.harvest(source1) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source1);
      }

      if(creep.harvest(source1) == ERR_NO_PATH) {
        if(creep.harvest(source2) == ERR_NOT_IN_RANGE) {
          creep.moveTo(source2);
        }
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
