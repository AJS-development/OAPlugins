module.exports = function(str,main,log) {
	str = str.split(" ");
	if(str.length > 1){
		switch(str[1].toLowerCase()){
			case "minions":
				main.minions.forEach(function(player){
					
						player.cells.forEach(function(cell){
							main.removeNode(cell);
						})
					
				})
				return log("Killed all minions");
			case "bots":
				main.bots.forEach(function(player){
				
						player.cells.forEach(function(cell){
							main.removeNode(cell);
						})
					
				})
				return log("Killed all bots");
			default:
				return log("killall [bots/minions]");
		}
	}
	main.loopPlayers(function(player) {
		player.cells.forEach(function(cell){
			main.removeNode(cell);
		})
	})
	return log("Killed all players");
}
