var AIspawnLvl1 = {

  run: function(AIspawnLvl1) {

    var creepName = '';
    var spawning = 0;


      if(Memory.harvester.length < Memory.harvesterTotal) {// Harvester-lvl1
        for(i = 1; i <= Memory.harvesterTotal; i++){ //find fresh creep name
          creepName = ('H' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'harvester'}); //requires 300 energy
            spawning = 1;
            break;
          }
        }
      }//END Harvester level 1


      else if (Memory.attacker.length < Memory.attackerTotal) {// Attacker-lvl1
        for(i = 1; i <= Memory.attackerTotal; i++){
          creepName = ('A' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],creepName, {role: 'attacker'}); //requires 300 energy
            spawning = 1;
            break;
          }
        }
      }//END attacker level 1


      else if (Memory.upgrader.length < Memory.upgraderTotal) {// Upgrader-lvl1
        for(i = 1; i <= Memory.upgraderTotal; i++){
          creepName = ('U' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'upgrader'}); //requires 300 energy
            spawning = 1;
            break;
          }
        }
      }//END Upgrader level 1


      else if (Memory.builder.length < Memory.builderTotal) {// Builder-lvl1
        for(i = 1; i <= Memory.builderTotal; i++){
          creepName = ('B' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'builder'}); //requires 300 energy
            spawning = 1;
            break;
          }
        }
      }//END Builder level 1


      else if (Memory.repair.length < Memory.repairTotal) {// Repair-lvl1
        for(i = 1; i <= Memory.repairTotal; i++){
          creepName = ('R' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'repair'}); //requires 300 energy
            spawning = 1;
            break;
          }
        }
      }//END Builder level 1


      else if (Memory.explorer.length < Memory.explorerTotal) {// Explorer-lvl1
        for(i = 1; i <= Memory.explorerTotal; i++){
          creepName = ('E' + i);
          if(!Game.creeps[creepName]){
            Game.spawns.Home.createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],creepName, {role: 'explorer'}); //requires 300 energy
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
};module.exports = AIspawnLvl1;
