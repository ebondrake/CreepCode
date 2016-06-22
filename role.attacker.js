var roleAttacker = {

    /** @param {Creep} creep **/
    run: function(creep) {
    
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target){
            if(creep.attack(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
                console.log('Attacking: ' + target);
            }
        }else{
            creep.moveTo(Game.flags.Attacker);
        }
	}
};

module.exports = roleAttacker;
