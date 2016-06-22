var roleBuilder = {


    run: function(creep) {

        //source ids
        var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
        var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
        var source = source1;
        var itemToBuild;


	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            console.log('building false');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
          console.log('building true');
	    }


	    if(!creep.memory.building) {
        console.log(creep.name + ' is not building');
            if(creep.carry.energy < creep.carryCapacity){
              console.log(creep.name + ' is harvesting');
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }else {
              console.log(creep.name + ' is not building, is full, and is going to wait by flag.');
                creep.moveTo(Game.flags.Builder);
            }
	    }else {//if creep is building
            console.log(creep.name + ' is building!');
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                console.log(creep.name + ' is buildinga new construction site: ' + target.name);
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }//if target not in range
            }else{//if no target
              console.log(creep.name + ' is looking for a structure to build to 1/3rd');
                //find items to finish building

                var spawnToBuild = creep.room.find(FIND_STRUCTURES, {
                    filter: function(object){
                        return object.structureType === STRUCTURE_SPAWN && (object.hits <= object.hitsMax / 3);
                    }
                });

                var extensionToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_EXTENSION && (object.hits <= object.hitsMax / 3);
                  }
                });

                var rampartToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_RAMPART && (object.hits <= object.hitsMax / 3);
                  }
                });

                var wallToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_WALL && (object.hits <= object.hitsMax / 3);
                  }
                });

                var roadToBuild = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    return object.structureType === STRUCTURE_ROAD && (object.hits <= object.hitsMax / 3);
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

                if (itemToBuild > 0){
                                console.log(creep.name + ' has an item to build and is sorting them.');
                  itemToBuild.sort((a,b) => a.hits - b.hits);
                                console.log(creep.name + ' has sorted items to build and is going to build ' + itemToBuild[0]);
                    //console.log(itemToBuild);
                  if(creep.repair(itemToBuild[0]) == ERR_NOT_IN_RANGE){
                    creep.moveTo(itemToBuild[0]);
                  }//no item to build
                }else {
                  console.log(creep.name + ' is building but has no items to build so waiting at flag.');
                  creep.moveTo(Game.flags.Builder);
                }

            }//if no target
      }//if building

    }//end of run function
  };module.exports = roleBuilder;
