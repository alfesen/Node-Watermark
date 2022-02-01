const Jimp = require('jimp');

const addTextWatermarkToImage = async function(inputFile, outputFile, text) {
  const image = await Jimp.read(inputFile);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  image.print(font, 10, 10, text);
  await image.quality(100).writeAsync(outputFile);
};

addTextWatermarkToImage('./fish.jpg', './fish-watermark.jpg', 'tekst na obrazku');