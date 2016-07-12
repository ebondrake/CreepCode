module.exports={
  run: function() {
    var creepName = '';
    var spawning = 0;


    if(Memory.harvester.length < Memory.harvesterTotal && !Game.spawns.Home.spawning) {// Harvester-lvl2
      for(i = 1; i <= Memory.harvesterTotal; i++){ //find fresh creep name
        creepName = ('2H' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,MOVE,CARRY,MOVE,CARRY,MOVE], creepName,
            {role: 'harvester', working: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Harvester level 2

    else if (Memory.collector.length < Memory.collectorTotal && !Game.spawns.Home.spawning) {// Collector-lvl2
      for(i = 1; i <= Memory.collectorTotal; i++){
        creepName = ('2C' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,MOVE], creepName,
            {role: 'collector', working: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END collector level 2

    else if (Memory.attacker.length < Memory.attackerTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.attackerTotal; i++){
        creepName = ('2A' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE], creepName,
            {role: 'attacker', attacking: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 2

    else if (Memory.defender.length < Memory.defenderTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.defenderTotal; i++){
        creepName = ('2D' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE], creepName,
            {role: 'defender', attacking: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 2

    else if (Memory.healer.length < Memory.healerTotal && !Game.spawns.Home.spawning) {// Attacker-lvl1
      for(i = 1; i <= Memory.healerTotal; i++){
        creepName = ('2Hlr' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([HEAL,HEAL,MOVE], creepName,
            {role: 'healer', healing: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END healer level 2

    else if (Memory.builder.length < Memory.builderTotal && !Game.spawns.Home.spawning) {// Builder-lvl1
      for(i = 1; i <= Memory.builderTotal; i++){
        creepName = ('2B' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], creepName,
            {role: 'builder', working: false, aboutToDie: false, level: 2}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Builder level 2

      else if (Memory.upgrader.length < Memory.upgraderTotal && !Game.spawns.Home.spawning) {// Upgrader-lvl1
        for(i = 1; i <= Memory.upgraderTotal; i++){
          creepName = ('2U' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], creepName,
              {role: 'upgrader', working: false, aboutToDie: false, level: 2}); //requires 550 energy
            spawning = 1;
            break;
          }
        }
      }//END Upgrader level 2

    if (spawning == 1){
      console.log('Spawning ' + creepName + ' - (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + Memory.attacker.length + '/' + Memory.attackerTotal +') (D:' + Memory.defender.length + '/' + Memory.defenderTotal +') (Hlr:' + Memory.healer.length + '/' + Memory.healerTotal +') (C:' + Memory.collector.length + '/' + Memory.collectorTotal +') (Cl:' + Memory.claimer.length + '/' + Memory.claimerTotal +') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (U:' + Memory.upgrader.length + '/' + Memory.upgraderTotal + ')');
      spawning = 0;
    }
  }//end function(spawn)
}
