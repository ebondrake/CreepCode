module.exports={
  run: function(){
    for(let name in Memory.creeps){
      if(!Game.creeps[name])  {delete Memory.creeps[name];}
    }
  }
}
