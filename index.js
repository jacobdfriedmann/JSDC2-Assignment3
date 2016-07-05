/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 // function countdown(num) {
 // 	for (var i = num; i >= 0; i--) {
 // 		if (i === 0) { 
 // 			console.log('Blast Off');
 // 		} else {
 // 			console.log(i);
 // 		}
 // 	}
 // };

function countdown(num) {
	var i = num; 
	while (i > 0) {
		console.log (i--);
	}
	console.log('Blast Off');
};

countdown(10);

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

function max(x,y) {
	return Math.max(x,y);
};

var larger = max(3,1);
console.log(larger);

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

function longer(word1, word2) {
	var wordLength = Math.max(word1.length, word2.length);
	console.log(wordLength);

	function whichOne(wordLength) {
		if (wordLength == word1.legnth) {
			return 'word1';
		} else {
			return 'word2';
		}
	}
};

longer('I love food', 'Food');

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

function isEven(num) {
	// (num % 2) === 0 ? console.log('true') : console.log('false');	
	if ((num % 2) === 0) {
		return true;
	} else {
		return false;
	}
};

var response = isEven(49);

console.log(response);

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

function getAreaOfCircle(radius) {
	var surface = Number(radius * radius * Math.PI);
	return (Math.round(surface));
}

var surfaceArea = getAreaOfCircle(60);
console.log(surfaceArea);

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

function getFullName(name) {
	var name = {
		firstName: 'Bob',
		lastName: 'Evans'
	};
	console.log(name.firstName + ' ' + name.lastName);
	return name.firstName + ' ' + name.lastName;
};

// this one is not working. 

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */


function reverseString(str) {
	var strReverse = str.split('').reverse().join('');
	console.log(strReverse);
	return strReverse;
};

reverseString('asdfghjkl');

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

function maxArray(arr) {
	arr.forEach(function (largest) {
		return Math.max.apply(Math, arr)
		console.log(Math.max.apply(Math, arr))
	});
};

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
maxArray(myArray);


/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */

var homework = {
	q0: countdown(),
	q1: max(),
	q2: longer(),
	q3: isEven(),
	q4: getAreaOfCircle(),
	q5: getFullName(),
	q6: reverseString(),
	q7: maxArray()
}


 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */

homework.countdown();
homework.max();
homework.longer();
homework.isEven();
homework.getAreaOfCircle();
homework.getFullName();
homework.reverseString();
homework.maxArray();

