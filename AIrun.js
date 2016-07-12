var roleHarvester = require('role.harvester');
var roleAttacker = require('role.attacker');
var roleDefender = require('role.defender');
var roleHealer = require('role.healer');
var roleCollector = require('role.collector');
var roleClaimer = require('role.claimer');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleSpawner = require('role.spawner');

module.exports={
  run: function(){

/**
    var MOVE = 50;
    var WORK = 100;
    var CARRY = 50;
    var ATTACK = 80;
    var HEAL = 250;
    var RANGEDATTACK = 150;
    var TOUGH = 10;
    var CLAIM = 600;


        console.log(MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE+MOVE +CLAIM+CLAIM+ ' total needed.');
**/




    roleSpawner.run(Game.spawns.Home);

    for(let name in Game.creeps){
      var creep = Game.creeps[name];
      if     (creep.memory.role == 'harvester') {roleHarvester.run(creep);}
      else if(creep.memory.role == 'attacker')  {roleAttacker.run(creep);}
      else if(creep.memory.role == 'defender')  {roleDefender.run(creep);}
      else if(creep.memory.role == 'healer')  {roleHealer.run(creep);}
      else if(creep.memory.role == 'collector') {roleCollector.run(creep);}
      else if(creep.memory.role == 'claimer') {roleClaimer.run(creep);}
      else if(creep.memory.role == 'builder')   {roleBuilder.run(creep);}
      else if(creep.memory.role == 'upgrader')  {roleUpgrader.run(creep);}
    }
  }
}
