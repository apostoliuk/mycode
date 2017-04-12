'use strict'

const mainArray = [];
const varialLine = mainArray => console.log( 'варіаційний ряд ' + mainArray.sort() ); varialLine(mainArray);
const countEl = mainArray => console.log( 'розмах ' + mainArray.length ); countEl(mainArray);
const mediana = () => console.log('медіана ' + mainArray.sort()[Math.floor(mainArray.length/2)]); mediana();
const vibMedium = () => console.log('середнє значення ' + mainArray.reduce((sum, current) => sum + current)/mainArray.length); vibMedium();
const count = {}; 
let minKey = Object.keys(count)[0];
mainArray.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
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

