'use strict'

const mainArray = [4, 4, 3, 2, 2, 2, 6, 6, 7, 3];
const varialLine = mainArray => console.log( 'варіаційний ряд ' + mainArray.sort() ); varialLine(mainArray);
const countEl = mainArray => console.log( 'розмах ' + mainArray.length ); countEl(mainArray);
const mediana = () => console.log('медіана ' + mainArray.sort()[Math.floor(mainArray.length/2)]); mediana();
const vibMedium = () => console.log('середнє значення ' + mainArray.reduce((sum, current) => sum + current)/mainArray.length); vibMedium();
(function staticF() {
  const count = {}; 
  mainArray.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
  console.log(count);
}());

  

 

                    
                    
                    
                    

