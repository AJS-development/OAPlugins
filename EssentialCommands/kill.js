module.exports = function(str,main,log) {
    str = str.split(" ")
var id = parseInt(str[1])
if (isNaN(id)) {
    return log("Please specify a player ID")
}
    var player = main.getPlayer(id)
    if (!player) return log("No player with that id was found")
   for (var i = 0; i < player.cells.length; i ++) {
   main.removeNode(player.cells[i])
   i --;
   }
    log("Killed " + player.gameData.name )

}