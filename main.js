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
    let initial = arr[i][0].toUpperCase();
    let restOfName = arr[i].slice(1).toLowerCase();
    arr[i] = initial + restOfName;
  }
  return arr;
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