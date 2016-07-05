/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */ 
 function countDown (){
 	var numbers = [1,2,3,4,5,6,7,8,9,10]
 	for (var i = 0; i < numbers.length; i--) {
   var numbers = numbers[i];
   var message = 'Blast Off!';
   
 }
 countdown();
 console.log(message);

 }


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
 function max (x,y){
 	if (x >= y){
	return (x);
 	} else if (y >= x){
	return (y);
 	}
 }

 max();


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
var x = 'donkey';
var y = 'bunny';

 function longer (x,y){
 	if ((x.length) > (y.length)){
 		return (x);

 	} else if ((y.length) > (x.length)){
 		return (y);
 	}
 }


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */


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
 var fulllName = {
 		firstName: 'Bob',
 		lastName: 'Evans'
 }
function getFullName (){
	console.log (fulllName.firstName.lastName);
}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

ar string = 'asdfghjkl';
var stringReverse = str.split('').reverse().join(''); 
/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
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

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
