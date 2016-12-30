
module.exports = {
// [General]
name: "Eliza", // Name of plugin REQUIRED
author: "Andrews54757", // author REQUIRED
description: 'The E.L.I.Z.A chat bot', // Desciprtion
minVersion: '3.1.7', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: false, // add to help
 commands: false, // commands
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
},
    chatCommands: {
        eliza: require('./eliza.js')
    },
    chatHelp: ["Eliza              | Disable/enable ELIZA"],
 beforeChat: function(data) {
  var player = data.player
  var msg = data.msg
  var main = data.main
  var log = data.log
  if (player._eliza) {
      player._bot = false;
      return true;
  }
  if (player._bot) {
      if (msg.toLowerCase().indexOf('bye eliza') != -1) {
              player.msg(msg,player.gameData.chatName)
              player.msg(player._bot.getFinal(),'ELIZA')
              player.msg("ELIZA Stopped")
                 player.recievePublicChat = true;
          player._bot = false;
          return false;
      } else {
            player.msg(msg,player.gameData.chatName)
          player.msg(player._bot.transform(msg),"ELIZA")
          return false;
      }
      
  } else if (msg.toLowerCase().indexOf('hi eliza') != -1) {
      player.msg("You just woke up ELIZA")
       player.msg("ELIZA is a bot developed a long time ago")
       player.msg("It is designed to be like a phsychiatrist")
       player.msg("What you say wont be broadcast")
       player.msg("Say 'bye eliza' to stop")
      player._bot = new ELIZA(false)
      player.recievePublicChat = false
      player.msg(msg,player.gameData.chatName)
      player.msg(player._bot.getInitial(),'ELIZA')
   return false;   
  }
  
  return true;
 }
}


