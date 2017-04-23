module.exports = function(str,main,log) {
	var genSpace = function(e){
		var r = "";
		for(var i = 0; i < e; i++) r += " ";
		return r;
	}
	log("------------------------------------------------------------");
	for(var i in main.dataService.config){
		if(!main.dataService.config[i]) continue;
		log(i + genSpace(25 - i.length) + "=" + genSpace(5) + main.dataService.config[i]);
	}
	log("------------------------------------------------------------");
}
