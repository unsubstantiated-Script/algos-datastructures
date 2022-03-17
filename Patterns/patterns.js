/*Frequency Counter Pattern!!!*/

//Compare two arrs see if squares exist in second arr that match original arr
//Basic solution to patterns--->look to store in an object not an array!!!

// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}

// 	let freqCounter1 = {};
// 	let freqCounter2 = {};

// 	//Using two loops instead of nesting loops to avoid On2
// 	for (let val of arr1) {
// 		//value?                //Initilize it or not  or add 1
// 		freqCounter1[val] = (freqCounter1[val] || 0) + 1;
// 	}

// 	for (let val of arr2) {
// 		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
// 	}
// 	console.log(freqCounter1);
// 	console.log(freqCounter2);

// 	for (let key in freqCounter1) {
// 		// Checks if a square is there
// 		if (!(key ** 2 in freqCounter2)) {
// 			return false;
// 		}
// 		//Checks if the number of squares matches the numbers of the original number
// 		if (freqCounter2[key ** 2] !== freqCounter1[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// function validAnagram(first, second) {
// 	if (first.length !== second.length) {
// 		return false;
// 	}

// 	let lookup = {};

// 	// Building an object of occurances
// 	for (let index = 0; index < first.length; index++) {
// 		//Resetting the value here to make it cleaner
// 		let letter = first[index];
// 		//If item exists, add one, else set it to 1
// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}

// 	// Looking through second to see if first has it's values
// 	for (let index = 0; index < second.length; index++) {
// 		const letter = second[index];
// 		//If the letter's not there, we're gonna stop things and that's it
// 		if (!lookup[letter]) {
// 			return false;
// 			//If the letter is there, we're gonna deduct a count from the number count in the object, once the object is empty, the loop will stop and trip true
// 		} else {
// 			lookup[letter] -= 1;
// 		}
// 	}

// 	return true;
// }
// console.log(validAnagram("dog", "god"));

/*Multiple Pointers Pattern*/
//These only work with sorted arrays, need to sort first...
//Find the first point when adding two numbers on a numbers line array results in zero

// function sumZero(arr) {
// 	let left = 0;
// 	// This is going to give us the exact index of the last number!
// 	let right = arr.length - 1;

// 	// This will keep us pinching inward
// 	while (left < right) {
// 		let sum = arr[left] + arr[right];

// 		//comboing the two pointers results in 0 means that we can return the values
// 		if (sum === 0) {
// 			return [arr[left], arr[right]];
// 			//if the total is greater than zero we move one in from the right
// 		} else if (sum > 0) {
// 			right--;
// 			//if the total is less than zero, we move one in from the left
// 		} else {
// 			left--;
// 		}
// 	}
// }

// console.log(sumZero([-2, -1, 0, 1, 2, 3, 4]));

// function countUniqueValues(arr) {
// 	if (arr.length === 0) return 0;
// 	//Reference pointer
// 	let i = 0;
// 	//Moving pointer
// 	let j = 1;

// 	for (let j = 1; j < arr.length; j++) {
// 		if (arr[i] !== arr[j]) {
// 			//advance pointer one time
// 			i++;
// 			//Set i equal to j to get a count of unique numbers/letters
// 			arr[i] = arr[j];
// 		}
// 	}

// 	return i + 1;
// }

// console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
//Sliding Window
// function maxSubarraySum(arr, num) {
// 	let maxSum = 0;
// 	let tempSum = 0;
// 	//shortcircuit if the array is too short
// 	if (arr.length < num) return null;

// 	//Loop through the array adding sequences of numbers in the number of times passed in one time
// 	for (let index = 0; index < num; index++) {
// 		maxSum += arr[index];
// 	}

// 	//Setting assigning this value to tempSum
// 	tempSum = maxSum;

// 	for (let index = num; index < arr.length; index++) {
// 		//This is going to take our original sum, drop off the front number and add in the next number in the list
// 		tempSum = tempSum - arr[index - num] + arr[index];

// 		//Will chose the larger of the two and update maxSum for output
// 		maxSum = Math.max(maxSum, tempSum);
// 	}
// 	return maxSum;
// }

// console.log(maxSubarraySum([1, 2, 3, 4, 3, 3, 66, 7, 99, 8], 3));

/* Divide and Conquer*/
//Binary search

// function search(array, val) {
// 	let min = 0;
// 	let max = array.length - 1;

// 	while (min <= max) {
// 		//Start in the middle of the array this gives the index
// 		let middle = Math.floor((min + max) / 2);
// 		//Value at index
// 		let currentElement = array[middle];

// 		//if it's less than the value, move up a level
// 		if (array[middle] < val) {
// 			min = middle + 1;
// 			//if it's more than the value move down a level
// 		} else if (array[middle] > val) {
// 			max = middle - 1;
// 			//This is the match return it
// 		} else {
// 			return middle;
// 		}
// 	}
// 	//Edge case in case it's not there...
// 	return -1;
// }

// function sameFrequency(arr1, arr2) {
// 	const first = arr1.toString();
// 	const second = arr2.toString();
// 	if (first.length !== second.length) {
// 		return false;
// 	}

// 	let lookup = {};

// 	// Building an object of occurances
// 	for (let index = 0; index < first.length; index++) {
// 		//Resetting the value here to make it cleaner
// 		let number = first[index];
// 		//If item exists, add one, else set it to 1
// 		lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
// 	}

// 	// Looking through second to see if first has it's values
// 	for (let index = 0; index < second.length; index++) {
// 		const number = second[index];
// 		//If the letter's not there, we're gonna stop things and that's it
// 		if (!lookup[number]) {
// 			return false;
// 			//If the letter is there, we're gonna deduct a count from the number count in the object, once the object is empty, the loop will stop and trip true
// 		} else {
// 			lookup[number] -= 1;
// 		}
// 	}

// 	return true;
// }
// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(82, 281));

// function areThereDuplicates() {
// 	if (Object.keys(arguments).length === 0) {
// 		return false;
// 	}

// 	let items = {};

// 	for (let val in arguments) {
// 		items[arguments[val]] = (items[arguments[val]] || 0) + 1;
// 	}

// 	//Looping again to see if there's any greater than 1.
// 	for (let key in items) {
// 		if (items[key] > 1) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(areThereDuplicates(1, 2, 3, 4, 4));

// function areThereDuplicates() {
// 	let collection = {};
// 	for (let val in arguments) {
// 		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
// 	}

// 	console.log(collection);
// 	for (let key in collection) {
// 		if (collection[key] > 1) return true;
// 	}
// 	return false;
// }

// areThereDuplicates(1, 2, 3, 4, 4);
// console.log(areThereDuplicates(1, 2, 3, 4, 4));

//This only works with a sorted array!
//Two moving pointer rule of thumb, result is too high, move the high down. Too low, move the low up.
// function averagePair(arr, avg) {
// 	if (arr.length === 0) return false;

// 	//Left Pointer
// 	let start = 0;

// 	//Right Pointer
// 	let end = arr.length - 1;

// 	//While this array exists on the number line
// 	while (start < end) {
// 		// Test the two pointers
// 		let avgTest = arr[start] + arr[end] / 2;
// 		//True? Done
// 		if (avgTest === avg) return true;
// 		//Avg is lower than expected move the low in
// 		else if (avgTest < avg) start++;
// 		//If higher move the high down
// 		else end--;
// 	}
// 	return false;
// }

// console.log(averagePair([1, 2, 44, 4, 5], 2.5));

function isSubsequence(str1, str2) {}
