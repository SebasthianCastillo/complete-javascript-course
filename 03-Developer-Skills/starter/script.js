// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* 
const x = 23;
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1993));
*/

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
/* - what is temperature amplitude
    - what is sensor error in this case
    - function that calculate the T amplitude of one day 


// 2) Breaking up into sub problems
// array with return number

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempDayAmplitude = function (temp1, temp2) {
  let temps = temp1.concat(temp2);
  console.log(temps);
  const tempsWithout = [];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    tempsWithout.push(temps[i]);
  }

  let minValue = Math.min(...tempsWithout);
  let maxValue = Math.max(...tempsWithout);

  return maxValue - minValue;
};
let amplitude = calcTempDayAmplitude(temperatures, [2, 5, 20]);
console.log(`Amplitude of today temperatures: ${amplitude}`);
*/
/*
// Solution teacher
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //FIXME
    value: 10, //Number(prompt('Degrees celsius')),
  };

  const kelvin = measurement.value + 273;
  return kelvin; //BUG
};
console.log(measureKelvin());
*/

// PROBLEM Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
/*  - 
    - 
    - 
*/

// 2) Breaking up into sub problems
// do without array (fast version)
// do with array and loop statement

const maxTemps = [17, 21, 23, 34];

//const forecastFast = arr =>
//`${arr[0]} in 1 day ... ${arr[1]} in 2 days... ${arr[2]} in 3 days`;

const forecast = function (arr) {
  let i = 0,
    day = ``;
  while (arr.length > i) {
    day += `${arr[i]} in ${i + 1} day `;
    i++;
  }
  return day;
};
console.log(forecast(maxTemps));
