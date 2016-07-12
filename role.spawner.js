module.exports={
  run: function(spawn){
    var creeps = spawn.room.find(FIND_CREEPS);
    if(creeps.length && Game.spawns.Home.canRenew){
      if(!Memory.renewmingCreep){
        creeps.sort((a,b) => a.ticksToLive - b.ticksToLive);
        if(creeps[0].ticksToLive <= 500){
          Memory.renewmingCreep = true;
          Memory.creepRenewing = creeps[0].name;
        }else{
          Memory.renewmingCreep = false;
          Memory.creepRenewing = undefined;
        }
      }else if(Memory.renewmingCreep && !Game.spawns.Home.spawning){
        creep = Game.creeps[Memory.creepRenewing];
        if(creep != undefined){
          creep.memory.aboutToDie = true;
          creep.say('healing!');
          spawn.renewCreep(creep);
          if(creep.ticksToLive >= 1450) {
            Memory.renewmingCreep = false;
            Memory.creepRenewing = undefined;
          }
        }else{
          Memory.renewmingCreep = false;
          Memory.creepRenewing = undefined;
        }
      }else{
        creep = Game.creeps[Memory.creepRenewing];
        creep.memory.aboutToDie = false;
        Memory.renewmingCreep = false;
        Memory.creepRenewing = undefined;
      }
    }



    creeps = spawn.pos.findInRange(FIND_CREEPS, 1);
    if(creeps.length) {
      creeps.sort((a,b) => a.ticksToLive - b.ticksToLive);

      for(let i in creeps ){
        if(creeps[i].memory.role === 'attacker'){
          if(Memory.attacker.length > Memory.attackerTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.attackerFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'builder'){
          if(Memory.builder.length > Memory.builderTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.builderFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'defender'){
          if(Memory.defender.length > Memory.defenderTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.defenderFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'healer'){
          if(Memory.healer.length > Memory.healerTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.healerFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'harvester'){
          if(Memory.harvester.length > Memory.harvesterTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.harvesterFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'collector'){
          if(Memory.collector.length > Memory.collectorTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.collectorFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'claimer'){
          if(Memory.claimer.length > Memory.claimerTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.claimerFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }

        else if(creeps[i].memory.role === 'upgrader'){
          if(Memory.upgrader.length > Memory.upgraderTotal || (creeps[i].memory.level < Memory.cityLevel && Memory.upgraderFull)){
            console.log(creeps[i].name + ' needs to die!');
            spawn.recycleCreep(creeps[i]);
            break;
          }
        }
      }
    }



  }
}
