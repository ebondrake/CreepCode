var roleBuilder = {

  run: function(creep) {
    //source ids
    var source1 = Game.getObjectById('55db3344efa8e3fe66e05704');
    var source2 = Game.getObjectById ('55db3344efa8e3fe66e05705');
    var source = source1;

    //set building false
    if(creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
	  }//end set building false

    //set building true
    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
	  }//end set building true

    //if creep is building
    if(creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      //if there are construction sites to build
      if(targets.length > 0) {
        if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }else {
       if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
         creep.moveTo(source);
       }
     }
   }//end if building
   //if fullof energy and no work to do go to building flag

   if(targets.length == 0 && creep.carry.energy == creep.carryCapacity){
     creep.moveTo(Game.flags.Builder);
   }

 }//end run function

};module.exports = roleBuilder;
