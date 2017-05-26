const mainArray = [5, 6, 5, 5, 5, 2, 2, 5, 6, 8, 1, 5, 2, 5, 5, 1, 5, 6, 2, 5, 5, 1, 2, 6, 5];
//const mainArray = [186.40,185.075,183.70,181.50,180.60,179.40,178.50,177.35,177.30,176.95,176.90,176.30,175.95,175.95,175.85,175.45,175.35,175.30,175.30,175275,175.25,175.20,175.00,174.95,174.65,174.65,174.55,174.50,174.30,174.25,174.00,173.75,173.55,173.45,173.40,173.35,173.35,173.30,173.30,173.10,172.95,172.70,172.55,172.50,172.30,172.30,172.20,171.85,171.775,171.75,171.55,171.45,171.40,171.00,170.85,170.85,170.70,170.60,163.10,162.85,160.15,160.10,157.55,156.15,155.15,155.10,153.50,153.45,152.50,152.30,152.25,151.70,149.80,148.95,148.50,147.95,146.15,146.05,144.85,144.75,143.90,141.85,140.45,140.25,139.60,139.55,139.20,138.95,138.55,137.70,137.50,137.30,137.05,133.35,130.20,129.60,128.50,127.60,127.50,126.55,126.05,124.20,122.30,121.80,120.75,120.70,119.05,111.90];
/*
const varialLine = mainArray => console.log( 'варіаційний ряд ' + mainArray.sort() ); varialLine(mainArray);
const countEl = mainArray => console.log( 'розмах ' + mainArray.length ); countEl(mainArray);
const mediana = () => console.log('медіана ' + mainArray.sort()[Math.floor(mainArray.length/2)]); mediana();
const vibMedium = () => console.log('середнє значення ' + mainArray.reduce((sum, current) => sum + current)/mainArray.length); vibMedium();
const count = {};
let minKey = Object.keys(count)[0];
mainArray.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
console.log(count);
Object.keys(count).forEach(function(key) {
    if(minKey < key) {minKey = key}
});
let minVal = Object.keys(count)[0];
for(let i = 0; i < Object.keys(count).length; i++) {
  let valСurrent = Object.keys(count)[i];
  if(count[minVal] < count[valСurrent]) {
    minVal = valСurrent;
  }
}
let maxVal = count[minVal];
for(let key in count) {
    if(count[key] === maxVal) {
        console.log('мода ' + key);
    }
}



let bold = function(callback, arr, i = 0) {
    if(arr.length > i) {
        let elem = arr[i];
        return callback(elem);
        bold(callback, arr, ++i);
       }
}
console.log(bold(function(elem){return elem + 1}, mainArray));



let arr = [[5, 54, 6, 4], [5, 54, 6, 4],[5, 54, 6, 4]];
let newArr = arr.reduce(function(a, curr, currInd, arr){
    return a.concat(curr);
});
console.log(newArr);
let glob = 1;
function callF() {
}
let globalArray = [2, 5, 6, 8, 1, 2, 4, 7, 9];


globalArray.map(function(cuur, ind, array) {


});


let sumArr = mainArray.reduce(function(sum, curr, ind, array) {
    return sum + curr;
});
console.log(sumArr/mainArray.length);



function mainF(name, lastName) {
    return console.log(name + ' ' + lastName);
}
setTimeout(mainF, 3000, 'Igor', 'Procopich');


let text = document.getElementById('simple');
let butt = document.getElementById('butt');
let addClass = function() {
	text.classList.add("ccc");
}
butt.addEventListener('click', addClass, false);


let overArg = function(callback, a, b, ...argum) {
	let over = argum.map(function(curr, ind, arr) {
		return curr + 1;
	});
	callback(over);
	return over;
}

overArg(function(over) {return over.forEach(function(a, b, c) {
	return console.log(a - 3);
})}, 2, 3, 4, 4, 4);
*/


