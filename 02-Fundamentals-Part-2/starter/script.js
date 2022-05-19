'use strict';
/*
const calAge = birthYear => 2022 - birthYear;

const yearRetirement = (birthYear, firstName) => {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearRetirement(1993, `Sebasthian`));


// Function Declarations vs. Expressions

// Function declaration

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  
  ///////////////////////////////////////
  // Arrow functions
  
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
  
  
  ///////////////////////////////////////
  // Functions Calling Other Functions
  function cutFruitPieces(fruit) {
    return fruit * 4;
  }
  
  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
  
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));
  

const arrayDolphins = [44, 23, 71];
const arrayKoalas = [65, 54, 49];

const avgTeam = (myArray) => {
    let i = 0, myArrayLe = Array.length, sum = 0;

    while (i < myArrayLe) {
        sum = + myArray[i++];
    }

    return sum / myArrayLe;
}
const scoreDolphins = avgTeam(arrayDolphins);
const scoreKoalas = avgTeam(arrayKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins * 2 < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Draw (${avgKoalas} vs. ${avgDolphins}) `);
    }

}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(500, 100);


// Arrays //

const hobbits = ['frodo', 'bilbo', 'sam'];
console.log(hobbits);
const years = new Array(30, 60, 33);

console.log(hobbits[0]);
console.log(hobbits[1]);

console.log(hobbits.length);
console.log(hobbits[hobbits.length - 1]);

hobbits[2] = 'pippin';
console.log(hobbits);

const jonas = ['seba', 'castillo', 2000 - 1909, hobbits];

console.log(jonas);

// exercise 

const calAge = function (birthYear) {
    return 2037 - birthYear;
}


const hobbits = ['frodo', 'bilbo', 'sam'];

hobbits.push('pippin');//add last
console.log(hobbits);
console.log(hobbits.indexOf('frodo'));
console.log(hobbits.includes('bilbo'));// return true or false

// Coding challenge Arrays

const calcTip = (bill) => {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(tips, total);



const player1 = {
    firstName: 'Seba',
    lastName: 'Hidalgo',
    age: 28,
    job: 'programmer',
    friends: ['kim', 'jimmy', 'max'],
};

console.log(player1);
console.log(player1.firstName);
console.log(player1['lastName']);

const nameKey = 'Name';
console.log(player1['first' + nameKey]);// computed expression

const imprimir = prompt('what to print, choose : firstName, lastName or job');
if (player1[imprimir])

    // Challenge 

    console.log(`${player1.firstName} has ${player1.friends.length} and his best friend is called ${player1.friends[1]}`);



// coding challenge 3

const Vale = {
    firstName: 'Valentina',
    lastName: 'Cordero',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }
};
const Seba = {
    firstName: 'Sebasthian',
    lastName: 'Castillo',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }
};

if (Vale.Bmi < Seba.Bmi()) {
    console.log(`${Vale.firstName} cordero BMI (${Vale.Bmi}) is higher than ${Seba.firstName} (${Seba.Bmi})`);
} else {
    console.log('Seba is higher');
}

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading arrays
    console.log(jonas[i], typeof jonas[i]);

    // filling arrays
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1069, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// break and continue
console.log('====ONLY STRINGS=====');

for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('====BREAK WITH NUMBER=====');

for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

// reading reverse array
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

let dado = Math.trunc(Math.random() * 7);
console.log(dado);

while (dado !== 6) {
    console.log(`you rolled ${dado}`)
    dado = Math.trunc(Math.random() * 7);
    if (dado === 6) console.log('Loop is finished');
}

// Coding Challenge 4

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const avgTeam = function (arr) {
    let i = 0, sum = 0;

    while (i < arr.length) {
        sum += arr[i++];
    }

    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    //tips.push(calcTip(bills[i]));
    //totals.push(calcTip(bills[i]) + bills[i]);tip

    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(avgTeam(totals));
console.log(avgTeam(tips));
console.log(tips, totals);





















