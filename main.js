var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');


module.exports.loop = function () {
    
	var harvestersTotal = 6;
	var attackersTotal = 3;
	var buildersTotal = 4;
	var upgradersTotal = 4;

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
	
	if(harvesters.length < harvestersTotal && (Game.rooms.W27S28.energyAvailable > 200)){
		for(var i = 1; i <= harvestersTotal; i++){
			var name = Harvester+i;
			if(!Game.creeps.name){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'harvester'});
				console.log('Spawning: ' + name);
				break;
			}
		}
	}else{
		if(builders.length < buildersTotal && (Game.rooms.W27S28.energyAvailable > 200)){
			for(var i = 1; i <= buildersTotal; i++){
				var name = Builder+i;
				if(!Game.creeps.name){
					Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'builder'});
					console.log('Spawning: ' + name);
					break;
				}
			}
		}else{
			if(upgraders.length < upgradersTotal && (Game.rooms.W27S28.energyAvailable > 200)){
				for(var i = 1; i <= upgradersTotal; i++){
					var name = Upgrader+i;
					if(!Game.creeps.name){
						Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'upgrader'});
						console.log('Spawning: ' + name);
						break;
					}
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
        if(creep.memory.role ='attacker') {
            roleAttacker.run(creep);
        }
    }
}
