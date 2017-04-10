'use strict'

const mainArray = [4, 4, 3, 2, 2, 2, 6, 6, 2, 2, 2, 7, 3];
const varialLine = mainArray => console.log( 'варіаційний ряд ' + mainArray.sort() ); varialLine(mainArray);
const countEl = mainArray => console.log( 'розмах ' + mainArray.length ); countEl(mainArray);
const mediana = () => console.log('медіана ' + mainArray.sort()[Math.floor(mainArray.length/2)]); mediana();
const vibMedium = () => console.log('середнє значення ' + mainArray.reduce((sum, current) => sum + current)/mainArray.length); vibMedium();
function staticF() {
  const count = {}; 
  return ( function() {
    mainArray.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
    console.log(count);
    let minKey = Object.keys(count)[0];
    Object.keys(count).forEach(function(key) {
        if(minKey < key) { 
           minKey = key;
        }
    });
////
    
    for(let i = 0; i < Object.keys(count).length; i++) {
      let minVal = Object.keys(count)[0];
      let valСurrent = Object.keys(count)[i];
      if(count[minVal] < count[valСurrent]) {
        minVal = valСurrent;
      }
      console.log(count[ minVal ]);
    }  
  }());
}staticF();


                    
                    
                    
                    

