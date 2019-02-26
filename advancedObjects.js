// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
// scope is created with {}, context tells us what is the enviroment of the object we are in.

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEE I'm a &{this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');



//EXERCISES

//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false



//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5 }; //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`My name is ${this.name}, I'm a ${this.type}, my color is ${this.color}!`);
    }
};

const cow = new Mamal('Sweet', 'cow', 'yellow');