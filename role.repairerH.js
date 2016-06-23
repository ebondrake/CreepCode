var roleRepairerH = {

//This will instruct the repair creeps to look for any objects that are above 1/3hp and heal them fully.
  run: function(creep) {

    //source ids
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    creep.memory.source = source;
    var itemToBuild;

	    if(creep.memory.repairing && creep.carry.energy <= 2) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.repairing = true;
	    }

    if(!creep.memory.repairing) {
      if(creep.carry.energy < creep.carryCapacity) {
        if(creep.harvest(creep.memory.source) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.memory.source);
        }
      }else{
        creep.moveTo(Game.flags.Repair);
      }
    }

    if(creep.memory.repairing){

                var spawnToBuild = creep.room.find(FIND_STRUCTURES, {
                    filter: function(object){
                        return object.structureType === STRUCTURE_SPAWN && (object.hits >= object.hitsMax / 4) && (object.hits < object.hitsMax);
                    }
                });

                var extensionToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_EXTENSION && (object.hits >= object.hitsMax / 4) && (object.hits < object.hitsMax);
                  }
                });

                var rampartToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_RAMPART && (object.hits >= object.hitsMax / 4) && (object.hits < object.hitsMax);
                  }
                });

                var wallToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_WALL && (object.hits >= object.hitsMax / 4) && (object.hits < object.hitsMax);
                  }
                });

                var roadToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_ROAD && (object.hits >= object.hitsMax / 4) && (object.hits < object.hitsMax);
                  }
                });

                if (spawnToBuild.length){
//                    console.log(creep.name + ' found Spawn to build.');
                  itemToBuild = spawnToBuild;
                }

                else if (extensionToBuild.length) {
//                    console.log(creep.name + ' found Extention to build.');
                  itemToBuild = extensionToBuild;
                }

                else if (rampartToBuild.length) {
//                    console.log(creep.name + ' found Rampart to build.');
                  itemToBuild = rampartToBuild;
                }

                else if (wallToBuild.length) {
//                    console.log(creep.name + ' found Wall to build.');
                  itemToBuild = wallToBuild;
                }

                else if (roadToBuild.length) {
//                    console.log(creep.name + ' found Road to build.');
                  itemToBuild = roadToBuild;
                }

//              console.log(creep.name + ' has an item to build and is sorting them.');
              itemToBuild.sort((a,b) => a.hits - b.hits);

                if (itemToBuild.length){
                  if(creep.repair(itemToBuild[0]) == ERR_NOT_IN_RANGE){
//                    console.log(creep.name + ' item not in range ' + itemToBuild.name);
                    creep.moveTo(itemToBuild[0]);
                  }//no item to build
                }else {
//                  console.log(creep.name + ' is building but has no items to build so waiting at flag.');
                  creep.moveTo(Game.flags.Builder);
                }

    }//end if repairing

  }//end run funciton

};module.exports = roleRepairerH;
