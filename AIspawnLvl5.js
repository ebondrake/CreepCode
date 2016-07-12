Memory.roomEnergyCapacity //1800

module.exports={
  run: function() {
    var creepName = '';
    var spawning = 0;


    if(Memory.harvester.length < Memory.harvesterTotal && !Game.spawns.Home.spawning) {// Harvester-lvl5
      for(i = 1; i <= Memory.harvesterTotal; i++){ //find fresh creep name
        creepName = ('5H' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'harvester', working: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END Harvester level 5

    else if (Memory.collector.length < Memory.collectorTotal && !Game.spawns.Home.spawning) {// Repair-lvl5
      for(i = 1; i <= Memory.collectorTotal; i++){
        creepName = ('5C' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'collector', working: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END collector level 5

    else if (Memory.defender.length < Memory.defenderTotal && !Game.spawns.Home.spawning) {// Attacker-lvl5
      for(i = 1; i <= Memory.defenderTotal; i++){
        creepName = ('5D' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH, TOUGH, TOUGH , ATTACK , ATTACK , ATTACK , MOVE , MOVE , MOVE , ATTACK , HEAL , MOVE , TOUGH, TOUGH, TOUGH , ATTACK , ATTACK , ATTACK , MOVE , MOVE , MOVE , ATTACK , HEAL , MOVE], creepName,
            {role: 'defender', attacking: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 5

    else if (Memory.attacker.length < Memory.attackerTotal && !Game.spawns.Home.spawning) {// Attacker-lvl5
      for(i = 1; i <= Memory.attackerTotal; i++){
        creepName = ('5A' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([TOUGH,TOUGH,TOUGH, WORK , ATTACK , ATTACK , ATTACK , MOVE , MOVE , MOVE , ATTACK , MOVE , TOUGH, TOUGH, TOUGH ,MOVE,MOVE, ATTACK , ATTACK , WORK , ATTACK , MOVE , MOVE , MOVE,CARRY ,WORK , ATTACK , HEAL , MOVE], creepName,
            {role: 'attacker', attacking: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 5

    else if (Memory.healer.length < Memory.healerTotal && !Game.spawns.Home.spawning) {// Healer-lvl3
      for(i = 1; i <= Memory.healerTotal; i++){
        creepName = ('5Hlr' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([HEAL,HEAL,HEAL,MOVE], creepName,
            {role: 'healer', healing: false, aboutToDie: false, level: 5}); //requires 800 energy
          spawning = 1;
          break;
        }
      }
    }//END healer level 3

    else if (Memory.builder.length < Memory.builderTotal && !Game.spawns.Home.spawning) {// Builder-lvl5
      for(i = 1; i <= Memory.builderTotal; i++){
        creepName = ('5B' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'builder', working: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END Builder level 5

    else if (Memory.upgrader.length < Memory.upgraderTotal && !Game.spawns.Home.spawning) {// Upgrader-lvl5
      for(i = 1; i <= Memory.upgraderTotal; i++){
        creepName = ('5U' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'upgrader', working: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END Upgrader level 5

    else if (Memory.claimer.length < Memory.claimerTotal && !Game.spawns.Home.spawning) {// Upgrader-lvl5
      for(i = 1; i <= Memory.claimerTotal; i++){
        creepName = ('5Cl' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CLAIM,CLAIM], creepName,
            {role: 'claimer', working: false, aboutToDie: false, level: 5}); //requires 1800 energy
          spawning = 1;
          break;
        }
      }
    }//END Upgrader level 5

    if (spawning == 1){
      console.log('Spawning ' + creepName + ' - (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + Memory.attacker.length + '/' + Memory.attackerTotal +') (D:' + Memory.defender.length + '/' + Memory.defenderTotal +') (Hlr:' + Memory.healer.length + '/' + Memory.healerTotal +') (C:' + Memory.collector.length + '/' + Memory.collectorTotal +') (Cl:' + Memory.claimer.length + '/' + Memory.claimerTotal +') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (U:' + Memory.upgrader.length + '/' + Memory.upgraderTotal + ')');
      spawning = 0;
    }
  }//end function(spawn)
}
