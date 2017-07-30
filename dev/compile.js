var fs = require('fs')
var crypto = require('crypto')
module.exports = function() {   

console.log("[Console] Compiling files.json...");
       
var walk = function(base,dir, done) {
  var results = [];
    var dir = dir || ""
  fs.readdir(base + dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(base + file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(base,file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          if (file.indexOf('.mp3') == -1 && file.indexOf('/plugins/') == -1 && file.indexOf('.txt') == -1 && file.indexOf('.ini') == -1 && file.indexOf('filesTemp.json') == -1 && file.indexOf('devFiles.json') == -1 && file.indexOf('.log') == -1 && file.indexOf('.git') == -1 && file.indexOf('.DS_Store') == -1 && file.indexOf('node_modules') == -1 && file.indexOf('UDTA') == -1 && files.indexOf('modules.json') == -1) {
          results.push(file);
            }
          next();
        }
      });
    })();
  });
};
walk(__dirname + '/../../..',"",function(err, results) {
  if (err) throw err;
  console.log("[Console] Scanned src...");
  console.log(results);
  var j = 0;
  var jso = [];
  for (var i in results) {
      var r = results[i]
      var ind = r.lastIndexOf("/");
      var myString = r;
      if( myString.charAt( 0 ) === '.' ) myString = myString.slice( 1 );
     
      var current_date = (new Date()).valueOf().toString();
var random = Math.random().toString();
var hash = crypto.createHash('sha1').update(current_date + random).digest('hex');
      var pj = {
      hash: hash,
      url: myString.replace(/ /g,"%20"),
      src: r,
      name: r.slice(ind + 1),
  };
      jso.push(pj);
      
  }
 
  
  var dat = JSON.stringify(jso, null, 2);
  console.log("[Console] Finished and file is located at devFiles.json");
  fs.writeFileSync('devFiles.json', dat);
})
     }
     
