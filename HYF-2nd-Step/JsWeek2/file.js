

function simpelSum(first,second,third) {
  return first + second + third;
}
// Step 1
function colorCar(color) {
  color = (color[0].match(/a|e|o|i/i)) ? `an ${color}` : `a ${color}`;
  // e = color.join("");
  return color;
}
// Step 2
function ob(e,b) {
  let obj = {
  first: e, second: b
  };
  for (const key of Object.keys(obj)) {
    console.log(key + ' = ' + obj[key]);
  }
}
ob("Jawhar","Meno");
// Step 3
function vehicle(age) {
  if (!isNaN(age)) {
    age = (age <= 4) ? "Wow New Vehicle!" : "Really Old Used Vehicle!";
  }  else {
    console.log("Please Enter A Valid Value");
  }
  return age;
}
function vehicleType(Color,Type,Age) {
  let Types = ["Car", "Motorbike", "Caravan", "Truck", "Taxi", "bike"];
  if (!isNaN(Type) && Type < Types.length) {
    Type = Types[Type];
    Color = colorCar(Color);
    Age = vehicle(Age);
  } else if (Color === "All" || Type === "All" || Age === "All") {
    Color = "";
    Type = "";
    Age = "";
    newTypes = Types.map( (item) =>{ return item + "s" } );
    popy = newTypes.pop();
    newTypes.push(`and ${popy}`);
    // let popy = newTypes.pop();
    return newTypes.join(", ");
    // e(){let d = newTypes.split(",").replace((p)=>{let s = newTypes.pop();return s;},"and ");return d;}
    // return newTypes + e()
  } else {
    console.log("Please Enter A Valid Value");
  }
  console.log(Color, Type, Age);
  // color = colorCar(color);
  // if (!isNaN(vType)) {
  //   if (vType > 2) {
  //     console.log("please insert A valid value");
  //   } else {
  //     let e = (vType = 1) ? "Car" : "Motorbike";
  //   };
  // };
  // console.log(color + " " + vType);
}
vehicleType("Blue",5,7);
// Step 5
  (3 == 3) ? console.log("true") : console.log("false");

function ad() {
  console.log(`Amazing Joe's Garage, we service ${vehicleType("All")}`);
}
ad();
// Step 12, 13, 14
let myObj = {};
let teachersObj = {
  firstName: ["Philipp","Ivana","Frank","Jim","Unmesh"],
  lastName: ["Beau","Setiawan","Versnel","Cramer","Joshi"],
  language: "English"
};
// Step 15
function foo(func) {
  // What to do here? 
  return bar();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

let dar = 42; 
typeof typeof dar; // it  will return "string" because typeof(42) = "number" << number word is a string






// let obj = {
//     name: 'January', days: 31
// };
// function objContent() {
//     let par, val, result = "";
//     for (par in obj) {
//         result += par;
//         console.log(obj[par]);
//     }
//     console.log(result);
// }
// objContent();

// const obj = {
//     name: 'January', days: 31
//   };
  
// function objContent() {
//     console.log(Object.keys(obj));
//     
// }
// objContent();
 

// const MONTHS = [
//   { name: 'January', days: 31 },
//   { name: 'February', days: 28 },
//   { name: 'March', days: 31 },
//   { name: 'April', days: 30 },
//   { name: 'May', days: 31 },
//   { name: 'June', days: 30 },
//   { name: 'July', days: 31 },
//   { name: 'August', days: 31 },
//   { name: 'September', days: 30 },
//   { name: 'October', days: 31 },
//   { name: 'November', days: 30 },
//   { name: 'December', days: 31 }
// ];
// for (let Part of MONTHS) {
//     console.log(Part);
//     for (let Partical in MONTHS[Part]) {
//         console.log(MONTHS[Partical])
//     }
// }













// y = f(X) = 2X + 5

// // // // // // // // // // // // // // // // 
//  First Debugging Lesson
// const elements = ["hack", "your", "future"].reverse();
// let result = "";
// for (let index = 0; index < elements.length; index++) {
//     result += elements[index];
// }
// console.log(result);
// // // // // // // // // // // // // // // // 
// First Line NodeJs
// let http = require('http').createServer(function(request, response) {
//     console.log(http); // Why Twice ?!
//     response.write('Hi');
//     response.end();
// }).listen(2013);