module.exports = function(str,main,log) {
    var str = str.split(" ")
    var chatname = str[1]
    if (!chatname) {
        return log("Please provide the player's chatname!")
    }
    var count = 0;
for (var i = 0; i < main.chat.length; i ++) {
    var ch = main.chat[i]
    if (ch.name != chatname) continue;
    for (var j in main.clients) {
        main.clients[j].socket.emit('chat',{remove:ch.id})
    }
    
        main.chat.splice(i,1)
        i --;
    count ++;
}
    log("Removed " + count + " messages by " + chatname)
}