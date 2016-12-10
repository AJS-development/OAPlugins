module.exports = function(str,main,log) {
         str = str.split(" ")
         if (str[1] == "destroy") {
             main.minions.forEach(function(minion){
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
           
       player.minions.forEach(function(minion) {
                 main.removeMinion(minion)
       });    
             
             return log("Removed minions for " + player.gameData.name) 
         } else {
            if (isNaN(amount)) amount = 1;
             main.addMinions(player,amount)
             return log("Gave " + player.gameData.name + " " + amount + " minions")
         }
     }
