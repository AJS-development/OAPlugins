module.exports = function(str,main,log) {
	function genSpace(i,r = ""){
		for(var o = 0; o < i; o++){r += " ";} return r;
	}
	log("------------------------------------------------------------");
	for(var i in main.dataService.config){
		log(i + genSpace(25 - i.length) + "=" + genSpace(5) + main.dataService.config[i]);
	}
  log("------------------------------------------------------------");
}
