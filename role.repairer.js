var roleRepairer = {

  run: function(creep) {

    //spawn id
    var Spawn1 = Game.spawns.Spawn1;
    var itemToRepair;
    //set repairing false
    if(creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
	  }

    //set repairing true
    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.repairing = true;
	  }//end set building true





    if(!creep.memory.repairing) {
      if(Spawn1.energy > 300 && creep.carry.energy < creep.carryCapacity){
        if(Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE){
          creep.moveTo(Spawn1);
        }
      }else{
        creep.moveTo(Game.flags.Builder);
      }
    }

    if(creep.memory.repairing){

      //find items to repair
      var spawnToRepair = creep.pos.findClosestBypath(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType(STRUCTURE_SPAWN) && (object.hits < object.hitsMax / 3);
        }
      });

      var extensionToRepair = creep.pos.findClosestBypath(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType(STRUCTURE_EXTENSION) && (object.hits < object.hitsMax / 3);
        }
      });

      var rampartToRepair = creep.pos.findClosestBypath(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType(STRUCTURE_RAMPART) && (object.hits < object.hitsMax / 3);
        }
      });

      var wallToRepair = creep.pos.findClosestBypath(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType(STRUCTURE_WALL) && (object.hits < object.hitsMax / 3);
        }
      });

      var roadToRepair = creep.pos.findClosestBypath(FIND_STRUCTURES, {
        filter: function(object){
          return object.structureType(STRUCTURE_ROAD) && (object.hits < object.hitsMax / 3);
        }
      });


      //var extensionToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(object){return object.structureType === STRUCTURE_EXTENSION && (object.hits > object.hitsMax / 3);}});
//      var rampartToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(object){return object.structureType === STRUCTURE_RAMPART && (object.hits > object.hitsMax / 3);}});
  //    var wallToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(object){return object.structureType === STRUCTURE_WALL && (object.hits > object.hitsMax / 3);}});
    //  var roadToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(object){return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);}});

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
        if(creep.repair(itemToRepair) == ERR_NOT_IN_RANGE){
          creep.moveTo(itemToRepair);
        }
      }else {
        creep.moveTo(Game.flags.Builder);
      }

    }//end if repairing

  }//end run funciton

};module.exports = roleRepairer;
