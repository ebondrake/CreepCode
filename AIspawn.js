var AIspawnLvl1 = require('AIspawnLvl1');
var AIspawnLvl2 = require('AIspawnLvl2');
var AIspawnLvl3 = require('AIspawnLvl3');
var AIspawnLvl4 = require('AIspawnLvl4');
var AIspawnLvl5 = require('AIspawnLvl5');

module.exports={
  run: function(){
    if (Memory.cityLevel === 1 && Memory.roomEnergy >= 300){
      AIspawnLvl1.run();
    }

    else if(Memory.cityLevel === 2 && Memory.roomEnergy >= 550){
        AIspawnLvl2.run();
    }

    else if(Memory.cityLevel === 3 && Memory.roomEnergy >= 800){
        AIspawnLvl3.run();
    }

    else if(Memory.cityLevel === 4 && Memory.roomEnergy >= 1300){
        AIspawnLvl4.run();
    }

    else if(Memory.cityLevel === 5 && Memory.roomEnergy >= 1800){
        AIspawnLvl5.run();
    }
  }
}
