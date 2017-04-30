'use strict'

let obg = {
  a: 'one',
  b: 'two',
  fun: fun
}

let obj = {
  a: 'onee',
  b: 'twor',
}

function fun() {
  return console.log(this.a, this.b);
}



let twoArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8 ,9]
];
console.log(twoArray);
let newArr = [];
twoArray.map(function(curr, ind) {
  return curr.map(function(curr) { return newArr.push(curr) });
});
console.log( newArr );
