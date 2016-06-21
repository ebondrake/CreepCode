var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleAttacker = require('role.attacker');


module.exports.loop = function () {
    
	var harvestersTotal = 6;
	var buildersTotal = 4;
	var upgradersTotal = 4;
	var attackersTotal = 4;

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
	
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name];
		}
	}
	
	if(harvesters.length < harvestersTotal && (Game.rooms.W29S18.energyAvailable > 200)){
		Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
	}else{
		if(builders.length < buildersTotal && (Game.rooms.W29S18.energyAvailable > 200)){
			Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
		}else{
			if(upgraders.length < upgradersTotal && (Game.rooms.W29S18.energyAvailable > 200)){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
			}else{
    				if(attackers.length < attackersTotal && (Game.rooms.W29S18.energyAvailable > 400)){
	    				Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE], undefined, {role: 'attacker'});
				}
			}
		}
	}

	for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
    }
}
