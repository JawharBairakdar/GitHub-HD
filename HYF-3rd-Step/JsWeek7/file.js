
class Movie {
  constructor(name,age,job,rate) {
    this.name = name;
    this.age = this.calcAge(age);
    this.job = job;
    this.rate = rate;
    this.SortingArea(this.Person(name,age,job,rate))
    console.log(this.Staff())
  }
  Person (name,age,job,rate){

  }
  calcAge(date) {
    let birth = new Date(date).getFullYear();
    let currentYear = new Date().getFullYear();
    return currentYear - birth;
  }

  Staff(Actors = [],Directors = [],Writers = [], Done = false) {
    this.Actors = Actors
    this.Directors = Directors
    this.Writers = Writers
  }

  SortingArea(name,age,job,rate) {
    // this For Sorting Jobs Every Kind Of Role Comes Alone
      if (this.job === "Actor") {

        this.Actors.push(this);
      } else {
        this.Done(false)
      }
      if (this.job === "Director") {
         this.Directors.push(this)
       } else {
         this.Done(false)
       }
      if (this.job === "Writer") {
         this.Writers.push(this)
       } else {
         this.Done(false)
       };
  }
}
let jawhar = new Movie("Jawhar","1996","Actor",5)
console.log(jawhar)
// class Person {
//   constructor(name,age,job,rate) {
//     this.name = name;
//     this.age = this.calcAge(age);
//     this.job = job;
//     this.rate = rate;
//   }
//   calcAge(date) {
//     let birth = new Date(date).getFullYear();
//     let currentYear = new Date().getFullYear();
//     return currentYear - birth;
//   }
// }



// class Staff extends Person {
//   constructor(name,age,job,rate) {
//     super(name,age,job,rate);
//     this.Actor = []
//     this.Director = []
//     this.Writer = []
//     if (this.job === "Actor") {
//       this.Actor.push(this)
//     }
//
//   }
//
//   Actors() {
//
//   }
//
//   Directors() {
//
//   }
//
//   Writers() {
//
//   }
// }
//
// let jawhar = new Staff("jawhar","1996","Actor",5)
// console.log(jawhar.Actor)

// class Movie {
//   constructor() {
//
//   }
// }





















// Inspired by the lesson.
// Create the following objects: Movies, Staff.

//Fill the following methods:
// "use strict"
// class Person {
//   constructor(name = null, birthYear = null, lang = null) {
//     this.validator(name, birthYear, lang);
//     this.name = name;
//     this.birthYear = new Date(birthYear).getFullYear();
//     this.lang = lang;
//   }
//   get age () {
//     let curr = new Date().getFullYear();
//     return curr - this.birthYear;
//   }
//   validator(name, birthYear, lang) {
//     if (name === null) {throw new Error("Please enter a name")};
//     if (birthYear === null) {throw new Error("Please enter a year")};
//     if (lang === null) {throw new Error("Please enter a language")};
//   }
// }
// let newPerson = new Person("jack","1900", "En");
// console.log("Wow",newPerson.age);
//
//
// class Stars extends Person {
//   constructor(name, birthYear, lang, AllStars){
//     super(name, birthYear, lang);
//     this.allStars = function AllStars() {
//       let arr = [];
//       return arr.push({
//         name: this.name,
//         age: this.age,
//         lang: this.lang
//       })
//     }
//   }
//   set star(rate) {
//     return supers.push(load(name, birthYear, lang, this.rate = rate))
//   }
// }
//
// console.log(new Stars("jawhar","1996","Arabic"))
// console.log(new Stars("jawhar","1996","Arabic"))
//
//
// class Movies {
//
//
//     stars() {
//
//     }
//     get Stars()  // Person()
//     get Writes() // Person()
//     get Director() // Person()
//     get Rating()
//     set rate()
//     // ... Add yours :-) Look to IMDB for inspiration
// }
//
// class Staff { // Person()
//     getName()
//     getRole()
//     getAge()
//     // ... Add yours :-) Look to IMDB for inspiration
// }
//
// // Initialize the objects
// // by pick your favorite movie from http://www.imdb.com/
// // and make sure that the following actions work.
// console.log(InstanceMovie.getStars().map(actor =>
//   `${actor.getName()} ${actor.getAge()}`)
// );
//
// const director = InstanceMovie.getDirector();
// console.log(`Director: ${director.map(director =>
//   `${director.getName()}`)}`
// );
//     // Be creative with this let's see what you come up with :-)
