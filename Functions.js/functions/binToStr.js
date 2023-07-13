function binToStr(binary) {
    let result = '';
    for (let i = 0; i < binary.length; i += 8) {
      const binaryChunk = binary.substr(i, 8);
      const decimalValue = parseInt(binaryChunk, 2);
      const char = String.fromCharCode(decimalValue);
      result += char;
    }
    return result;
}

module.exports = binToStr;