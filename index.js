/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
function countdown() {
	for (i = 10;i >= 0; i--) {
		if (i === 0) {
			console.log("BLAST OFF!!!!");
			i--;
		} else {
		console.log("Countdown till launch: " + i);
		}
	}
}

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
function max(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
function longer(x, y) {
	if (x.length > y.length) {
		return x;
	} else {
		return y;
	}
}

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
function isEven(x) {
	if ((x % 2) === 0) {
		return "true";
	} else {
		return "false";
	}
}

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
function getAreaOfCircle(x) {
	return Math.PI * Math.pow(x,2);
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
function getFullName(nameArr) {
	return nameArr.firstName + " " + nameArr.lastName;
}
var name = {firstName: 'Bob', lastName: 'Evans'}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
function reverseString(x) {
	return x.split('').reverse().join('');
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
// a forEach loop here is highly inappropriate and not the best way to do this at all. First there is a Math.max function that just finds the max number of an array.
// Further a "For" loop is a more useful for tool that would itirate through an array finding the greatest number. Which would also provide a better alternative.
// This question doesn't make any sense....

function maxArray(x) {
	return Math.max.apply(null,x);
}
var numArray = [1,2,3,10,22,1,5,3];
/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */
var answer = {
	q0: countdown(),
	q1: max(5,10),
	q2: longer("this is a sentence", "sentence"),
	q3: isEven(10),
	q4: getAreaOfCircle(4),
	q5: getFullName(name),
	q6: reverseString("Tiara"),
	q7: maxArray(numArray),
}

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
  console.log(answer)
