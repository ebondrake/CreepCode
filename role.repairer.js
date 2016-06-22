var roleRepairer = {

//This will instruct the repair creeps to look for any objects that are above 1/3hp and heal them fully.
  run: function(creep) {

    //spawn id
    //source ids
    var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
    var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
    var source = source2;
    var itemToRepair;

	    if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.repairing = true;
	    }

    if(!creep.memory.repairing) {
      if(creep.carry.energy < creep.carryCapacity) {
        if(creep.harvest(source) == ERR_NOT_IN_RANGE && creep.carry.energy < creep.carryCapacity) {
          creep.moveTo(source);
        }
      }else{
        creep.moveTo(Game.flags.Repair);
      }
    }

    if(creep.memory.repairing){

      //find items to repair
      var spawnToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType === STRUCTURE_SPAWN && (object.hits > object.hitsMax / 3);
        }
      });

      var extensionToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType === STRUCTURE_EXTENSION && (object.hits > object.hitsMax / 3);
        }
      });

      var rampartToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType === STRUCTURE_RAMPART && (object.hits > object.hitsMax / 3);
        }
      });

      var wallToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType === STRUCTURE_WALL && (object.hits > object.hitsMax / 3);
        }
      });

      var roadToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);
        }
      });

      if (spawnToRepair){
        itemToRepair = spawnToRepair;
      }

      else if (extensionToRepair) {
        itemToRepair = extentionToRepair;
      }

      else if (rampartToRepair) {
        itemToRepair = rampartToRepair;
      }

      else if (wallToRepair) {
        itemToRepair = wallToRepair;
      }

      else if (roadToRepair) {
        itemToRepair = roadToRepair;
      }

      if (itemToRepair){
          //console.log(itemToRepair);
        if(creep.repair(itemToRepair) == ERR_NOT_IN_RANGE){
          creep.moveTo(itemToRepair);
        }
      }else {
        creep.moveTo(Game.flags.Builder);
      }

    }//end if repairing

  }//end run funciton

};module.exports = roleRepairer;
