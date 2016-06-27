var cleanup = {

  run: function(cleanup) {

    for(var name in Memory.creeps) {
      if(!Game.creeps[name]) {
        delete Memory.creeps[name];
      }
    }

    for(var name in Memory) {
      if(!Game[name]) {
        delete Memory[name];
      }
    }

  }

};module.exports = cleanup;
