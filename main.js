var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var harvestersTotal = 2
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	var buildersTotal = 2
	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	var upgradersTotal = 1
	
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name];
		}
	}


	if(harvesters.length < harvestersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(var h=1; h<=harvestersTotal;h++){
		    var name = 'Harvester '+h;
			if(!Game.creeps.name){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'harvester'});
				console.log('Spawning: ' +name);
			}
		}
	}
	
	if(builders.length < buildersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(var b=1; b<=buildersTotal;b++){
		    var name = 'Builder '+b;
			if(!Game.creeps.name){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'builder'});
				console.log('Spawning: ' +name);
			}
		}
	}
	
	if(upgraders.length < upgradersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
		for(var u=1; u<=upgradersTotal;u++){
		    var name = 'Upgrader '+u;
			if(!Game.creeps.name){
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
