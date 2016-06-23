var roleExplorer = {

  run: function(creep) {
      
      var roomName ='E9N24';
      var destination = Game.getObjectById('5769a313403ad7635a73b4ad');
      var target1 = Game.getObjectById('55db334fefa8e3fe66e05744');
      //var target2 = Game.getObjectById('5769a313403ad7635a73b4ad');
      var target = target1;


if(creep.moveTo(Game.flags.Destination) == ERR_NO_PATH){
    console.log(creep.name + ' has no path to ' + target);
}


//if(!creep.room.roomName){
//    console.log(Game.flags.Destination.pos);
//    creep.moveTo(Game.flags.Destination);
//}else{

//    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
//        creep.moveTo(target);
//    }else{
//        console.log(target.structureType + ' ' + target.hitsMax);
//    }
    
//    if(creep.attack(target) == ERR_NOT_IN_RANGE){
//        creep.moveTo(target);
//       creep.say('Moving towards ' + target + '!');
//   } else{
//     creep.say('Attacking ' + target + '!');
//   }
    
//}

  }//end run function

};module.exports = roleExplorer;
