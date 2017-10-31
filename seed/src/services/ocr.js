// Assume we've got an image loaded

console.log('jello');

  var Tesseract = require('tesseract.js')
  const path = require("path");
  var imagePath= path.join(__dirname,"bond.jpg");

  Tesseract.create({
    langPath: path.join(__dirname, "langs")
  }).recognize(imagePath, {lang: "eng"}) // Or whichever lang you have downloaded to langs/
      .then((result) => console.log(result.text));