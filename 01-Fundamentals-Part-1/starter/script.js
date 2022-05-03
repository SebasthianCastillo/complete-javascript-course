/*let js = 'amazing';
//if (js === 'amazing') alert('js is fun');

console.log(40 + 8 + 6);

let firstName = "Jonas";
console.log(firstName);

//boolean value
let isFun = true;
console.log(isFun);
console.log(typeof isFun);

isFun = 'yes';
console.log(typeof isFun);

//undefined value
let year;
console.log(typeof year);

//number value
year = 1993;
console.log(typeof year);
*/
function cl(o) {
    console.log(o);
}
const now = 2022;
const ageSeba = now - 1993;
const ageVale = now - 1996;
console.log(ageSeba, ageVale);

console.log(ageSeba * 2, ageVale / 2, 2 ** 3);

let firstName = "bilbo";
let lastName = "bolson";

cl(firstName + ' ' + lastName);

// Assignment Operators (+, -, *, =,) etc
let x = 10 + 5; // 15 
x += 10; // x = x + 10
x *= 4;
x++;
x--;
cl(x);

// Comparations operators
cl(ageSeba > ageVale);
cl(ageVale >= 27);




