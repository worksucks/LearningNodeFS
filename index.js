


var fs = require('fs');


fs.readdir('./node_modules', 'utf-8', (err, files) => {
    files.forEach(file => {
      console.log(file);
      fs.appendFile('./tekst.txt', file , function(err) {
      if (err) throw err;
      });
    });
});
