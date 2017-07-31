module.exports = {
// [General]
name: "AutoPause", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Pause the server when no ones there', // Desciprtion
minVersion: '5.0.0', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: false, // commands
 configFile: 'config.ini, //config file
// [Functions]
init: function(data,configs) {
  
  data.main.AutoPause = {
  config: configs
  }
  // init, Used to do stuff such as overriding things
},
  onClientAdd: function(data) {
if (data.main.paused) {
  if (data.main.AutoPause.config.log == 1) data.log("gre{[AutoPause]} Paused server".styleMe());
  data.main.pause(false);
}
  },
  onClientRemove: function(data) {
   if (data.main.players.size === 0)  {
     if (data.main.AutoPause.config.log == 1) data.log("gre{[AutoPause]} Unpaused server".styleMe());
     data.main.pause(true); 
   }
  }
}
