function doubleAll(arr) {
  let newArr = [];
    for (i = 0; i < arr.length; i++){
      newArr.push(arr[i] * 2);
    }
    return newArr;
}

function absoluteValues(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      newArr.push(arr[i] * -1);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function yelledGreetings(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] + '!');
  }
  return newArr;
}

function changeToInitials(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i][0] + arr[i][arr[i].indexOf(' ') + 1]);
  }
  return newArr;
}

function doubleOdd(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1){
      newArr.push(arr[i] * 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function upperCaseFirstLetters(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let initial = arr[i][0].toUpperCase();
    let restOfName = arr[i].slice(1).toLowerCase();
    newArr.push(initial + restOfName);
  }
  return newArr;
}


function add1ToLeft(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      newArr.push(Number(`1${arr[i]}`));
    } else {
      const flip = arr[i] * -1;
      newArr.push(Number(`1${flip}`) * -1);
    }
  }
  return newArr;  
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