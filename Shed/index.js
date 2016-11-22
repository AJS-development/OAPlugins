module.exports = {
// [General]
name: "Shed", // Name of plugin REQUIRED
author: "LegitSoulja", // author REQUIRED
description: '', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: false, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
},
 beforeSpawn: function(data) {
   var player = data.player
    // default white color when joined
    var color = {r: 255, g: 255, b: 255};
    player.gameData.color = color;
    player.msg("Press 'Space' to shed", "[Shed]");
    return true;
 },
  onPressSpace: function(data) {
   data.player.gameData.color = {
        r: ~~(Math.random() * 255 + 0), // no decimal places
        g: ~~(Math.random() * 255 + 0), // no decimal places
        b: ~~(Math.random() * 255 + 0)  // no decimal places
    }
    return true;
  }
}
