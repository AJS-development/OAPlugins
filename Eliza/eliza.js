module.exports = function(str,main,player,log) {
if (!player.eliza) {
    player.eliza = true;
    return log("Eliza has been turned off for you")
} else {
     player.eliza = false;
    return log("Eliza has been turned on again")
}
    


}
