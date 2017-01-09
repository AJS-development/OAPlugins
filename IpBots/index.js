module.exports = {
// [General]
name: "IPBots", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Gives bots to a ip', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: false, // commands
 configFile: "config.ini", //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
 data.main.IPbots = {
  config: configs,
  online: new Map().
  ipdata: {};
 }
 for (var i in configs) {
 var config = configs[i];
 if (!config.numBots) continue;
 data.main.IPbots.ipdata[i] = {
 numBots: config.numBots,
 expiration: config.expiration
 used: 0
}
}
 
},
beforePlayerInit(data) {
 var player = data.player;
var ip = player.socket.remoteAddress;
 if (
}
}
