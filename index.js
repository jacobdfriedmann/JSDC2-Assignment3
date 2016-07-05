/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
 	function blastOff (count) {
		while (count>0) {
 			console.log(count);
 			count--;
 		}
 		if (count===0) {
 			console.log('Blast off!');
 		}
 	}

 	blastOff(10);


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 	function max (x,y) {
 		if (x > y) {
 			return x;
 		}
 		else if (y > x) {
 			return y;
 		}
 		else {
 			return undefined;
 		}
 	}

 	console.log(max(3,8));


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

 	function longer (string1, string2) {
 		if (String(string1).length > String(string2).length) {
 			return string1;
 		}
 		else if (String(string2).length > String(string1).length){
 			return string2;
 		}
 		else {
 			return undefined;
 		}
 	}

 	console.log(longer('cool', 'beans'));


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

 	function isEven (number) {
 		if (number % 2 ===0) {
 			return true;
 		}
 		else {
 			return false;
 		}
 	}

 	console.log(isEven(0));

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

  	function getAreaOfCircle (radius) {
  		return Math.PI*(radius*radius);
  	}

  	console.log(getAreaOfCircle(6));

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

 	var drake = {
 		firstName: 'Greatest',
 		lastName: 'Ever'
 	}

 	function getFullName (name) {
 		return Object(name).firstName + ' ' + Object(name).lastName;
 	}

 	console.log(getFullName(drake));


/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

 	function reverseString (stringy) {
 		var letters = String(stringy).split('');
 		letters.reverse();
 		return letters.join('');
	}

	console.log(reverseString('looc si nosila'));

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

 	var losNumeros = [2,3,8,45,29,9,22,5,17,38,10];

 	function maxArray (numbers) {
 		Array(numbers).forEach(function(max){
 			//I'm confused about what to put here
 		});
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

 	var coolFunctions = {
 		q0: blastOff(),
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

  	console.log(coolFunctions);

  	//how to pass args to these functions without using a loop? 


