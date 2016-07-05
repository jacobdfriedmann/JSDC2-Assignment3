/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
 function countdown() {
 	for (var i = 10; i >= 0; i--) {
 		console.log(i);
 		if (i <= 0) {
	 		console.log('Blast off!!!');
	 	}
 	}
 }
 countdown();


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
 function max(a, b) {
 	if (a > b) {
 		console.log(a);
 	} else if (a === b) {
 		console.log(a + ' & ' + b);
 	} else {
 		console.log(b);
 	}
 }
 max(5, 7);
 max(4 * 7, (6 * 4) + 4);
 max(4 * 7, 6 * 3);
 max('five', 'ten');


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
 function longer(stringOne, stringTwo) {
 	var a = stringOne.length;
 	var b = stringTwo.length;
 	if (a > b) {
 		console.log(stringOne);
 	} else if (a === b) {
 		console.log("It's a draw!");
 	} else {
 		console.log(stringTwo);
 	}
 }
 longer('five', 'ten');
 longer('Sic transit Gloria Mundi!', 'Seek transit, Gloria, Monday!');


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
 function isEven(Number) {
 	if (Number % 2 === 0) {
 		console.log('true');
 	} else {
 		console.log('false');
 	}
 }
 isEven(7);
 isEven(288);

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
  function getAreaOfCircle(Number) {
  	var radius = Number;
  	var area = Math.PI * Math.pow(radius, 2);
  	console.log(area);
  }
  getAreaOfCircle(10);


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
 function getFullName(firstName, lastName) {
 	var fullName = {
 		firstName: 'Bob',
	 	lastName: 'Evans'
	 };
	 console.log(fullName.firstName + ' ' + fullName.lastName);
	 return fullName.firstName + ' ' + fullName.lastName;
 }
 getFullName();


/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
 function reverseString(string) {
 	return string.split('').reverse().join('');
 }
console.log(reverseString('palindrome'));

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
 function maxArray() {
 	var numbersArray = [1, 14, 956, 4, 8, 2];
 	var largestNumber = 0;
 	var compare = function(item) {
 		if (largestNumber > item) {
 			largestNumber = item;
 		}
 	};
 	numbersArray.forEach(compare);
 	console.log(largestNumber);
 }
maxArray();


/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */
 var = allFunctions {
 	q0: countdown(),
 	q1: max(),
 	q2: longer(),
 	q3: isEven(),
 	q4: getAreaOfCircle(),
 	q5: getFullName(),
 	q6: reverseString(),
 	q7: maxArray()
 };

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
  var count = 0;
  var i;

  function callFunctions() {
	for (i in allFunctions) {
		if(allFunctions.hasOwnProperty(i)) {
			count++;
		}
	}
  }
  