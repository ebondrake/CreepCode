var roleBuilder = {
    

    /** @param {Creep} creep **/
    run: function(creep) {

        //source ids
        var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
        var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
        
        var source = source1;


	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	    }


	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
             creep.moveTo(Game.flags.Builder);   
            }
	    }
	    else {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
	    }
	}
};

module.exports = roleBuilder;
