module.exports = function(str,main,log) {
    str = str.split(" ")
var id = parseInt(str[1])
var name = str.slice(2).join(" ")
if (isNaN(id) || !name) {
    log("Please provide the player id and name")
    return
}
    var player = main.getPlayer(id)
    if (!player) return log("No player with that id was found")
   
    log("Changed player " + player.gameData.name + " to " + name)
         player.setName(name)
}