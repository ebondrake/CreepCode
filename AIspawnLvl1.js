module.exports={
  run: function() {
    var creepName = '';
    var spawning = 0;

    if(Memory.harvester.length < Memory.harvesterTotal && !Game.spawns.Home.spawning) {
      for(i = 1; i <= Memory.harvesterTotal; i++){
        creepName = ('1H' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE], creepName,
              {role: 'harvester', working: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END Harvester level 1

    else if (Memory.collector.length < Memory.collectorTotal && !Game.spawns.Home.spawning) {// Repair-lvl1
      for(i = 1; i <= Memory.collectorTotal; i++){
        creepName = ('1C' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'collector', working: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END collector level 1

    else if (Memory.attacker.length < Memory.attackerTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.attackerTotal; i++){
        creepName = ('1A' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH], creepName,
            {role: 'attacker', attacking: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 1

    else if (Memory.defender.length < Memory.defenderTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.defenderTotal; i++){
        creepName = ('1D' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH], creepName,
            {role: 'defender', attacking: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 1

    else if (Memory.healer.length < Memory.healerTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.healerTotal; i++){
        creepName = ('1Hlr' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([HEAL,MOVE], creepName,
            {role: 'healer', healing: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END healer level 1

    else if (Memory.builder.length < Memory.builderTotal && !Game.spawns.Home.spawning) {// Builder-lvl1
      for(i = 1; i <= Memory.builderTotal; i++){
        creepName = ('1B' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE], creepName,
            {role: 'builder', working: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END Builder level 1

    else if (Memory.upgrader.length < Memory.upgraderTotal && !Game.spawns.Home.spawning) {// Upgrader-lvl1
      for(i = 1; i <= Memory.upgraderTotal; i++){
        creepName = ('1U' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE], creepName,
            {role: 'upgrader', working: false, aboutToDie: false, level: 1}); //requires 300 energy
          spawning = 1;
          break;
        }
      }
    }//END Upgrader level 1

    if (spawning === 1){
      console.log('Spawning ' + creepName + ' - (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + Memory.attacker.length + '/' + Memory.attackerTotal +') (D:' + Memory.defender.length + '/' + Memory.defenderTotal +') (Hlr:' + Memory.healer.length + '/' + Memory.healerTotal +') (C:' + Memory.collector.length + '/' + Memory.collectorTotal +') (Cl:' + Memory.claimer.length + '/' + Memory.claimerTotal +') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (U:' + Memory.upgrader.length + '/' + Memory.upgraderTotal + ')');
      spawning = 0;
    }
  }//end function(spawn)
}
