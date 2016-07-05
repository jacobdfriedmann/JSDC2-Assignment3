/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 function countdown() {
 	for (var i = 10; i > 0; i--) {
 		console.log(i);
 	}
 	console.log('Blast Off!');
 }

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 function max(a, b) {
 	if (a > b) return a;
 	else return b;
 }


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

function longer(a, b) {
	if (a.length > b.length) return a;
	else return b;
}

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

function isEven(a) {
	return ((a % 2) === 0);
}

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

function getAreaOfCircle(r) {
	return (Math.PI * r * r);
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

function getFullName(a) {
	return (a.firstName + ' ' + a.lastName);
}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

function reverseString(a) {
	return a.split('').reverse().join('');
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

function maxArray(a) {
	var currentMax = a[1];
	 a.forEach(function(item) {
	 	currentMax = (item > currentMax) ? item : currentMax;
	 });
	 return currentMax;
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

 var obj = {
 	countFrom10: countdown,
 	maxFrom2: max,
 	longerWord: longer,
 	numIsEven: isEven,
 	circleArea: getAreaOfCircle,
 	fullName: getFullName,
 	stringReverse: reverseString,
 	arrayMax: maxArray
 }

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
  obj.countFrom10();
  console.log(obj.maxFrom2(3,4));
  console.log(obj.longerWord('hello','bye'));
  console.log(obj.numIsEven(4));
  console.log(obj.circleArea(15));
  var a = { firstName:'Bob', lastName: 'Evans' };
  console.log(obj.fullName(a));
  console.log(obj.stringReverse('This is a test'));
  console.log(obj.arrayMax([1,2,3,4,5,67,5,4,3,8,9,99]));