// -----------IIFE----------------
//js1 first file loaded.
var myApp = {}

//js2
(function() {
    myApp.add = function(a, b) {
        return a + b;
    }
})();


//-----------CommonJS + Browserify
//it runs before you put the website online. It's a module bundler.
// all the scrips will be in one big bundling file.
//js1
module.exports = function add(a, b) {
    return a + b;
}

//js2
var add = require("./add");



//------------ES6+Webpack2
//Webpack is a module bundler
//js1
export const add = (a, b) => a + b;
//or 
export default function add() {
    return a + b;
}

//js2
import { add } from './add';
//or
import add from './add';