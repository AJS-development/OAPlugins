module.exports = {
// [General]
name: "Minions", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Adds minions to the game', // Desciprtion
minVersion: '3.0.5', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: ["| Minion                   | Minion command           |"], // add to help
 commands: {
     minion: require('./minion.js')
     
 }, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
}
}
