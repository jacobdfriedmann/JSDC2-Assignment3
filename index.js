/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

function countdown(){

while(i > 1){

	i--;
	console.log(i);

	if(i === 1){

		console.log('blast off!');
	}
}

}


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

function max(greater, less){

	return Math.max(greater, less);

}

console.log(max(5 , 3));


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */





/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

function isEven(num){

	if(num % 2 === 0){

		console.log('true')
	}else{

		console.log('false')
	}

}

isEven(33);




 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

function getAreaOfCircle(distance){

	radius = distance/2;
	console.log(radius);

}

getAreaOfCircle(13);


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


/*
function getFullName({ 

	 firstName : 'Bob', 
	 lastName : 'Evans' 
}){

	firstName + lastName

	};


console.log(getFullName);

*/




/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */




function reverseString( contentReversed ){

	return contentReversed.split('').reverse().join('');
}

console.log(reverseString('This string will be reversed'));

/**

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.

/*
var myArray = ['1', '2', '3'];

function maxArray(arr, func) {
  for (var i = 0; i < arr.length; i++) {

   func(arr[i]);

  }
}


	function speak(word) {
	  console.log(word);
	}

speak();
*/


/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */

 /*

 var answers = {

 	q0: countdown(),

	q1:



 };

 */

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
