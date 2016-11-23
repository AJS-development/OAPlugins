module.exports = {
// [General]
name: "Minions", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Adds minions to the game', // Desciprtion
minVersion: '3.0.5', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: ["| Minion                   | Minion command          |"], // add to help
 commands: {
     minion: function(str,main,log) {
         str = str.split(" ")
         if (str[1] == "destroy") {
             main.minions.forEach((minion)=>{
                 main.removeMinion(minion)
             })
             
             return log("Removed all minions")
         }
             var id = parseInt(str[1])
         if (isNaN(id)) {
             return log("Please specify a player id!")
         }
         var player = main.getPlayer(id)
         if (!player) {
             return log("That player doesnt exsist!")
         }
         var amount = parseInt(str[2])
        
         if (isNaN(amount) && player.minions.length != 0) {
           
        for (var i = 0; i < player.minions.length; i ++) {
                 main.removeMinion(player.minions[i])
                 i--;
             }
             return log("Removed minions for " + player.gameData.name) 
         } else {
            if (isNaN(amount)) amount = 1;
             main.addMinions(player,amount)
             return log("Gave " + player.gameData.name + " " + amount + " minions")
         }
     }
     
 }, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
}
}
