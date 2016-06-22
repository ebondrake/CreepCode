var spawnAI = {

  run: function(spawn) {

    //spawn amount
    var harvesterTotal = 4;
    var builderTotal = 4;
    var upgraderTotal = 3;
    var attackerTotal = 4;
    var repairerTotal = 2;
    var spawning = 0;
    var spawned = '';

    // Count Creeps
    var attacker = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    //check if room has enough energy for lvl 1 spawns.
    if(Game.spawns.Spawn1.room.energyAvailable >= 300){

      // Harvester-lvl1
      if(harvester.length < harvesterTotal) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], {role: 'harvester'}); //requires 300 energy
        spawned = 'Harvester' spawning = 1;
      }

      // Attacker-lvl1
      else if (attacker.length < attackerTotal) {
        var newName = Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH], {role: 'attacker'}); //requires 300 energy
        spawned = 'Attacker' spawning = 1;
      }

      // Builder-lvl1
      else if (builder.length < builderTotal) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], {role: 'builder'}); //requires 300 energy
        spawned = 'Builder' spawning = 1;
      }

      // Upgrader-lvl1
      else if (upgrader.length < upgraderTotal) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], {role: 'upgrader'}); //requires 300 energy
        spawned = 'Upgrader' spawning = 1;
      }

      // Repairer-lvl1
      else if (repairer.length < repairerTotal) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], {role: 'repairer'}); //requires 300 energy
        spawned = 'Repairer' spawning = 1;
      }

      //console.log('Evolution Finished - H:' + harvester.length + '/U:' + upgrader.length + '/B:' + builder.length);
      if (Spawning = 1){
        console.log('Spawning new' + spawned + ': ' + newName + ' - (H:' + harvester.length + '/' + harvesterTotal + ') (A:' + attacker.length + '/' + attackerTotal +') \
        (B:' + builder.length + '/' + builderTotal +') (U:' + upgrader.length + '/' + upgraderTotal + ') (R:' + repairer.length + '/' + repairerTotal + ')');
      }

    }//end if room has over 300 energy

  }//end function(spawn)

};module.exports = spawnAI;
