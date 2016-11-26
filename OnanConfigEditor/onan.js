

module.exports = function(str,main,log) {
    
    str = str.split(" ")
    
    var file = str[1]
    if (!file) return log("Please specify a settings file")
    file = Util.dirEscape(__dirname + "/../../settings",file,'ini')
    if (!file) return log("That is not a config file!")
    log("Loading editor for file " + file)
    log("Press Esc to save or exit")
    main.interface = false;
    setTimeout(function() {
        var cli = require('cli-gui')
var Cli = new cli()
if (!Cli.versCode || Cli.versCode < 258) {
    main.interface = true
    return log("Please update your npm modules. Do npm install")
}
    Cli.editor(file,function() {
    
        main.interface = true;
        Cli.stop()
    process.stdin.resume()
    })
    },1500)
    
    
    
}
