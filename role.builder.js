var roleBuilder = {


    /** @param {Creep} creep **/
    run: function(creep) {

        //source ids
        var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
        var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
        var source = source1;
        var itemToBuild;


	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	    }


	    if(!creep.memory.building) {
        if(creep.carry.energy < creep.carryCapacity){
          if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
          }
        }else {
          creep.moveTo(Game.flags.Builder);
        }
      }else {//if creep is building

        //find items to repair
        var spawnToBuild = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object){
            return object.structureType === STRUCTURE_SPAWN && (object.hits < object.hitsMax / 3);
          }
        });

        var extensionToBuild = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object){
            return object.structureType === STRUCTURE_EXTENSION && (object.hits < object.hitsMax / 3);
          }
        });

        var rampartToBuild = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object){
            return object.structureType === STRUCTURE_RAMPART && (object.hits < object.hitsMax / 3);
          }
        });

        var wallToBuild = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object){
            return object.structureType === STRUCTURE_WALL && (object.hits < object.hitsMax / 3);
          }
        });

        var roadToBuild = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object){
            return object.structureType === STRUCTURE_ROAD && (object.hits < object.hitsMax / 3);
          }
        });

        if (spawnToBuild){
          itemToBuild = spawnToBuild;
        }

        else if (extensionToBuild) {
          itemToBuild = extentionToRepair;
        }

        else if (rampartToBuild) {
          itemToBuild = rampartToBuild;
        }

        else if (wallToBuild) {
          itemToBuild = wallToBuild;
        }

        else if (roadToBuild) {
          itemToBuild = roadToBuild;
        }

        if (itemToBuild){
            //console.log(itemToBuild);
          if(creep.repair(itemToBuild) == ERR_NOT_IN_RANGE){
            creep.moveTo(itemToBuild);
          }
        }else {
          var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
          if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(targets[0]);
            }//if target not in range
          }//if no target
        }//if no item to build

      }//if building
      
    }//end of run function
  };module.exports = roleBuilder;
