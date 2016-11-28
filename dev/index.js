
module.exports = {
// [General]
name: "Dev", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Development plugin', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: {
     comp: require('./compile.js')
     
 }, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
}
}
