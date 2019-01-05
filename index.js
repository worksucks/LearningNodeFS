//var fs = require('fs');
//var StatMode = require('stat-mode');

//fs.stat('./cat.jpg', function(err, stats) {
//    var statMode = new StatMode(stats);
//    console.log(statMode.toString());
//});


var fs = require('fs');
var colors = require('colors');

fs.readdir('./node_modules', 'utf-8', (err, files) => {
    files.forEach(file => {
      console.log(file);
      fs.appendFile('./tekst.txt', file , function(err) {
      if (err) throw err;
      });
    });
});
