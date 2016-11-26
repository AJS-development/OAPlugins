
module.exports = {
// [General]
name: "Eliza", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'The E.L.I.Z.A chat bot', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: false, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
},
 beforeChat: function(data) {
  var player = data.player
  var msg = data.msg
  var main = data.main
  var log = data.log
  
  
  return true;
 }
}
