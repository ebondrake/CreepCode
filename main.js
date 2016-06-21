var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
    
        //for(var name in Game.rooms) {
        //console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
        //}
        
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
//        console.log('Harvesters: ' + harvesters.length);
        
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
//        console.log('Upgraders: ' + harvesters.length);
        
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
//        console.log('Builders: ' + builders.length);


        if(harvesters.length < 2 && (Game.rooms.W27S28.energyAvailable > 200)) {
            if(!Game.creeps.Harvester1){
                Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
                console.log('Spawning Harvester1');
            }else{
                if(!Game.creeps.Harvester2){
                    Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Harvester2', {role: 'harvester'});
                    console.log('Spawning Harvester2');
                }
            }
        }
		
		if(builders.length < 3 && (Game.rooms.W27S28.energyAvailable > 200)) {
			if(!Game.creeps.Builder1){
				Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Builder1', {role: 'builder'});
				console.log('Spawning Builder1');
			}else{
				if(!Game.creeps.Builder2){
					Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Builder2', {role: 'builder'});
					console.log('Spawning Builder2');
				}else{
					if(!Game.creeps.Builder3){
						Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Builder3', {role: 'builder'});
						console.log('Spawning Builder3');
					}				
				}
            }
		}

		if(upgraders.length < 1 && (Game.rooms.W27S28.energyAvailable > 200)) {
			Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Upgrader1', {role: 'upgrader'});
            console.log('Spawning Upgrader1');
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
