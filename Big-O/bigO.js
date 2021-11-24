// function addUpTo(n) {
// 	let total = 0;
// 	for (let index = 0; index <= n; index++) {
// 		total += index;
// 	}
// 	return total;
// }

// console.log(addUpTo(10));

// function addUpTwo(n) {
// 	return (n * (n + 1)) / 2;
// }

// console.log(addUpTwo(10));

// var now = require("performance-now");

// var t1 = now();
// addUpTo(1000000000);
// var t2 = now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// var t1 = now();
// addUpTwo(1000000000);
// var t2 = now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// function countUpAndDown(n) {
// 	console.log("Going up!");
// 	for (var i = 0; i < n; i++) {
// 		console.log(i);
// 	}
// 	console.log("At the top!\nGoing down...");
// 	for (var j = n - 1; j >= 0; j--) {
// 		console.log(j);
// 	}
// 	console.log("Back down. Bye!");
// }

// countUpAndDown(20);

// function printAllPairs(n) {
// 	for (var i = 0; i < n; i++) {
// 		for (var j = 0; j < n; j++) {
// 			console.log(i, j);
// 		}
// 	}
// }

// printAllPairs(22);

/**
 * 1. Restate the problem in my own words
 * 2. What are the inputs that go into the problem?
 * 3. What are the outputs that should come from the solution?
 * 4. Can the outputs be determined from the inputs? Do I have enough info to solve?
 * 5. How should I label the important parts?
 *
 *
 * Problem: Write a function that takes two numbers and returns their sum
 *
 * 1. I need to make a function that will add two numbers together
 * 2. The inputs are two different numbers, but I need to know what number? Or a string depending on my language...
 * 3. The output is a sum total of the two orignal numbers
 * 4. The output might have a connection to the fact that the numbers are being inputted, problem indicates a number output vs. a string.
 * 5. I need to assign arguments for the two numbers going in, I need to name my function, I need to call my function with two numbers summed. If the output needs to be assigned, it needs a variable. I'm going to assume so as that seems more scalable.
 */

const sumOfPair = (a, b) => {
	return a + b;
};

console.log(sumOfPair(4, 5));

/**
 * Problem: Write a function that takes in a string and returns counts of each char in the string
 * 1. I'm guessing this is wanting each item in string analyzed, a bit unclear as a string is just an array of characters. Maybe it means letter counts in a word for example...? Looks like they just need to count the string items...
 * 2. The input is a string. Could be any sort of characters in that string
 * 3. Output is another string of a single count value based on the length of the string
 * 4. Yes I have enough info to solve this, this is a length of string problem
 * 5. String input, function, string output all could potentially need names. Some methods inside might need additional variables depending on how I wanna dice this up.
 *
 * simple
 * charCount("aaa")
 *
 * complex
 * needs to factor in other non letter chars and spaces casing?
 * charCount("aaa aaada")
 *
 *no input?
 *charCount()?
 */

// const charCount = (strArr) => {
// 	let outStr = [];
// 	if (strArr !== undefined) {
// 		for (let index = 0; index < strArr.length; index++) {
// 			if (strArr[index] !== " ") {
// 				outStr.push(strArr[index]);
// 			}
// 		}
// 	}
// 	return outStr.length;
// };

// console.log(charCount());

//Challenge: Alphanumeric but caps don't count count the instance of characters in the string
//Skip caps
//We're going to count lower/uppercase the same...

// const myObj = {
// 	name: "me",
// 	age: 33,
// 	potato: "fries",
// };

// let myVal = myObj["age"];

// console.log(myVal);

// const regex = new RegExp("^[a-z0-9]$");

// console.log(regex.test("1"));

const charCount = (str) => {
	// 	//Process string
	// 	//lower case everything
	// 	//Loop over string and log key/value pairs inside the object
	// 	//key is character
	// 	//value is count
	// 	//if char is num/letter AND already in, increase count
	// 	//else if char is a number/letter AND add to obj and set count to 1
	// 	//exclude spaces and non-alphanumeric chars...
	// 	//Return an object with a key/value mapping that indicates the count of each character

	// for (let index = 0; index < str.length; index++) {
	// 	let char = str[index].toLowerCase();

	// 	if (/^[a-z0-9]$/.test(char)) {
	// 		if (outObj[char] > 0) {
	// 			outObj[char]++;
	// 		} else {
	// 			outObj[char] = 1;
	// 		}
	// 	}
	// }

	// for (let char of str) {
	// 	char = char.toLowerCase();
	// 	if (/^[a-z0-9]$/.test(char)) {
	// 		outObj[char] = ++outObj[char] || 1;
	// 	}
	// }

	const outObj = {};
	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			outObj[char] = ++outObj[char] || 1;
		}
	}

	return outObj;
};

const isAlphaNumeric = (char) => {
	const code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	) {
		return false;
	}
	return true;
};

console.log(charCount("Howdy ho! &&&*&*&*"));
