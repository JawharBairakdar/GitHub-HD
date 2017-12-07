
// < 06-DEC-2017 >  Homework

// >>>> Q.1

function foo(func) {
    // What to do here? 
    func()
}

function bar() {
    console.log('Hello, I am bar!');
}

// >>>> Q.2

foo(bar);

function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 1000)

/*
You must write a function that takes 4 arguments.
  - A start value -
  An end value 
  - A callback to call if the number is divisible by 3 
  - A callback to use if the number is divisible by 5
*/
function fourArgumentsFunc(start, end, oddDivisible, fiveDivisible) {
    let range = []
    for (start; start <= end; start++) {
        range.push(start)
        // The function should generate an array containing values from start value to end value (inclusive).
    }
    console.log(range)
    let filteringThreeRange = range.filter(item => {
        return item % 3 === 0
    })
    let filteringFiveRange = range.filter(item => {
        return item % 5 === 0
    })
    console.log(filteringFiveRange, filteringThreeRange)

    filteringThreeRange ? oddDivisible(filteringThreeRange) : false;
    filteringFiveRange ? fiveDivisible(filteringFiveRange) : false;
}

fourArgumentsFunc(0, 10, consoleOdd, consoleFives);
function consoleOdd(item) {
    return console.log("From Odd Console", item)
}
function consoleFives(item) {
    return console.log("From Fives Console", item)
}

// >>>> Q.3 
// ......The Answers For These Questions Are After The Functions

function repeatStringNumTimes(str, num, Func) {
    // repeat after me
    return Func(str, num);
}
// >>>> Q.4 
function forLoop(str, num) {
    let repeating = "";
    for (let i = 0; i < num; i++) {
        console.log(repeating += str)
    }
}
// >>>> Q.5 
function whileLoop(str, num) {
    let repeating = "";
    let i = 0;
    while (i < num) {
        console.log(repeating += str)
        i++
    }
}
// >>>> Q.6
function doWhileLoop(str, num) {
    let repeating = "";
    let i = 0;
    do {
        console.log(repeating += str)
        i++
    }
    while (i < num)
}

repeatStringNumTimes("abc", 3, forLoop);
repeatStringNumTimes("abc", 3, whileLoop);
repeatStringNumTimes("abc", 3, doWhileLoop);


// >>>> Q.7 Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions
// >>>> Q.8 Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops
// >>>> Q.9 I didn't understand it
// >>>> Q.10
var x = 9;
function f1(val) {
    val = val + 1;
    console.log("val", val)
    return val;
}
f1(x);
console.log(x);

var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

// Because it's returning the value of (val) not (x)
// But inside the object it returns the value of x just like when we want to change the value inside a constant object:)
// Check the test Below
let a = 9;
let b = a
b += 1
console.log("test", a)
console.log("test", b)



/////////////  BONUS
const BONUS = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']

function sortThemAll(arr) {
    const comprator = arr.reduce((sum, val) => {
        let code = val.charCodeAt(0)
        sum.push(code)
        return sum
    }, [])
    function sortByCode(a, b) {
        return a - b
    }
    let unique = comprator.sort(sortByCode).filter((item, index, arr) => {
        return index === arr.indexOf(item) // I cheated this line :(
    }).map((item) => {
        return String.fromCharCode(item)
    })
    return unique
}

console.log(sortThemAll(BONUS))
