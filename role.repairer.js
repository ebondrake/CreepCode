var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
                //source ids
        var Spawn1 = Game.spawns.Spawn1;
    
        if(creep.carry.energy < creep.carryCapacity) {
            if(Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Spawn1);
            }
        }else{
            if( Spawn1.energy > 300) {
                if(creep.carry.energy < creep.carryCapacity) {
                    Spawn1.transferEnergy(creep);
                }
            }
        }
        
    //find Spawn to repair
        var spawnToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_SPAWN && (object.hits > object.hitsMax / 3);
            } 
        });
        
        if (spawnToRepair){
            creep.moveTo(spawnToRepair);
            creep.repair(spawnToRepair);
            // perhaps check the results again?
        }

    //find Extension to repair
        var extensionToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_EXTENSION && (object.hits > object.hitsMax / 3);
            } 
        });
        
        if (extensionToRepair){
            creep.moveTo(extensionToRepair);
            creep.repair(extensionToRepair);
            // perhaps check the results again?
        }

    //find Rampart to repair
        var rampartToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_RAMPART && (object.hits > object.hitsMax / 3);
            } 
        });
        
        if (rampartToRepair){
            creep.moveTo(rampartToRepair);
            creep.repair(rampartToRepair);
            // perhaps check the results again?
        }

    

    //find Wall to repair
        var wallToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_WALL && (object.hits > object.hitsMax / 3);
            } 
        });
        
        if (wallToRepair){
            creep.moveTo(wallToRepair);
            creep.repair(wallToRepair);
            // perhaps check the results again?
        }
    

    //find Road to repair
        var roadToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);
            } 
        });
        
        if (roadToRepair){
            creep.moveTo(roadToRepair);
            creep.repair(roadToRepair);
            // perhaps check the results again?
        }else{
            if(creep.carry.energy = creep.carryCapacity) {
                creep.moveTo(Game.flags.Harvester);
            }
        }
        
    }
};


module.exports = roleRepairer;


