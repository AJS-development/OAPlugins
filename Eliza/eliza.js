module.exports = function(str,main,player,log) {
if (!player._eliza) {
    player._eliza = true;
    return log("Eliza has been turned off for you")
} else {
     player._eliza = false;
    return log("Eliza has been turned on again")
}
    


}
