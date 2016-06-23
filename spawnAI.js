var spawnAI = {

  run: function(spawn) {

    //Level 1 spawn amount
    var harvesterTotal = 2;
    var upgraderTotal = 2;
    var builderTotal = 2;
    var attackerTotal = 0;
    var repairerTotal = 2;
    //END level 1 spawn amount

    //Level 2 spawn amount
    var harvesterHTotal = 0;
    var upgraderHTotal = 0;
    var builderHTotal = 0;
    var attackerHTotal = 0;
    var repairerHTotal = 0;
    //END level 2 spawn amount

    var spawning = 0;
    var spawned = '';

    // Count level 1 Creeps
    var harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var attacker = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    //END Count level 1 Creeps


    // Count level 2 Creeps
    var harvesterH = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterH');
    var upgraderH = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderH');
    var builderH = _.filter(Game.creeps, (creep) => creep.memory.role == 'builderH');
    var attackerH = _.filter(Game.creeps, (creep) => creep.memory.role == 'attackerH');
    var repairerH = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairerH');
    //END Count level 2 Creeps


    //check if room has 300 energy for level 1 creeps
    if(Game.spawns.Home.room.energyAvailable >= 300){
      // Harvester-lvl1
      if(harvester.length < harvesterTotal) {
        for(i=1; i<= harvesterTotal; i++){ //find fresh creep name
          var creepName = ('Harvester' + i);
          console.log(creepName);
          if(!Game.creeps.creepName){
            var newName = Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'harvester'}); //requires 300 energy
//            break;
          }
        }
        spawned = 'Harvester';
        spawning = 1;
      }
      // Upgrader-lvl1
      else if (upgrader.length < upgraderTotal) {
        for(i=1; i<= upgraderTotal; i++){
          var creepName = ('Upgrader' + i);
          console.log(creepName);
          if(!Game.creeps.creepName){
            var newName = Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'upgrader'}); //requires 300 energy
  //          break;
          }
        }
        spawned = 'Upgrader';
        spawning = 1;
      }
      // Builder-lvl1
      else if (builder.length < builderTotal) {
        for(i=1; i<= builderTotal; i++){
          var creepName = ('Builder' + i);
          console.log(creepName);
          if(!Game.creeps.creepName){
            var newName = Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'builder'}); //requires 300 energy
//            break;
          }
        }
        spawned = 'Builder';
        spawning = 1;
      }
      // Attacker-lvl1
      else if (attacker.length < attackerTotal) {
        for(i=1; i<= harvesterTotal; i++){
          var creepName = ('Attacker' + i);
          console.log(creepName);
          if(!Game.creeps.creepName){
            var newName = Game.spawns.Home.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],creepName, {role: 'attacker'}); //requires 300 energy
//            break;
          }
        }
        spawned = 'Attacker';
        spawning = 1;
      }
      // Repairer-lvl1
      else if (repairer.length < repairerTotal) {
        for(i=1; i<= harvesterTotal; i++){
          var creepName = ('Repairer' + i);
          console.log(creepName);
          if(!Game.creeps.creepName){
            var newName = Game.spawns.Home.createCreep([WORK,WORK,CARRY,MOVE],creepName, {role: 'repairer'}); //requires 300 energy
//            break;
          }
        }
        spawned = 'Repairer';
        spawning = 1;
      }

      if (spawning == 1){
        console.log('Spawning new ' + spawned + ': ' + newName + ' - (H:' + harvester.length + '/' + harvesterTotal + ') (A:' + attacker.length + '/' + attackerTotal +') (B:' + builder.length + '/' + builderTotal +') (U:' + upgrader.length + '/' + upgraderTotal + ') (R:' + repairer.length + '/' + repairerTotal + ')');
      }

    }//end if room has 300 energy

        //check if room has enough energy for lvl 2 spawns.
    if(Game.spawns.Home.room.energyAvailable >= 550){

      // Harvester-lvl2
      if(harvesterH.length < harvesterHTotal) {
        var newName = 'H-' + Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], {role: 'harvesterH'}); //requires 550 energy
       // creep.name.newName.name = 'HH-' + newName;
        spawned = 'Heavy Harvester';
        spawning = 1;
      }

      // Attacker-lvl2
      else if (attackerH.length < attackerHTotal) {
        var newName = 'A-' + Game.spawns.Home.createCreep([ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], {role: 'attackerH'}); //requires 550 energy
        spawned = 'Heavy Attacker';
        spawning = 1;
      }

      // Builder-lvl2
      else if (builderH.length < builderHTotal) {
        var newName = 'B-' + Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], {role: 'builderH'}); //requires 550 energy
        spawned = 'Heavy Builder';
        spawning = 1;
      }

      // Upgrader-lvl2
      else if (upgraderH.length < upgraderHTotal) {
        var newName = 'U-' + Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], {role: 'upgraderH'}); //requires 550 energy
        spawned = 'Heavy Upgrader';
        spawning = 1;
      }

      // Repairer-lvl2
      else if (repairerH.length < repairerHTotal) {
        var newName = 'R-' + Game.spawns.Home.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], {role: 'repairerH'}); //requires 550 energy
        spawned = 'Heavy Repairer';
        spawning = 1;
      }

      //console.log('Evolution Finished - H:' + harvester.length + '/U:' + upgrader.length + '/B:' + builder.length);
      if (spawning == 1){
        console.log('Spawning new Heavy ' + spawned + ': ' + newName + ' - (HH:' + harvesterH.length + '/' + harvesterHTotal + ') (HA:' + attackerH.length + '/' + attackerHTotal +') (HB:' + builderH.length + '/' + builderHTotal +') (HU:' + upgraderH.length + '/' + upgraderHTotal + ') (HR:' + repairerH.length + '/' + repairerHTotal + ')');
      }

    }//end if room has over 300 energy

  }//end function(spawn)

};module.exports = spawnAI;
