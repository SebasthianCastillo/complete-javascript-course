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

// for more info - mdn operator precedence
//---------------------------------------------


const averageAge = (ageSeba + ageVale) / 2;
cl(averageAge);
*/
// Challenge 1#

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const markHeight = 1.69;
const johnHeight = 1.95;
const markMass = 78;
const johnMass = 92;

function BMI(height, mass) {
    rsl = mass / height ** 2;
    return rsl;
}
markBMI = BMI(markHeight, markMass);
johnBMI = BMI(johnHeight, johnMass);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);



const birthYear = 1993;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Challenge 2#
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

😎


if (markHigherBMI) {
    console.log(`Marks BMI: ${markBMI} is higher than john's BMI: ${johnBMI}`);
} else {
    console.log(`john's BMI: ${johnBMI} is higher than
    Marks BMI: ${markBMI} `);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

const arrayDolphins = [91, 88, 106];
const arrayKoalas = [95, 87, 107];

function ArrayAvg(myArray) {
    let i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ += myArray[i++];
    }
    return summ / ArrayLen;
}

const avgDolphins = ArrayAvg(arrayDolphins);
const avgKoalas = ArrayAvg(arrayKoalas);

console.log(avgDolphins);
console.log(avgKoalas);

if ((avgDolphins > avgKoalas) && (avgDolphins > 100)) {
    console.log(`dolphins wins`);
} else if ((avgDolphins < avgKoalas) && (avgKoalas > 100)) {
    console.log(`koalas wins`);
} else {
    console.log(`draw`);
}

if (avgDolphins > avgKoalas) {
    if (avgDolphins >= 100) {
        console.log(`dolphins wins the trophy`);

    } else {
        console.log(`dolphins wins but not enough points for the trophy`)
    }

} else if (avgDolphins < avgKoalas) {
    if (avgKoalas >= 100) {
        console.log(`koalas wins the trophy`);

    } else {
        console.log(`koalas wins but not enough points for the trophy`)
    }


} else if (avgDolphins === avgKoalas) console.log(`draw`);

const key = 'monday';

switch (key) {
    case 'monday':
        console.log(`lunes`);
        break;
    case 'tuesday':
        console.log(`martes`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`miercoles, jueves`)
        break;
    default:
        console.log(`viernes`)
        break;
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

*/
const age = 19;
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(`can drink ${drink} :)`);


let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the tip is : ${tip} total : ${bill + tip}`);


