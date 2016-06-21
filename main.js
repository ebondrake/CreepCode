var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var harvestersTotal = 5
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	var buildersTotal = 5
	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	var upgradersTotal = 2
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name];
		}
	}

	var creepName;
	var creepRole;
	var creepTotal;
	if(harvesters.length < harvestersTotal && (Game.rooms.W27S28.energyAvailable > 200)){
		creepName = 'Harvester';
		creepRole = 'harvester';		
		creepTotal = harvestersTotal;
		}else{
		if(builders.length < buildersTotal && (Game.rooms.W27S28.energyAvailable > 200)){
			creepName = 'Builder';
			creepRole = 'builder';	
			creepTotal = buildersTotal;
		}else{
			if(upgraders.length < upgradersTotal && (Game.rooms.W27S28.energyAvailable > 200)) {
				creepName = 'Upgrader';
				creepRole = 'upgrader';		
				creepTotal = upgradersTotal;
			}			
		}		
	}

	for(var i=1; i<=creepTotal;i++){
		creepName = creepName+i;
		if(!Game.creeps.creepName){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], creepName, {role: creepRole});
				console.log('Spawning: ' + creepName);
				break;
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
