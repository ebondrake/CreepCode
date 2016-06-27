var roleExplorer = {

  run: function(creep) {

    if(!creep.memory.exploring && creep.hits == creep.hitsMax){
      creep.memory.exploring = true;
    }

    if(creep.memory.exploring && creep.hits < creep.hitsMax){
      creep.memory.exploring = false;
    }


    if(creep.memory.exploring){
      creep.moveto(Game.flags.Explorer);
    }

  }//end run function
};module.exports = roleExplorer;
