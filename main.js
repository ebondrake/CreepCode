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
		
		for(int h=1; h<harvestersTotal; h++){
			if(!Game.creeps.Harvester[h]){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Harvester'+h, {role: 'harvester'});
				console.log('Spawning Harvester'+h);
			}
		}
	}
	
	
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	if(builders.length < buildersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(int b=1; b<buildersTotal; b++){
			if(!Game.creeps.Harvester[b]){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Builder'+b, {role: 'builder'});
				console.log('Spawning Builder'+b);
			}
		}
	}

	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	if(upgraders.length < upgradersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(int u=1; u<upgradersTotal; u++){
			if(!Game.creeps.Upgrader[u]){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Upgrader'+u, {role: 'upgrader'});
				console.log('Spawning Upgrader'+u);
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
