/*
rainbow is to make your text more colorful.
*/

function rainbow(text) {
    const primaryColors = [
      "\x1b[31m",
      "\x1b[33m",
      "\x1b[32m",
      "\x1b[34m"
    ];
    
    let rainbowText = "";
    for (let i = 0; i < text.length; i++) {
      const colorIndex = i % primaryColors.length;
      const colorCode = primaryColors[colorIndex];
      rainbowText += `${colorCode}${text[i]}`;
    }
    
    return `${rainbowText}\x1b[0m`;
}
  
module.exports = rainbow;