


var fs = require('fs');

fs.readdir('./node_modules', 'utf-8', (err, files) => {
    files.forEach(file => {
      if (err) throw err;
      console.log(file);
      fs.appendFile('./tekst.txt', file , function(err) {

      });
    });
});
