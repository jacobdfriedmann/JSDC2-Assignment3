/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
 function countdown(){
 	var count=11;
 	while(count>0){
 		if(count>1){
 		count-=1;
 		console.log(count);
 		}else{
 		count-=1;
 		console.log("Blast Off!");
 		};
 		}
	};

//countdown();


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 function max(a,b){
 	if(a>b){
 		return a;

 	}else if(b>a){
 		return b;

 	}else{
 		return a;
 	}
 };

 //console.log(max(4,5));
 //console.log(max(10,1));
 //console.log(max(11,11));


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
function longer(a,b){
	if(a.length>b.length){
		return a;
	}else if(b.length>a.length){
		return b;
	}else{
		return "Both strings are the same length"
	}
};

//console.log(longer("hi","bye"));
//console.log(longer("team","two"));
//console.log(longer("eta","bye"));

/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
function isEven(a){
	if(a%2===0){
		return true;
	}else{
		return false;
	}
}

//console.log(isEven(2));
//console.log(isEven(-2));
//console.log(isEven(-3));


 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */
function getAreaOfCircle(radius){
	return Math.PI*radius*radius;
}

//console.log("A circle with radius 5 has an area of "+getAreaOfCircle(5));
//console.log(Math.PI);

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

Person = {
    firstName: 'Bob',
    lastName: 'Evans'
  }

function getFullName(person){
	console.log(person.firstName+" "+person.lastName);
};

//getFullName(Person);


/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */
function reverseString(a){
	//split up string a, turning it into an array
	b = a.split("");
	//reverse array b
	c = b.reverse();
	//join method
	return c.join("");
}

//console.log(reverseString("Hello"));

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */
var bigTime = [-1,0,-5,-3,2,100,-100];

function maxArray(arr){
	var bigOne = arr[0];
	for(i in arr){
		var j = parseInt(i)+1;
		if(bigOne<arr[j]){
			bigOne=arr[j];
		}else{
			continue;
		}

	}
	return bigOne;
}

//console.log(maxArray(bigTime));
	

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
    q0:function(){
 	var count=11;
 	while(count>0){
 		if(count>1){
 		count-=1;
 		console.log(count);
 		}else{
 		count-=1;
 		console.log("Blast Off!");
 		};
 		}
	},
    q1:function(a,b){
 	if(a>b){
 		return a;

 	}else if(b>a){
 		return b;

 	}else{
 		return a;
 	}
 },
    q2:function(a,b){
	if(a.length>b.length){
		return a;
	}else if(b.length>a.length){
		return b;
	}else{
		return "Both strings are the same length"
	}
},
    q3:function(a){
	if(a%2===0){
		return true;
	}else{
		return false;
	}
},
    q4:function(radius){
	return Math.PI*radius*radius;
},
    q5:function(person){
	console.log(person.firstName+" "+person.lastName);
},
    q6:function(a){
	//split up string a, turning it into an array
	b = a.split("");
	//reverse array b
	c = b.reverse();
	//join method
	return c.join("");
},
    q7:function(arr){
	var bigOne = arr[0];
	for(i in arr){
		var j = parseInt(i)+1;
		if(bigOne<arr[j]){
			bigOne=arr[j];
		}else{
			continue;
		}

	}
	return bigOne;
}
   
   
  };

 


 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
answers.q0();
console.log(answers.q1(22,45));
console.log(answers.q2("hi","hello"));
console.log(answers.q3(5));
console.log(answers.q4(6));
answers.q5(Person);
console.log(answers.q6("Independence"));
console.log(answers.q7([-1,2,4,56,5]));