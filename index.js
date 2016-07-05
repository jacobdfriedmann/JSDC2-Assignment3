/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
function blastOff() {
	for (count = 10; count > 0; count--) {
		console.log(count);
	};
	console.log("Blast Off!");
};

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
function max(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	};
};

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
function longer(stringOne, stringTwo) {
	if (stringOne.length > stringTwo.length) {
		return stringOne;
	} else {
		return stringTwo;
	};
};

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	};
};

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
function getAreaOfCircle(radius) {
	var area = Math.PI * (radius * radius);
	return area;
};

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

function getFullName (object) {
	return object.firstName + ' ' + object.lastName;
};

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
function reverseString(string) {
	var backwards = string.split('').reverse().join('');
	return backwards;
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
function maxArray(arrayOfNumbers) {
	var largest = 0;
	for (i = 0; i < arrayOfNumbers.length; i++) {
		if (arrayOfNumbers[i] > largest) {
			largest = arrayOfNumbers[i];
		}
	}
	console.log(largest);
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

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
