module.exports = function(str,main,log) {
    var fill = function(a,num,char) {
        char = char || " "
        num -= a.length
        for (var i = 0; i < num; i ++) {
            a += char
        }
        return a
    }
  
        // 50
        log("----------------------------------Chat Log-----------------------------------")
        log("| Id  | ChatName          | msg                                              |")
       for (var i = 0; i < main.chat.length; i ++) {
        var ch = main.chat[i]

          
            var chatname = ch.name
          
          log("|" + fill(ch.id.toString(),5) + "|" + fill(chatname,19) + "|" + fill(ch.msg,50) + "|")  
        }
        
  
  
}