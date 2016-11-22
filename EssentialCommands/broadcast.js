module.exports = function(str,main,log) {
         str = str.split(" ")

var msg = str.slice(1).join(" ")
if (!msg) {
    log("Please provide the msg")
    return
}
    for (var i in main.clients) {
        main.clients[i].msg(msg)
    }
    log("Broadcast " + msg + " to " + main.clients.length + " clients")
}