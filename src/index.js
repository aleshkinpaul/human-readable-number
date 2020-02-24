module.exports = function toReadable (number) {
  let resultStr = "";

  if (number === 0) return numberName(0);
  if (Math.floor(number / 100) > 0) {
    resultStr += `${numberName(Math.floor(number / 100))} hundred`;
    number -= Math.floor(number / 100) * 100;
  }
  if (Math.floor(number / 10) > 1) {
      resultStr !== "" ? resultStr += " " : "";
      resultStr += `${numberName(number - number % 10)}`;
      number -= Math.floor(number / 10) * 10;
  }
  if (Math.floor(number / 10) === 1) {
    resultStr !== "" ? resultStr += " " : "";
    resultStr += `${numberName(number)}`;
    number = 0;
  }
  if (number > 0) {
    resultStr !== "" ? resultStr += " " : "";
    resultStr += `${numberName(number % 10)}`;
  }

  return resultStr;
}

function numberName(num) {
  switch(num) {
    case(0): return "zero";
    case(1): return "one";
    case(2): return "two";
    case(3): return "three";
    case(4): return "four";
    case(5): return "five";
    case(6): return "six";
    case(7): return "seven";
    case(8): return "eight";
    case(9): return "nine";
    case(10): return "ten";
    case(11): return "eleven";
    case(12): return "twelve";
    case(13): return "thirteen";
    case(14): return "fourteen";
    case(15): return "fifteen";
    case(16): return "sixteen";
    case(17): return "seventeen";
    case(18): return "eighteen";
    case(19): return "nineteen";
    case(20): return "twenty";
    case(30): return "thirty";
    case(40): return "forty";
    case(50): return "fifty";
    case(60): return "sixty";
    case(70): return "seventy";
    case(80): return "eighty";
    case(90): return "ninety";
  }
}
