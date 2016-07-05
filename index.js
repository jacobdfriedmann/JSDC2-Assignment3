/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

var countdown = function() {
	var i =10;
	while (i>0) {
		console.log(i);
		i--
	}
	console.log("Blast Off!")
}
//countdown();

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

var max = function(a,b) {
	var maxNum;
	if(a>b) {
		maxNum = a;
	} else {
		maxNum = b;
	}
	return maxNum;
};
max(10,2);

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

var longer = function(a,b){
	var longerString = 0;
	if(a.length > b.length) {
		longerString = a;
	} else {
		longerString = b;
	}
	return longerString;
};

longer("James","bo");

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
var isEven = function(a) {
	if (a%2===0) {
		return true;
	} else {
		return false;
	}
}
isEven(2);
isEven(4);
 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
var getAreaOfCircle = function (r) {
	return 2*Math.PI*r;
}
getAreaOfCircle(2);

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
var getFullName = function(a) {
	var fullName= "";
	for (var key in a) {
		fullName += a[key] + " ";
	}
	return fullName;
}

getFullName({firstName:"Bob", lastName:"Evans"});

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
var reverseString = function(string){
	var stringArray = string.split("");
	stringArray.reverse();
	return stringArray.join("");
}

reverseString("James");
/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
var maxArray = function(numbers) {
	var maxNum = 0;
	numbers.forEach(function(element){
		if (maxNum<element) {
			maxNum = element;
		}		
	});
	return maxNum;
}

maxArray([22,33,11]);

/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */

var myObject = {
	countdown: countdown,
	max: max,
	longer: longer,
	isEven: isEven,
	getAreaOfCircle: getAreaOfCircle,
	getFullName: getFullName,
	reverseString: reverseString,
	maxArray: maxArray
}

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */

myObject.countdown();
myObject.max(20,21);
myObject.longer("Jim", "Jimbo");
myObject.isEven(5);
myObject.getAreaOfCircle(5);
myObject.getFullName({firstName:"Bob", lastName:"Evans"});
myObject.maxArray([22,09,32,450,1250]);
myObject.reverseString("james");