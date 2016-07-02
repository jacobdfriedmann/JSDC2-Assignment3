/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
// function countdown() {
//   for (var i = 10; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("Blast Off!");
// }

//countdown();

/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */
// function max (x, y) {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// }

//console.log(max(3, 2));

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

// function longer (string1, string2) {
//   if (string1.length > string2.length) {
//     return string1;
//   } else if (string1.length < string2.length) {
//     return string2;
//   } else {
//     return "They are the same length";
//   }
// }

//console.log(longer("hello", "world"));
//console.log(longer(".", "..."));
//console.log(longer("Luke, I am your father!", "Nooooooo!"));


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

// function isEven (num) {
//   var test = (num % 2 === 0) ? true : false;
//   return test;
// }

//console.log(isEven(84));

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
// function getAreaOfCircle (radius) {
//   var area = (radius * radius + "π, which is about " + Math.round((Math.PI * radius * radius)) + '\n"But you should not round pi. That is how bridges fall down." -- my high school math teacher');
//   return area;
// }

//console.log(getAreaOfCircle(5));

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

// function getFullName(myObject) {
//   return myObject.firstName + " " + myObject.lastName;
// }

// var name = {
//   firstName: "Han",
//   lastName: "Solo"
// };

//console.log(getFullName(name));

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

// function reverseString (string) {
//   return string.split("").reverse().join("");
// }

//console.log(reverseString("There is no spoon."));


/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

// function maxArray (myArray) {
//   var x = myArray[0];
//   myArray.forEach(function (num) {
//     if (num > x) {
//       x = num;
//     }
//   })
//   return x;
// }

//var arr = [5, 21, 9872, 54, 121, 0, -56];
//console.log(maxArray(arr));

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
  countdown: function() {
      for (var i = 10; i > 0; i--) {
        console.log(i);
      }
      console.log("Blast Off!");
    },
  max: function (x, y) {
      if (x >= y) {
        return x;
      } else {
        return y;
      }
    },
  longer: function (string1, string2) {
      if (string1.length > string2.length) {
        return string1;
      } else if (string1.length < string2.length) {
        return string2;
      } else {
        return "They are the same length";
      }
    },
  isEven:function (num) {
      var test = (num % 2 === 0) ? true : false;
      return test;
    },
  getAreaOfCircle: function (radius) {
      var area = (radius * radius + "π, which is about " + Math.round((Math.PI * radius * radius)) + '\n"But you should not round pi. That is how bridges fall down." -- my high school math teacher');
      return area;
    },
  getFullName: function (myObject) {
      return myObject.firstName + " " + myObject.lastName;
    },
  reverseString: function (string) {
      return string.split("").reverse().join("");
    },
  maxArray: function (myArray) {
      var x = myArray[0];
      myArray.forEach(function (num) {
        if (num > x) {
          x = num;
        }
      })
      return x;
    }
};

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */

console.log("ANSWER 0:");  
answers.countdown();
console.log("ANSWER 1:");
console.log(answers.max(3, 2));
console.log("ANSWER 2:");
console.log(answers.longer("Luke, I am your father!", "Nooooooo!"));
console.log("ANSWER 3:");
console.log(answers.isEven(84));
console.log("ANSWER 4:");
console.log(answers.getAreaOfCircle(5));
console.log("ANSWER 5:");
console.log(answers.getFullName({
    firstName: "Han",
    lastName: "Solo"
  }));
console.log("ANSWER 6:");
console.log(answers.reverseString("There is no spoon."));
console.log("ANSWER 7:");
console.log(answers.maxArray([5, 21, 9872, 54, 121, 0, -56]));