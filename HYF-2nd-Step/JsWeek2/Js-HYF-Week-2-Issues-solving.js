// Q.1, Q.3, Q.5, Q.12, Q.13, Q.14 ,Q.15, Q.16, Q.17, Q.18  >>> ARE BELOW THIS LINE
function simpelSum(first,second,third) {
    return first + second + third;
}
console.log(simpelSum(1,2,3));
// Q.3
function ob(e,b) {
    let obj = {
    first: e, second: b
    };
    for (const key of Object.keys(obj)) {
      console.log(key + ' = ' + obj[key]);
  }
}
ob("Jawhar", "Meno");

// OR The Following >>> I fined many ways to use it here after that
// function obg(e,b) {
//     let obj = {
//     first: e, second: b
//     };
//     for (let key in obj) {
//       console.log(key + ' = ' + obj[key]);
//   }
// }
// obg("Jawhar","Meno");

// Q.5
(3 == 3) ? console.log("true") : console.log("false"); // I didn't mintion that they want it without condition

// Q.12, Q.13, Q.14
let myObj = {}; // Q.12
let teachersObj = { // Q.13 + Q.14
    firstName: ["Philipp", "Ivana", "Frank", "Jim", "Unmesh"],
    lastName: ["Beau", "Setiawan", "Versnel", "Cramer", "Joshi"],
    language: ["HTML", "Css", "Js .Debugging", "Js Programming", "Git & Github"]
};
//it want some work making it functionality but the result will appears like so
console.log(teachersObj.firstName[3], teachersObj.lastName[3], teachersObj.language[3]);

// Q.15
function foo(func) {
    // What to do here? 
    // it's completey wrong i saw it after i posted it on trello so i just keeped it
    // it have to be just like that: func();
    return bar();
}
function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);

// Q.16 it will never give us a true becuase the values not equals each others The ARRAY can contain a multi types of values depending on the contents
// >>>> wich means you want to be specific with wich property you want to know if is't equals or not (I didn't dive in depth with this yet but the refernce seying there is somthing with the prototype)


// Q.17
// Changing o2 it will cahnge o3 becuase o3 it's just let's say (a new name) for o2
// changing o1 will never changes o3 becuase there is no relation between them
/*
    Does the order that you assign (o3 = o2 or o2 = o3) matter?
        yes it's by the rule {(LHS) & (RHS) Look-up}
        (RHS) = right-hand-side
        (LHS) = left-hand-side >> it looks what he have at his right assigning it to it self
*/
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

// Q.18 
let dar = 42;
typeof typeof dar; // it  will return "string" because typeof(42) = "number" << number word is a string

// Everything about vehicles >>>  IS BELOW THIS LINE ---------------------------------------------------------------------------------
/*
Q.1 // Solved Above
Q.2 // Create a function                                    colorCar();
Q.4 // Create a function                                    vehicleType();
Q.6 // Create Another function takes an age parameter       vehicle();
Q.7 // List of vehicles
Q.8 // Third Element we can call it by entering the index value in here >>>> veihcleType([colorCar],[carType],[carAge]);
Q.9 // That what makes me "mix" every thing with each other the answer is >> veihcleType([colorCar],[carType],[carAge]); By setting what you want here the out put will be at line 114
Q.10// using the list of vehicles for the advertisment
Q.11// What if you add one more vehicle? THE ANSWER >>> With my way it will appears normally
Q.12// Solved Above
Q.13// Solved Above
Q.14// Solved Above
Q.15// Solved Above
Q.16// Solved Above
Q.17// Solved Above
Q.18// Solved Above
*/
// Q.2
function colorCar(color) {
    color = (color[0].match(/a|e|o|i/i)) ? `an ${color}` : `a ${color}`;
    // if you print a (blue) color it will return [a blue] but if you prints an (Aqua) color it will return [an Aqua] >> one of the next functions will be inneed for this one so i just did't like a program mixing between thim 
    return color;
}


function vehicle(age) { // Q.6 The vehicle(); function
    if (!isNaN(age)) {
      age = (age <= 4) ? "Wow New Vehicle!" : "Really Old Used Vehicle!";
    }  else {
      console.log("Please Enter A Valid Value");
    }
    return age;
}
function vehicleType(Color, Type, Age) { // Q.4 created function vehicleType(); and add a condition for (1 and 2)
    // By Q.6 I have assigning The Age parameter
    let Types = ["Car", "Motorbike", "Caravan", "Truck", "Taxi", "bike"]; // list of vehicles By Q.7
    // Q.11 With my way it will appears normally
    if (!isNaN(Type) && Type < Types.length) {
      Type = Types[Type]; // Third Element by adding the index number to the second argument
      Color = colorCar(Color);
      Age = vehicle(Age);
    } else if (typeof((Color || Type || Age) === "undefined") || (Color || Type || Age).match(/all/i)) {
      // For the Advertisment I have add this some lines of code
      Color = "";
      Type = "";
      Age = "";
      newTypes = Types.map((item) => { return item + "s" });
      popy = newTypes.pop();
      newTypes.push(`and ${popy}`);
      return newTypes.join(", ");
    } else {
      console.log("Please Enter A Valid Value");
    }
    console.log(Color, Type, Age);
}
// The output of Q.9 will appear automaticly by calling this function after this line
vehicleType("Blue",5,7);
// Q.10
function ad() {
    // if you call it normally or with "All" string(not case sensetive) it will appeares As an advertisment conosled
    console.log(`Amazing Joe's Garage, we service ${vehicleType()}`);
}
ad();
