module.exports = function(str,main,log) {
     str = str.split(" ")
var id = parseInt(str[1])
var msg = str.slice(2).join(" ")
if (isNaN(id) || !msg) {
    log("Please provide the player id and msg")
    return
}
    var player = main.getPlayer(id)
    if (!player) return log("No player with that id was found")
    if (player.isBot) return log("That player is a bot! It cant chat!")
    player.msg(msg,"[OpenAgar->" + player.gameData.chatName + "]")
    log("PM succesfully sent to " + player.gameData.name)
}