function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return true;
  } else {
    return false;
  }
}

function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return true;
  } else {
    return false;
  }
}

function theLargestNum(a, b, c) {
  let num = ""
  if (a > b && a > c) {
    num = ["1st", a];
  }
  else if (b > a && b > c) {
    num = ["2nd", b];
  }
  else if (c > a && c > b) {
    num = ["3rd", c];
  }
  return num;
}

function isTwoEqualNumb(a, b, c) {
  let num = "";
  if ((a === b) && (a != c)) {
    num = ["1st and 2nd", a];
  }
  else if ((b === c) && (a != c)) {
    num = ["2nd and 3rd", b];
  }
  else if ((a === c) && (a != b)) {
    num = ["1st and 3rd", a];
  }
  return num;
}

export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);

  if (theLargestNum(a, b, c) != "") {
    return (`The ${theLargestNum(a, b, c)[0]} number is largest and equal: ${theLargestNum(a, b, c)[1]}`);
  } else if (isTwoEqualNumb(a, b, c) != "") {
    return (`The ${isTwoEqualNumb(a, b, c)[0]} numbers are equal and amount is: ${isTwoEqualNumb(a, b, c)[1]}`);
  }
  else {
    return "All three numbers are equal. And equal: " + a;
  }
}


//   if (isATheLargest(a, b, c)) {
//     return "The 1st number is largest and equal: " + a;
//   } else if (isBTheLargest(a, b, c)) {
//     return "The 2nd number is largest and equal: " + b;
//   } else if (isCTheLargest(a, b, c)) {
//     return "The 3rd number is largest and equal: " + c;
//   } else if (isTwoEqualNumb(a, b, c) != "") {
//     return (`The ${isTwoEqualNumb(a, b, c)[0]} numbers are equal and amount is: ${isTwoEqualNumb(a, b, c)[1]}`);
//   }
//   else {
//     return "All three numbers are equal. And equal: " + a;
//   }
// }
console.log(TheLargestNumber(7.7, '7.7', '7.6'));
