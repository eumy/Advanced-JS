const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = "bobby";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closusres: a child is going to remember and has access to the parent scope, but not the 
// other way around.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(10); //=50

// Compose: put two functions into one functin. 
// The output of one function is the input of another function.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // =7