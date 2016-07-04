/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
function countdown() {
  for (var i = 10; i > 0; i--) {
    console.log(i);
  }
  console.log("Blast Off!");
}

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
function max(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a > b) ? a : b;
  } else {
    return "This function requires both parameters to be numbers"
  }
}

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
function longer(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return (a.length > b.length) ? a : b;
  } else {
    return "This function requires both parameters to be strings"
  }
}

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
function isEven(a) {
  if (typeof a === 'number') {
    return (a % 2 === 0);
  } else {
    return "This function requires the parameter to be a number"
  }
}

/**
* Q4: Write a function called `getAreaOfCircle` that has a Number parameter
* (the circle's radius) and returns the surface area.
*/
function getAreaOfCircle(radius) {
  if (typeof radius === 'number') {
    return Math.PI * Math.pow(radius, 2);
  } else {
    return "This function requires the parameter to be a number"
  }
}

/**
 * Q5: Write a function called `getFullName` that has an Object parameter, of the form:
 *
 * {
 *   firstName: 'Bob',
 *   lastName: 'Evans'
 * }
 *
 * And returns the first and last name concatenated together (i.e. 'Bob Evans').
 */
function getFullName(person) {
  if (typeof person === 'object') {
    person.firstName = (person.firstName === undefined) ? '' : person.firstName;
    person.lastName = (person.lastName === undefined) ? '' : person.lastName;
    return person.firstName + ' ' + person.lastName;
  } else {
    return "This function requires the parameter to be an object"
  }
}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
function reverseString(inputString) {
  if (typeof inputString === 'string') {
    inputString = inputString.split('');
    inputString = inputString.reverse();
    return inputString.join('');
  } else {
    return "This function requires the parameter to be a string"
  }
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
function maxArray(numArray) {
  if (typeof numArray === 'object') {
    maxNum = 0;
    numArray.forEach(function (num) {
      if (typeof num === 'number') {
        maxNum = (num > maxNum) ? num : maxNum;
      }
    });
    return maxNum;
  } else {
    return "This function requires the parameter to be an array"
  }
}

/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */
var answers = {
  q0: countdown,
  q1: max,
  q2: longer,
  q3: isEven,
  q4: getAreaOfCircle,
  q5: getFullName,
  q6: reverseString,
  q7: maxArray
}

/**
* Q9: Use the Object from Q8 to call all of the functions you've created.
*/
answers.q0();
console.log(answers.q1(5, 2));
console.log(answers.q2('test', 'strings'));
console.log(answers.q3(179));
console.log(answers.q4(16));
console.log(answers.q5({ firstName: 'Bob', lastName: 'Evans' }));
console.log(answers.q6('tomato'));
console.log(answers.q7([5, 17, 2, 7, 26, 99, 4, 6, 23]));