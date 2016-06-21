var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
	var harvestersTotal = 2
	var buildersTotal = 2
	var upgradersTotal = 1
	
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name];
		}
	}

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	if(harvesters.length < harvestersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {		
		for(var h in harvestersTotal){
			var creepName = Harvester[h];
			if(!Game.creeps.[creepName]{
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], creepName, {role: 'harvester'});
				console.log('Spawning: ' +creepName);
			}
		}
	}
	
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	if(builders.length < buildersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(var b in buildersTotal){
			var creepName = Builder[b];
			if(!Game.creeps.[creepName]{
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], creepName, {role: 'builder'});
				console.log('Spawning: ' +creepName);
			}
		}
	}
	
var upgradersTotal = 1
	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	if(upgraders.length < upgradersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(var u=1; u<=upgradersTotal;u++){
			if(!Game.creeps.Upgrader+u){
			    var name = 'Upgrader'+u;
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'upgrader'});
				console.log('Spawning: ' +name);
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
    }
}
