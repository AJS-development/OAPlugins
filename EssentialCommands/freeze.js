module.exports = function(str,main,log) {
    str = str.split(" ")
	if(isNaN(str[1])) return log("Please enter a valid id.");
	var player = main.getPlayer(parseInt(str[1]));
	if(!player) return log("Player ID " + str[1] + " was not found");
	player.frozen = true;
	log(((player.gameData.name)?player.gameData.name:"ID "+str[2]) + " has been frozen.");
}
