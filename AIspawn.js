var AIspawn = {

  run: function(AIspawn) {


    var AIspawnLvl1 = require('AIspawnLvl1');
    var AIspawnLvl2 = require('AIspawnLvl2');


    if(Memory.cityLevel === 1 && Memory.roomEnergyFull){

      AIspawnLvl1.run(AIspawnLvl1);
    }

    else if(Memory.cityLevel === 2 && Memory.roomEnergyFull){
      if(Memory.harvester.length > 1){
        AIspawnLvl2.run(AIspawnLvl2);
      }else {
        AIspawnLvl1.run(AIspawnLvl1);
      }
    }

    else if(Memory.cityLevel === 3 && Memory.roomEnergy >= 550){

      if(Memory.harvester.length > 1){
        AIspawnLvl2.run(AIspawnLvl2);
      }else {
        AIspawnLvl1.run(AIspawnLvl1);
      }
    }


  }
};module.exports = AIspawn;
