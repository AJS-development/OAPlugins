module.exports = function(str,main,log) {
    str = str.split(" ")
var id = parseInt(str[1])
var mass = parseInt(str[2])
if (isNaN(id) || isNaN(mass)) {
    return log("Please provide the player id and mass")
}
    var player = main.getPlayer(id)
    if (!player) return log("No player with that id was found")
    player.setMass(mass)
    log("Set the mass for " + player.gameData.name + " to " + mass)
}