module.exports={
  run: function(creep) {
    if(Memory.healer.length > Memory.healerTotal || (creep.memory.level < Memory.cityLevel && Memory.healer.length > 1)){
      creep.drop(RESOURCE_ENERGY);
      creep.moveTo(Game.spawns.Home);
    }else{
      if(creep.ticksToLive >= 1450 || Game.spawns.Home.energy < 20) {creep.memory.aboutToDie = false}

      if(creep.ticksToLive <=1){
        console.log(creep.name + ' is dead.. (H:' + Memory.harvester.length + '/' + Memory.harvesterTotal + ') (A:' + (Memory.attacker.length-1) + '/' + Memory.attackerTotal +') (Hlr:' + (Memory.healer.length-1) + '/' + Memory.healerTotal +') (C:' + Memory.collector.length + '/' + Memory.collectorTotal +') (B:' + Memory.builder.length + '/' + Memory.builderTotal +') (U:' + Memory.upgrader.length + '/' + Memory.upgraderTotal + ')');
      }

      if(creep.memory.aboutToDie){
        //creep.say('healing');
        creep.moveTo(Game.spawns.Home);
      }else{
        var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
          filter: function(object) {
            return object.hits < object.hitsMax;
          }
        });
        if(target){
          if(creep.heal(target) == ERR_NOT_IN_RANGE){
            creep.moveTo(target);
          }
        }else{
          creep.moveTo(Game.flags.Defender);
        }
      }
    }
  }
}
