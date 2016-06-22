var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        //source ids
        var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
        var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
        var source = source1;
        
	    if(creep.carry.energy < creep.carryCapacity) {
            //var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }else{
                if(creep.harvest(source) == ERR_NO_PATH) {
                    creep.moveTo(Game.flags.Harvester);
                }
            }
        }else{
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
                creep.moveTo(Game.flags.Harvester);
            }
        }
	}
};

module.exports = roleHarvester;
