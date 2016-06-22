var roleUpgrader = {

  run: function(creep) {

  var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
  var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
  var source = source2;

  //set creep upgrading to false
  if(creep.memory.upgrading && creep.carry.energy == 0) {
    creep.memory.upgrading = false;
  }

  //set upgrading to true
  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	   creep.memory.upgrading = true;
   }

   if(!creep.memory.upgrading) {
     if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
       creep.moveTo(source);
     }
   }else {
     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
       creep.moveTo(creep.room.controller);
     }
   }

 }//end run function

};module.exports = roleUpgrader;
