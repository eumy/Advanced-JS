const a = 1;
const b = 10;
const c = 100;

//call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

// JS is a single-threaded language that can be non-blocking.
// Single thread means it only has one call stack. First in, last out.
// only one thing at a time.
// multi-threaded: it can have multiple call stacks. But JS is not one.


// stack overflow
//Recursion: a function that calls itself. There's no end. So it's stack overflow.
function foo() {
    foo()
}

foo()


//asynchronous programming
//setTimeout is part of Web API
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP