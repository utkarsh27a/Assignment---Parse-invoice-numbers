function main(data) {
  let converter = {
      ' _ | ||_|': 0,
      '     |  |': 1,
      ' _  _||_ ': 2,
      ' _  _| _|': 3,
      '   |_|  |': 4,
      ' _ |_  _|': 5,
      ' _ |_ |_|': 6,
      ' _   |  |': 7,
      ' _ |_||_|': 8,
      ' _ |_| _|': 9,
  };

  let numberOfLines = data.split('\n').filter(Boolean);
  let numbers = [];
  for (let i = 0; i < numberOfLines.length; i += 3) {
      let number = 0;
      for (let x = 0; x < 27; x += 3) {
        let key = numberOfLines[i].substr(x, 3) + numberOfLines[i + 1].substr(x, 3) + numberOfLines[i + 2].substr(x, 3);
        number = number * 10 + converter[key];
      }
      numbers.push(number);
  }
  return numbers;
}

function checker(convertedNumbers, outputFileData) {
  let numberFromFile = outputFileData.split('\n').filter(Boolean), notEqual = false;

  for (var i = 0; i < convertedNumbers.length; i++) {
    if (numberFromFile[i] != convertedNumbers[i]) {
      console.log('Error: Number Not equal: ', numberFromFile[i], convertedNumbers[i]);
      notEqual = true;
    }
  }
  if (!notEqual) {
    console.log('------------------ All results are correct --------------------');
  }
}

module.exports = {
	main,
	checker
};
