"use strict"
// let arr = ["jawhar","jawhar is amazing","jawhar is awesome","wow this is jawhar"]
// let random = Math.floor(Math.random() * arr.length)

// console.log(arr[random])





function foo(func) {
    // What to do here? 
    func()
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar)
// 2
function isEven(x) {

    if (x % 2 === 0) {
        console.log(x + " is even number")
    } else false

}
function isOdd(x) {

    if (x % 2 !== 0) {
        console.log(x + " is odd number")
    } else false
}

function generatoer(x, y, func1, func2) {
    let newArray = [];
    for (let i = x; i <= y; i++) {
        newArray.push(i)
    }
    let theOddArray = newArray.forEach(isOdd)
    let theEvenArray = newArray.forEach(isEven)
    return theEvenArray && theOddArray
}
generatoer(1, 10, isEven, isOdd);

// Step 2,3,4,5

// do loop
function doLoop(str, num) {
    let myStr = "";
    let i = 0;
    do {
        myStr += str;
        i++;
    }
    while (i < num);
    return myStr;
}
console.log(doLoop("abc", 9));

// while loop
function whileLoop(str, num) {
    let myStr = "";
    let i = 0;
    while (i < num) {
        myStr += str;
        i++;
    };
    return myStr;
}
console.log(whileLoop("abc", 5));

//  for loop
function forLoop(str, num) {
    let myStr = "";
    for (let i = 0; i < num; i++) {
        myStr += str;
    }
    return myStr;
}
console.log(forLoop("abc", 8));

// step 5
/*A - Write a function that would allow you to do this:
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27*/
// Bouns
let myArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function findDuplicates(array) {

    let uniqeArray = [];

    array.forEach((element, index) => {

        // Find if there is a duplicate or not
        if (array.indexOf(element, index + 1) === -1) {

            // Find if the element is already in the result array or not
            if (uniqeArray.indexOf(element) === -1) {
                uniqeArray.push(element);
            }
        }
    });

    return uniqeArray;
}
console.log(findDuplicates(myArray))