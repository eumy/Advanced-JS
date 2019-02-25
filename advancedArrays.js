//Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map((num) => {
    return num * 2
});

console.log('map', mapArray);

const mapArray = array.map(num => num * 2); // this line is the same as line 14 to 16.


// filter

const filterArray = array.filter(num => {
    return num > 5
});

const filterArray = array.filter(num => num > 5); //same as line 25 to 27.

console.log('filter', filterArray);

//  reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);

console.log('reduce', reduceArray); //=34





//Exercises and Solutions

// Complete the below questions using this array:
const array = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = [];
array.forEach((user) => {
    let { username } = user;
    username = username + '!';
    newArray.push(username);
});
console.log('forEach', newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map((user) => {
    let { username } = user;
    return username + '?';
});
console.log('map', mapArray);

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => user.team === "red");
console.log('filter', filterArray);

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, user) => {
    return accumulator + user.score;
}, 0);
console.log('reduce', reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

//solution of (2)
const newArray2 = arrayNum.map((num, i) => {
    return num * 2;
});
console.log('solution2', newArray2)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus = array.map((user) => {
    user.items = user.items.map((item) => {
        return item + '!'
    })
    return user
});
console.log('This is the bonus answer', bonus)