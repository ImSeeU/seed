console.log('jello');

  var Tesseract = require('tesseract.js')
  const path = require("path");
  var imagePath= path.join(__dirname,"bond.jpg");
  var fs = require('fs');
  
  Tesseract.create({
    langPath: path.join(__dirname, "langs")
  }).recognize(imagePath, {lang: "eng"}) // Or whichever lang you have downloaded to langs/
      .then((result) => fs.writeFile("test.txt", result.text, function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
  }));
      
  
  
      
      