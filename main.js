function doubleAll(arr) {

    for (i = 0; i < arr.length; i++){
      arr[i] = arr[i] * 2;
    }
    return arr;
}

function absoluteValues(arr) {
  for (i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = arr[i] * -1;
    }
  }
  return arr;
}

function yelledGreetings(arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + '!';
  }
  return arr;
}

function changeToInitials(arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0] + arr[i][arr[i].indexOf(' ') + 1];
  }
  return arr;
}

function doubleOdd(arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1){
        arr[i] = arr[i] * 2;
      }
    }
    return arr
}

function upperCaseFirstLetters(arr) {

  for (let i = 0; i < arr.length; i++){
    let str = arr[i];
    for (let ii = 0; ii < arr[i].length; ii++){
      newStr = ''
      if (ii === 0 || str[ii - 1] === ' '){
        newStr = newStr + str[ii].toUpperCase();
      } else {
        newStr = newStr + str[ii];
      }
    }
  return arr;
  }
}


function add1ToLeft(arr) {
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      arr[i] = Number(`1${arr[i]}`);
    } else {
      const flip = arr[i] * -1;
      arr[i] = Number(`1${flip}`) * -1;
    }
  }
  return arr;  
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}