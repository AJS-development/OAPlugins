module.exports = function(str,main,log) {
    str = str.split(" ")
	if(isNaN(str[2])) return log("Please enter a valid id.");
	var player = main.getPlayer(parseInt(str[2]));
	switch(str[1].toLowerCase()){
		case "ban":
			player.gameData.chatBan = true;
			log(((player.gameData.name)?player.gameData.name:"ID "+str[2]) + " has been banned from chat");
			break;
		case "unban":
			player.gameData.chatBan = false;
			log(((player.gameData.name)?player.gameData.name:"ID "+str[2]) + " has been unbanned from chat");
			break;
		default:
			log("chat [ban/unban] [id]");
			break;
	}
}
