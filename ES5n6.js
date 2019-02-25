// let + const
// use "const" for a variable that never changes; use "let" for a variable that is to be reassigned to a new value.


const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

// Destructuring

const obj = {
  player: 'bobby',
  experience: 100,
  wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const {player, experience} = obj; //same as line 21+22
let {wizardLevel} = obj; //same as line 23


// Object properties
const name = 'john snow';

const obj = {
  [name]: 'hello',
  ['ray' + 'smith']: 'hihi'
}

// Object properties 2, sometimes you want the property and value to match...
const a = "Simon";
const b = true;
cosnt c = {};

const obj = {
  a: a,
  b: b,
  c: c
}

const obj {a, b, c} //same as line 42 to 46...


// Template strings

const name = "Sally";
const age = 34;
const pet = "horse";
const greeting = "Hello" + name + "you seem to be doing" + greeting + "!";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`; // same as line 56


//default arguments

function greet(name='', age=30, pet='cat'){
  return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
} //default values are given.
greet() //when we call this function w/o providing arguements, this function won't fail but instead returning the defaults.


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); //symbols are used to make completely different types. So that we won't receive collides because of the same property types.


//arrow functions

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b; //it's same as line 78 to 80. But when you only return one statement then with the arrow function everything can be on one line.
