
module.exports = {
// [General]
name: "Essential Commands", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'Essential commands such as mass or name', // Desciprtion
minVersion: '', // minimum version requirements (optional)
version:  '1.0.1', // version REQUIRED
commands: {
    mass: require('./mass.js'),
    name: require('./name.js'),
    broadcast: require('./broadcast.js'),
    chatlog: require('./chatlog.js'),
    pm: require('./pm.js'),
    prune: require('./prune.js'),
    kill: require('./kill.js'),
	change: require('./change.js'),
	merge: require('./merge.js'),
	chat: require('./chat.js'),
	freeze: require('./freeze.js'),
	unfreeze: require('./unfreeze.js'),
	config: require('./config.js'),
	clear: require('./clear.js'),
},
    
  addToHelp: ["| Mass                     | Set the mass of a player |",
              "| Name                     | Change the name of player|",
              "| Broadcast                | Broadcast to the chat!   |",
              "| Chatlog                  | chat info                |",
              "| Change                   | Change config value      |",
              "| Pm                       | Send a msg to a player   |",
              "| Prune                    | Prune a player's msg     |",
              "| Kill                     | Kills a player           |",
			  "| Clear                    | Clears Console           |",
			  "| Freeze                   | Freeze Player            |",
			  "| Unfreeze                 | Un-Freeze player         |",
			  "| Config                   | Shows editable configs   |",
			  "| Kill                     | Kills a player           |",
			  "| Change                   | Change config value      |",
			  ],
// [Functions]
init: function (data,config) {
  // init, Used to do stuff such as overriding things
}
}
