"use strict";
//declaring an array of 0 to 9 in a string format
let singleDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
//declaring an array of 10 to 19 in a string format
let tens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
//declaring an array of 20 to 90 in a string format
let twentyToNinety = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let hundred = "hundred";
//declaring an array of 1000 to 999,999,999,999,999 in a string format
let thounsandToTrillion = ["thousand", "million", "billion", "trillion"];
//declaring string that will be the output
let output = "";
//function that will take in a number and convert said number to a string with the above letiables
const sayNumber = (num) => {
  let input = num.toString();
  let digitArray,
    firstDigit,
    secondDigit,
    thirdDigit,
    fourthDigit,
    fithDigit,
    sixthDigit,
    lastDigit;
  switch (input.length) {
    //case 1 checks for single digit inputs
    case 1:
      output = singleDigits[num];
      break;
    case 2:
      //case 2 checks for double digit inputs
      digitArray = input.split("");
      //getting first digit and converting to number
      firstDigit = Number(digitArray.shift());
      //getting second digit and converting to number
      lastDigit = Number(digitArray.pop());
      if (firstDigit === 1) {
        output = tens[num - 10];
      } else if (firstDigit >= 2 && lastDigit > 0) {
        //using twentyToNinety array
        output = twentyToNinety[firstDigit - 2] + " " + singleDigits[lastDigit];
      } else if (firstDigit >= 2 && lastDigit === 0) {
        output = twentyToNinety[firstDigit - 2];
      }
      break;
    case 3:
      //case 3 checks for 3 digit inputs
      digitArray = input.split("");
      //getting 2nd digit and converting to number
      secondDigit = Number(digitArray.splice(1, 1));
      //getting first digit and converting to number
      firstDigit = Number(digitArray.shift());
      //getting last digit and converting to number
      lastDigit = Number(digitArray.pop());
      //checking the 1st digit, between 100 and 900
      if (firstDigit >= 1 && secondDigit === 0 && lastDigit === 0) {
        output = singleDigits[firstDigit] + " " + hundred;
      }
      //checking numbers between 110 to 119
      else if (firstDigit >= 1 && secondDigit === 1 && lastDigit >= 0) {
        output =
          singleDigits[firstDigit] + " " + hundred + ", and " + tens[lastDigit];
      }
      //checking numbers between 120 to 990
      else if (firstDigit >= 1 && secondDigit > 1 && lastDigit === 0) {
        output =
          singleDigits[firstDigit] +
          " " +
          hundred +
          ", and " +
          twentyToNinety[secondDigit - 2];
      }
      //check numbers between 121 to 999
      else {
        output =
          singleDigits[firstDigit] +
          " " +
          hundred +
          ", and " +
          twentyToNinety[secondDigit - 2] +
          " " +
          singleDigits[lastDigit];
      }
      break;
    case 4:
      digitArray = input.split("");
      //getting first digit and converting to number
      firstDigit = Number(digitArray.shift());
      //getting 2nd digit and converting to number
      secondDigit = Number(digitArray.shift());
      // //3rd digit
      thirdDigit = Number(digitArray.shift());
      //getting last digit and converting to number
      lastDigit = Number(digitArray.pop());
      //checking numbers from 1000 to 9000
      if (
        firstDigit >= 1 &&
        secondDigit === 0 &&
        thirdDigit === 0 &&
        lastDigit === 0
      ) {
        output = singleDigits[firstDigit] + " " + thounsandToTrillion[0];
      }
      //checking numbers from 1010 and 9019
      else if (
        firstDigit >= 1 &&
        secondDigit === 0 &&
        thirdDigit === 1 &&
        lastDigit >= 0
      ) {
        output =
          singleDigits[firstDigit] +
          " " +
          thounsandToTrillion[0] +
          ", and " +
          tens[lastDigit];
      }
      //numbers between 1020 to 9099
      else if (thirdDigit > 1 && lastDigit === 0) {
        output =
          singleDigits[firstDigit] +
          " " +
          thounsandToTrillion[0] +
          ", and " +
          twentyToNinety[thirdDigit - 2];
      } else if (secondDigit === 0 && lastDigit > 0) {
        output =
          singleDigits[firstDigit] +
          " " +
          thounsandToTrillion[0] +
          ", and " +
          twentyToNinety[thirdDigit - 2] +
          " " +
          singleDigits[lastDigit];
      } else if (secondDigit > 0 && thirdDigit > 1) {
        output =
          singleDigits[firstDigit] +
          " " +
          thounsandToTrillion[0] +
          ", " +
          singleDigits[firstDigit] +
          " " +
          hundred +
          ", and " +
          twentyToNinety[thirdDigit - 2] +
          " " +
          singleDigits[lastDigit];
      } else if (firstDigit > 0 && secondDigit > 0 && thirdDigit === 1) {
        output =
          singleDigits[firstDigit] +
          " " +
          thounsandToTrillion[0] +
          ", " +
          singleDigits[firstDigit] +
          " " +
          hundred +
          ", and " +
          tens[lastDigit];
      }
      break;
    case 5:
      digitArray = input.split("");
      //getting first digit and converting to number
      firstDigit = Number(digitArray.shift());
      //getting 2nd digit and converting to number
      secondDigit = Number(digitArray.shift());
      //3rd digit
      thirdDigit = Number(digitArray.shift());
      fourthDigit = Number(digitArray.shift());
      //getting last digit and converting to number
      lastDigit = Number(digitArray.pop());
      //checking 10 000 to 19 000
      if (
        firstDigit === 1 &&
        secondDigit >= 0 &&
        thirdDigit === 0 &&
        fourthDigit === 0 &&
        lastDigit === 0
      ) {
        output = tens[secondDigit] + " " + thounsandToTrillion[0];
      }
      //checking 20 000 to 90 000
      else if (
        firstDigit > 1 &&
        secondDigit >= 0 &&
        thirdDigit === 0 &&
        fourthDigit === 0 &&
        lastDigit === 0
      ) {
        output = twentyToNinety[firstDigit - 2] + " " + thounsandToTrillion[0];
      }
      //10 000 to 19 919
      else if (
        firstDigit === 1 &&
        secondDigit >= 0 &&
        thirdDigit > 0 &&
        fourthDigit === 1 &&
        lastDigit >= 0
      ) {
        output =
          tens[secondDigit] +
          " " +
          thounsandToTrillion[0] +
          ", " +
          singleDigits[thirdDigit] +
          " " +
          hundred +
          ", and " +
          tens[lastDigit];
      }
      //10000 to 19999
      else if (
        firstDigit === 1 &&
        secondDigit >= 0 &&
        thirdDigit > 0 &&
        fourthDigit > 1 &&
        lastDigit > 0
      ) {
        output =
          tens[secondDigit] +
          " " +
          thounsandToTrillion[0] +
          ", " +
          singleDigits[thirdDigit] +
          " " +
          hundred +
          ", and " +
          twentyToNinety[fourthDigit - 2] +
          " " +
          singleDigits[lastDigit];
      }
      //10000 to 19990
      else if (
        firstDigit === 1 &&
        secondDigit >= 0 &&
        thirdDigit > 0 &&
        fourthDigit > 1 &&
        lastDigit === 0
      ) {
        output =
          tens[secondDigit] +
          " " +
          thounsandToTrillion[0] +
          ", " +
          singleDigits[thirdDigit] +
          " " +
          hundred +
          ", and " +
          twentyToNinety[fourthDigit - 2];
      }
      break;
  }
  return output;
};

module.exports = sayNumber;
