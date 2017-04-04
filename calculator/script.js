'use strict'
let one = () => document.getElementById("mainForm").value += 1,
    twoo = () => document.getElementById("mainForm").value += 2,
    three = () => document.getElementById("mainForm").value += 3,
    four = () => document.getElementById("mainForm").value += 4,
    five = () => document.getElementById("mainForm").value += 5,
    six = () => document.getElementById("mainForm").value += 6,
    seven = () => document.getElementById("mainForm").value += 7,
    eight = () => document.getElementById("mainForm").value += 8,
    nine = () => document.getElementById("mainForm").value += 9,
    zero = () => document.getElementById("mainForm").value += 0,
    result = () => zzz(),
    
                        /*operatoin*/
    
    minus = () => document.getElementById("mainForm").value += '-',
    plus = () => document.getElementById("mainForm").value += '+',
    multiplication = () => document.getElementById("mainForm").value += '*',
    divizion = () => document.getElementById("mainForm").value += '/',
    clearing = () => document.getElementById("mainForm").value = ' ';
    
                        /*main Math Function*/

let zzz = () => document.getElementById("mainForm").value = eval(document.getElementById("mainForm").value );


function nameF(arg1, arg2) {
    return console.log( arg1+arg2);
}
nameF(4, 6);





