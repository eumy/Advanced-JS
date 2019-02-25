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
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}