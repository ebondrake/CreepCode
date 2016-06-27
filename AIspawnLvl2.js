var AIspawnLvl2 = {

  run: function(AIspawnLvl2) {
    var creepName = '';
    var spawning = 0;


    if(Memory.harvester.length < Memory.harvesterTotal) {// Harvester-lvl1
      for(i = 1; i <= Memory.harvesterTotal; i++){ //find fresh creep name
        creepName = ('HH' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE],creepName, {role: 'harvester'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Harvester level 1


    else if (Memory.attacker.length < Memory.attackerTotal) {// Attacker-lvl1
      for(i = 1; i <= Memory.attackerTotal; i++){
        creepName = ('AA' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE],creepName, {role: 'attacker'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END attacker level 1


    else if (Memory.upgrader.length < Memory.upgraderTotal) {// Upgrader-lvl1
      for(i = 1; i <= Memory.upgraderTotal; i++){
        creepName = ('UU' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],creepName, {role: 'upgrader'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Upgrader level 1


    else if (Memory.builder.length < Memory.builderTotal) {// Builder-lvl1
      for(i = 1; i <= Memory.builderTotal; i++){
        creepName = ('BB' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],creepName, {role: 'builder'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Builder level 1


    else if (Memory.repair.length < Memory.repairTotal) {// Repair-lvl1
      for(i = 1; i <= Memory.repairTotal; i++){
        creepName = ('RR' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],creepName, {role: 'repair'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END Builder level 1


    else if (Memory.explorer.length < Memory.explorerTotal) {// Explorer-lvl1
      for(i = 1; i <= Memory.explorerTotal; i++){
        creepName = ('EE' + i);
        if(!Game.creeps[creepName]){
          Game.spawns.Home.createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],creepName, {role: 'explorer'}); //requires 550 energy
          spawning = 1;
          break;
        }
      }
    }//END explorer level 1


    if (spawning == 1){
      console.log('Spawning ' + creepName + ' - (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + Memory.attacker.length + '/' + Memory.attackerTotal +') (U:' + Memory.upgrader.length + '/' + Memory.upgraderTotal + ') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (R:' + Memory.repair.length + '/' + Memory.repairTotal +') (E:' + Memory.explorer.length + '/' + Memory.explorerTotal +')');
      spawning = 0;
    }
  }//end function(spawn)
};module.exports = AIspawnLvl2;
