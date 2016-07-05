/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 function countdown(){
 	for (var i = 10; i > 0; i--)
 		console.log(i);
 	console.log("Blast off!");
 }


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

function max(a,b) {
	if (a >= b)
		return a;
	else
		return b;
}

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

 function longer(a,b) {
 	if (a.length >= b.length)
 		return a;
 	else
 		return b;
 }


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

 function isEven(a) {
 	return !(a % 2);
 }

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

  function getAreaOfCircle(radius) {
  	return 4 * Math.PI * Math.pow(radius,2);
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
 	return person.firstName + ' ' + person.lastName;
 }


/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

function reverseString(string) {
	var gnirts = '';
	for (var i = string.length - 1; i >= 0; i-- ) {
		gnirts += string.charAt(i);
	}
	return gnirts;
}

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

 function forEach (arr, func) {
 	for (var i = 0; i < arr.length; i++) {
 		func(arr[i]);
 	}
 }

 function maxArray(arr) {
 	var max = arr[0];
 	for (var i = 1; i < arr.length; i++){
 		if (arr[i] > max) {
 			max = arr[i];
 		}
 	}
 	return max;
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
console.log(answers.q1(42,6*9));
console.log(answers.q2("forty-two","six times nine"));
console.log(answers.q3(911));
console.log(answers.q4(10));
console.log(answers.q5({lastName: "Ever", firstName:"Greatest"}));
console.log(answers.q6("A man, a plan, a canal: Panama"));
console.log(answers.q7([1,30,5,0,3]));