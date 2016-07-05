/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 function countdown () {
 	for (i = 10; i >=0; i --)
 	{
 		if (i >= 1)
 		{
 			console.log(i);	
 		}
 		else
 		{
 			console.log("Blast Off!!");
 		}
 		
 	}
 }

 //countdown();



/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

function max (x, y) {
	if (x > y)
	{
		
		console.log(x);
		//console log was just so I could see the return value in terminal.
		return x;
	}
	
	else if (x === y) {

		console.log("Both numbers are equivalent.")
	}
	
	else {
		
		console.log(y);
		//console log was just...
		return y;
	}

}

//max(12, 12);

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

 function longer (x, y) {
 	
 	if (x.length > y.length) {

 		console.log(x);
 		return x;
 	}
 	
 	else if (x.length === y.length) {

 		console.log("Both strings are equal in length.");
 	} 
 	
 	else {

 		console.log(y);
 		return y;
 	}

 }
 
 //longer("hey", "howdy");



/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

 function isEven(x) {
 	if ((x % 2) === 0) {

 		console.log("true");
 		return true;
 	}

 	else {

 		console.log("false");
 		return false;
 	}
 }

 //isEven(6);

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

  function getAreaOfCircle (radius) {
  	var Area;
  	//QUESTION: I tried using Math.pi, but I would get NaN in the Terminal. Why??
  	Area = 3.14 * radius * radius;
  	console.log(Area);
  	return Area;
  }

// getAreaOfCircle(5);

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

 function getFullName (obj) {
 	console.log(obj.firstName + ' ' + obj.lastName);
 	return obj.firstName + ' ' + obj.lastName;
 }

 // getFullName({
 // 	firstName: "Usman",
 // 	lastName: "Qadri"
 // })

 // *** In the future. For HW questions, can we have at the bottom of a question
 // *** a sample calling of a function with its input, and then what the output is
 // *** is supposed to look like? I was stuck for a while, and I still don't know if
 // *** if I did it properly.


/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

function reverseString (x) {

// This way was a fail

// 	var res = x.split(" ");
// 	var rev = res.reverse();
// 	var joined = res.join();
// 	var reversedString = "";
// 	for (i = 0; i < joined.length; i ++) {
// 		if (joined.charAt(i) !== ',') {
// 			reversedString = joined.charAt(i) + reversedString; 
// 		}
// 		else {
// 			" " + reversedString;
// 		}
// 	}
// 	console.log(reversedString);
// 	// return res;
// }

// *** This way was a fail because I put a space in between the quotes after split
// *** If I do it without spaces, it reverses every character, not every word. And 
// *** I want the former.

// .join() by itself will join it with commas in between. If I put an empty
// string in the parentheses, then it will just add a space.

console.log(x.split("").reverse().join(""));
return x.split("").reverse().join("");
}

// reverseString("I love you");



/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

 // Idk what a forEach loop is.

function maxArray (arr) {
	var max = 0;
	for (i = 0; i < arr.length; i ++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log(max);
	return max;
}

// maxArray([1, 3, 6, 9]);



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
 	q0: countdown(),
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

  answers.q0;
  answers.q1;
  answers.q2;
  answers.q3;
  answers.q4;
  answers.q5;
  answers.q6;
  answers.q7;
