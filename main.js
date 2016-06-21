var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');


module.exports.loop = function () {
    
	var harvestersTotal = 4;
	var buildersTotal = 4;
	var attackersTotal = 2;
	var upgradersTotal = 2;

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
	
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name];
		}
	}

	var creepName;
	var creepRole;
	var creepTotal;
	
	if(harvesters.length < harvestersTotal && (Game.rooms.W29S18.energyAvailable > 200)){
		creepName = 'Harvester';
		creepRole = 'harvester';		
		creepTotal = harvestersTotal;
		console.log('Need to spawn a new ' + creepName);
		}else{
		if(builders.length < buildersTotal && (Game.rooms.W29S18.energyAvailable > 200)){
			creepName = 'Builder';
			creepRole = 'builder';	
			creepTotal = buildersTotal;
			console.log('Need to spawn a new ' + creepName);
		}else{
			if(upgraders.length < upgradersTotal && (Game.rooms.W29S18.energyAvailable > 200)) {
				creepName = 'Upgrader';
				creepRole = 'upgrader';		
				creepTotal = upgradersTotal;
				console.log('Need to spawn a new ' + creepName);
			}			
		}		
	}

	for(var i=1; i<=creepTotal;i++){
		var name = creepName+i;
		if(!Game.creeps.name){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: creepRole});
				console.log('Spawning: ' + name);
				break;
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
        if(creep.memory.role ='attacker') {
            roleAttacker.run(creep);
        }
    }
}
