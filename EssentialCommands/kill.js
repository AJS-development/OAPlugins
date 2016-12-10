module.exports = function(str,main,log) {
    str = str.split(" ")
var id = parseInt(str[1])
if (isNaN(id)) {
    return log("Please specify a player ID")
}
    var player = main.getPlayer(id)
    if (!player) return log("No player with that id was found")
   players.cells.forEach(function(cell) {
   main.removeNode(cell)

   })
    log("Killed " + player.gameData.name )

}
