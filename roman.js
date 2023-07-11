function convertToRoman(num) {

//create a function to return a final numeral
function modifyArray(arr, result){
  arr.push(result);
  return arr.join("");
}

//define Arabic to Roman numeral translation
  let str = num.toString();
  let one = "I";
  let two = "II";
  let three = "III"
  let four = "IV";
  let five = "V";
  let six = "VI";
  let seven = "VII";
  let eight = "VIII";
  let nine = "IX";
  let ten = "X";
  let twenty = "XX";
  let thirty ="XXX";
  let forty = "XL";
  let fifty = "L";
  let sixty = "LX";
  let seventy = "LXX";
  let eighty = "LXXX";
  let ninety = "XC";
  let hundred = "C";
  let twoHundred = "CC";
  let threeHundred = "CCC";
  let fourHundred = "CD";
  let fiveHundred = "D";
  let sixHundred = "DC";
  let sevenHundred = "DCC";
  let eightHundred = "DCCC";
  let nineHundred = "CM";
  let thousand = "M";
  let twoThousand = "MM";
  let threeThousand = "MMM";
  let newArray = [];

  //create a function to convert single digits
  function convertSingleNumeral(x){
    let tempArray = [];
    switch(x){
    case 1: tempArray.push(one);
    break;
    case 2: tempArray.push(two);
    break;
    case 3: tempArray.push(three);
    break;
    case 4: tempArray.push(four);
    break;
    case 5: tempArray.push(five);
    break;
    case 6: tempArray.push(six);
    break;
    case 7: tempArray.push(seven);
    break;
    case 8: tempArray.push(eight);
    break;
    case 9: tempArray.push(nine);
    break;
  }
  return tempArray;
  }

//create a function to convert double-digit numbers
  function convertDoubleDigit(x){
    let anotherArray = [];
    var digit = (''+x)[0];
    if (digit == 1){
      anotherArray.push(ten);
      let y = x - 10;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 2){
      anotherArray.push(twenty);
      let y = x - 20;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 3){
      anotherArray.push(thirty);
      let y = x - 30;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 4){
      anotherArray.push(forty);
      let y = x - 40;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 5){
      anotherArray.push(fifty);
      let y = x - 50;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 6){
      anotherArray.push(sixty);
      let y = x - 60;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 7){
      anotherArray.push(seventy);
      let y = x - 70;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 8){
      anotherArray.push(eighty);
      let y = x - 80;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
    else if (digit == 9){
      anotherArray.push(ninety);
      let y = x - 90;
      let result = convertSingleNumeral(y);
      return modifyArray(anotherArray, result);
    }
  return anotherArray;
  }

//create a function to convert triple digits
function convertTripleDigit(x){
    let yetAnotherArray = [];
    var digit = (''+x)[0];
    if (digit == 1){
      yetAnotherArray.push(hundred);
      let y = x - 100;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 2){
      yetAnotherArray.push(twoHundred);
      let y = x - 200;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 3){
      yetAnotherArray.push(threeHundred);
      let y = x - 300;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 4){
      yetAnotherArray.push(fourHundred);
      let y = x - 400;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 5){
      yetAnotherArray.push(fiveHundred);
      let y = x - 500;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 6){
      yetAnotherArray.push(sixHundred);
      let y = x - 600;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 7){
      yetAnotherArray.push(sevenHundred);
      let y = x - 700;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 8){
      yetAnotherArray.push(eightHundred);
      let y = x - 800;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
    else if (digit == 9){
      yetAnotherArray.push(nineHundred);
      let y = x - 900;
      let secondDigits = convertDoubleDigit(y);
      return modifyArray(yetAnotherArray, secondDigits);
  }
  return yetAnotherArray;
  }

  //create a function to flatten arrays
  function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        // and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
        }
        else {
          // Copy contents that are not arrays
          flattenedArray.push(arr[i]);
          }
          }
          return flattenedArray;
          };



//begin process
  //if the Arabic numeral is a single digit
  if (str.length === 1){
    if (parseInt(str) === 1) {
      return modifyArray(newArray, one);
    }
    else if (parseInt(str) === 4) {
      return modifyArray(newArray, four);
    }
    else if (parseInt(str) === 5){
      return modifyArray(newArray, five);
    }
    else if (parseInt(str) === 9){
      return modifyArray(newArray, nine);
    }
    else switch(parseInt(str)) {
      case 2: return modifyArray(newArray, two);
      break;
      case 3: return modifyArray(newArray, three);
      break;
      case 6: return modifyArray(newArray, six);
      break;
      case 7: return modifyArray(newArray, seven);
      break;
      case 8: return modifyArray(newArray, eight);
      break;
      //return newArray;
    }
    return newArray;
  }

//if the Arabic numeral is two-digit
  else if (str.length === 2){
    if (parseInt(str[0]) === 1){
      newArray.push(ten);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 2){
      newArray.push(twenty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 3){
      newArray.push(thirty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
  else if (parseInt(str[0]) === 4){
      newArray.push(forty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 5){
      newArray.push(fifty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 6){
      newArray.push(sixty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 7){
      newArray.push(seventy);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 8){
      newArray.push(eighty);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    else if (parseInt(str[0]) === 9){
      newArray.push(ninety);
      let result = convertSingleNumeral(parseInt(str[1]));
      return modifyArray(newArray, result);
  }
    return newArray;
  }

//if the Arabic numeral is three-digit
else if (str.length === 3){
  if (parseInt(str[0]) === 1){
    newArray.push(hundred);
      let digitToProcess = parseInt(str) - 100;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 2){
    newArray.push(twoHundred);
      let digitToProcess = parseInt(str) - 200;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 3){
    newArray.push(threeHundred);
      let digitToProcess = parseInt(str) - 300;
      if (digitToProcess.toString().length <=1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 4){
    newArray.push(fourHundred);
      let digitToProcess = parseInt(str) - 400;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 5){
    newArray.push(fiveHundred);
      let digitToProcess = parseInt(str) - 500;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 6){
    newArray.push(sixHundred);
      let digitToProcess = parseInt(str) - 600;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
   else if (parseInt(str[0]) === 7){
    newArray.push(sevenHundred);
      let digitToProcess = parseInt(str) - 700;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 8){
    newArray.push(eightHundred);
      let digitToProcess = parseInt(str) - 800;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
  else if (parseInt(str[0]) === 9){
    newArray.push(nineHundred);
      let digitToProcess = parseInt(str) - 900;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else
{        let secondDigits = convertDoubleDigit(digitToProcess);
      return modifyArray(newArray, secondDigits);
}
  }
    return newArray;
  }

//if the Arabic numeral is four-digit
else if (str.length === 4){
  if (parseInt(str[0]) === 1){
      newArray.push(thousand);
      let digitToProcess = parseInt(str) - 1000;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else if (digitToProcess.toString().length == 2){
        let result = convertDoubleDigit(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else {
        let thirdDigits = convertTripleDigit(digitToProcess);
      return modifyArray(newArray, thirdDigits);
  }
  }
  else if (parseInt(str[0]) === 2){
    newArray.push(twoThousand);
      let digitToProcess = parseInt(str) - 2000;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else if (digitToProcess.toString().length == 2){
        let result = convertDoubleDigit(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else {
        let thirdDigits = convertTripleDigit(digitToProcess);
      return modifyArray(newArray, thirdDigits);
  }
  }
  else if (parseInt(str[0]) === 3){
    newArray.push(threeThousand);
      let digitToProcess = parseInt(str) - 3000;
      if (digitToProcess.toString().length <= 1){
        let result = convertSingleNumeral(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else if (digitToProcess.toString().length == 2){
        let result = convertDoubleDigit(digitToProcess);
        newArray.push(result);
        let finalArray = steamrollArray(newArray);
        return finalArray.join("");
      }
      else {
        let thirdDigits = convertTripleDigit(digitToProcess);
      return modifyArray(newArray, thirdDigits);
  }
  }
    return newArray;
  }
  }

console.log(convertToRoman(1023));
