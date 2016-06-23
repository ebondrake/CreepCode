var roleUpgraderH = {

  run: function(creep) {

    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    creep.memory.source = source;

  //set creep upgrading to false
  if(creep.memory.upgrading && creep.carry.energy == 0) {
    creep.memory.upgrading = false;
  }

  //set upgrading to true
  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	   creep.memory.upgrading = true;
   }

   if(!creep.memory.upgrading) {
     if(creep.harvest(creep.memory.source) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.memory.source);
     }
   }else {
     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.room.controller);
     }
   }

 }//end run function

};module.exports = roleUpgraderH;
