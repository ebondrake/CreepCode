var roleHarvester = {

  run: function(creep) {
    if(this.energy < this.energyCapacity){
      var energy = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      if(!this.pos.isNearTo(energy)){
        this.moveTo(energy);
      }else {
        this.harvest(energy);
      }
    }else{
      var targets = this.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < ;}});
      if(targets.length > 0) {
        targets.sort((a,b) => a.energy - b.energy);
        if(this.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          this.moveTo(targets[0]);
        }
      }else {
        this.moveTo(Game.flags.Harvester);
      }
    }
  }//END run function
};module.exports = roleHarvester;
