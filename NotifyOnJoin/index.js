// [General]
this.name = "Notify On Join"; // Name of plugin REQUIRED
this.author = "Andrews54757"; // author REQUIRED
this.description = 'Notifies the server if a player joins'; // Desciprtion
this.minVersion = ''; // minimum version requirements (optional)
this.version = '1.0.0'; // version REQUIRED

// [Functions]
this.init = function (data) {
  // init, Used to do stuff such as overriding things
};
this.onClientAdd = function(data) {
    var player = data.player
    if (player.isBot) return

    data.log("A player with an ip of " + player.socket.remoteAddress + " joined")
    return true;
}
module.exports = this; // dont touch
