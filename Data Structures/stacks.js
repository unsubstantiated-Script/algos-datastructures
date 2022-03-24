//Setting up a class w/ array
class Stack {
	constructor() {
		this.stack = [];
	}

	push(element) {
		this.stack.push(element);
	}

	pop() {
		if (this.stack.length === 0) return "Underflow situation";
		else return this.stack.pop();
	}

	isEmpty() {
		if (this.stack.length > 0) return false;
		else return true;
	}
}

function reverse(str) {
	let stack = new Stack();

	let i = 0;
	let reversedStr = "";

	//Loading the stack
	while (i !== str.length) {
		stack.push(str.charAt(i));
		i++;
	}

	//Offloading the stack
	while (!stack.isEmpty()) {
		reversedStr += stack.pop();
	}

	return reversedStr;
}

console.log(reverse("lucy"));
