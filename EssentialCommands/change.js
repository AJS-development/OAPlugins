module.exports = function(str,main,log) {
	str = str.split(" ");
	if(str.length != 3){log("change [name] [value]")}
	if(str[1] && main.dataService.config[str[1]]){
		if(!isNaN(str[2])){
			main.dataService.config[str[1]] = str[3];
			log(str[1] + " was successfully changed to " + str[2]);
		}else{
			log("Invalid config value");
		}
	}else{
		log("Config name is not valid, or doesn't exist!");
	}

}
