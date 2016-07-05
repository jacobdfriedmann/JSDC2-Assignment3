/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

/**
* To complete the assignment, I have first created a variable called blastOff.
* Next, I use a for loop that decrements until 0. 
* Inside of the for loop, I have used a ternary that will log the value of blastOff
* as long as its value is greater than 0. The 'else' expression in the ternary simply 
* logs 'Blast Off!' since blastOff should equal 0 at that point.
*/

function countdown() {
	for (blastOff = 10; blastOff >= 0; blastOff--) {
		blastOff > 0 ? console.log(blastOff) : console.log('Blast Off!');
	}
}

//countdown();

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 /**
 * I cheat the first time by using the max function of the Math object, which is 
 * what this assignment is trying to get us to produce.
 */

//console.log('Cheating by using Math.max:');

function max(numOne, numTwo) {
	return Math.max(numOne, numTwo);
}

//console.log(max(123, 16));

// The second time, I use a ternary and > to compare the two values:

//console.log('Not cheating by using a ternary:');

function max(numOne, numTwo) {
	return numOne > numTwo ? numOne : numTwo;

/**	
* Or as an if/else statement:
*	if (numOne > numTwo) {
*		return numOne;
*	} else {
*		return numTwo;
*	}
*/

}

//console.log(max(184, 2234));

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

 // I use a ternary and string.length.

function longer(stringOne, stringTwo) {
	return stringOne.length > stringTwo.length ? stringOne : stringTwo;
}

//console.log(longer('Christmas', 'Eve'));

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

 // If the number is divisible by 2 using the modulo operator, the function returns true.
 // Otherwise, it returns false. Unfortunately, this function cannot account for NaN inputs.

function isEven(x) {
	return x % 2 === 0;
}

//console.log(isEven(96));

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

//I used Math.PI and Math.pow to compute Area of Circle = Pi(r^2)

function getAreaOfCircle(r) {
	return Math.PI * Math.pow(r, 2);
}

//console.log(getAreaOfCircle(15));

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

/**
* In order to solve this, I declared an object, named it formResponse, and populated
* the object with the data provided above.  
*
* This problem seeks to show how functions can call objects just as they can call 
* numbers or strings. It further seeks to show how you then manipulate that object within
* the function itself. 
*
* You achieve this by naming (in this case) a (one) parameter. Then, whenever you want to 
* reference that object in the function, you refer to it as the parameter name in place of 
* the actual object name within the context of the function.
*/

function getFullName(object) {
	return object.firstName + ' ' + object.lastName;
}

var formResponse =  {
	firstName: 'Bob',
	lastName: 'Evans'
};

//console.log(getFullName(formResponse));

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

 /**
 * The syntax for split() is str.split([separator[, limit]]), which is taken from:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * The separator is optional, but specifies the character(s) to use for separating the string. 
 * If separator is omitted, the array returned contains one element consisting of the entire string. 
 * If separator is an empty string, str is converted to an array of characters. 
 *
 * I interpreted the question to mean that the string would be a single word as opposed to a 
 * sentence, which means that we would want the separator to be an empty string so that the 
 * string is converted into an array of characters. From here, you only have to reverse the order
 * of the array with reverse() and then re-write the word using join(). The default separator with
 * join() is a comma (,). Therefore, I set the default to an empty string ('') so that the reversed
 * array becomes a new word.
 */

function reverseString(stringParameter) {
	return stringParameter.split('').reverse().join('');
}

//console.log(reverseString('Alphabet'));

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

/** I was confused by this question at first because forEach loops are confusing and because 
* I thought that a 'forEach' loop took both an Array AND a function as its parameters, which
* it does, yet the question asks us to write a function that has one Array of Numbers 
* parameter. 
*
* I then realized that the function could simply pass the argument array from the first 
* function as the parameter array in the forEach loop, but this would mean that the forEach 
* loop would still need a parameter function elsewhere defined. 
*
* After reviewing the class notes on the forEach loop, I was able to finally figure it out.  
*/

var myArray = [17, 38, 94, 1, 923, 375, 4];

function maxArray(arrayOfNumbers) {
	var greatestValue = 0;
	arrayOfNumbers.forEach(function(num) {
		if(num > greatestValue){
	        greatestValue = num;
	    }
	});
/*
	for (var i = 0; i < arrayOfNumbers.length; i++) {
	    if(arrayOfNumbers[i] > greatestValue){
	        greatestValue = arrayOfNumbers[i];
	     }
	}
*/
	return greatestValue;
}



//console.log(maxArray(myArray));

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
};

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */

answers.q0();
console.log(answers.q1(154, 93));
console.log(answers.q2('Christmas', 'Eve'));
console.log(answers.q3(96));
console.log(answers.q4(15));
console.log(answers.q5(formResponse));
console.log(answers.q6('Alphabet'));
console.log(answers.q7(myArray));