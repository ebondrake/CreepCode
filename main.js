var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');
var roleRepairer = require('role.repairer');
var cleanup = require('cleanup');
var spawnAI = require('spawnAI')

module.exports.loop = function () {
  cleanup.run(cleanup);
  spawnAI.run(spawnAI);

  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if(creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if(creep.memory.role == 'builder') {
      roleBuilder.run(creep);
    }
    if(creep.memory.role == 'attacker') {
      roleAttacker.run(creep);
    }
    if(creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
    }
  }
}
