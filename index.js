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

function max(x,y) {
	var larger = x > y ? x : y;
	console.log("max("+ x + "," + y + ") = " + larger);
	return larger;
}

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

function longer(str1,str2) {
	var longerString = str1.length > str2.length ? str1 : str2;
	console.log("longer string: " + longerString);
	return longerString;
}


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
*/

function isEven(n) {
	var bool = n % 2 === 0 ? true : false;
	console.log("is " + n + " even? " + bool);
	return bool;
}

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

function getAreaOfCircle(r) {
	var area = Math.PI * Math.pow(r,2);
	console.log("the area of a circle with radius " + r + " is " + area);
	return area;
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
	var fullName = person.firstName + " " +person.lastName;	
	console.log("Full Name: " + fullName);
	return fullName;
}

var person = {
	firstName : "Julia",
	lastName : "Graves"
};

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

function reverseString(string) {
	var reversed = string.split("").reverse().join("");	
	console.log(string + " reversed is " + reversed);
	return reversed;
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
function maxArray(numbers) {
	var largest = 0
	for (var i = 0; i < numbers.length; i++) {
    	 largest = numbers[i] > largest ? numbers[i] : largest;
    }
    console.log("the largest number in the array is " + largest);
    return largest;
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
	q0 : countdown,
	q1 : max,
	q2 : longer,
	q3 : isEven,
	q4 : getAreaOfCircle,
	q5 : getFullName,
	q6 : reverseString,
	q7 : maxArray 
}

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
answers.q0();
answers.q1(3,7);
answers.q2("helloooooo","world");
answers.q3(4);
answers.q4(5);
answers.q5(person);
answers.q6("hello world")
answers.q7([7,4,1,5,6,11,7]);



