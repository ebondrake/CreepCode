var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
                //source ids
        var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
        var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
        var source = source2;
        
//        if(creep.room.name !== Game.spawns.Spawn1.roomName) {
//            creep.moveTo(Game.spawns.Spawn1);
//        }
//        else {
            if(creep.memory.upgrading && creep.carry.energy == 0) {
               creep.memory.upgrading = false;
	        }
	        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	            creep.memory.upgrading = true;
	        }
        
	        if(!creep.memory.upgrading) {
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
            else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        //}

    }
};


module.exports = roleUpgrader;
