// Inspired by the lesson.
// Create the following objects: Movies, Staff.

//Fill the following methods:
class Movie {
  constructor(title,stage = null, Directors = [] , Writers = [] , stars = []) {
    this.staff = this.addStaff
    this.Directors = stars;
    this.Writers = Writers;
    this.stars = Directors;
    this.staging(stage,this.staff, Directors , Writers , stars);
    this.title = title;
  }
  staging(stage, staff, Director, Writer, star) {
    this.unstagedArea = [];
    this.staff = staff
    // this.em.push(this.staff)


    if (stage === null) {
        return this.unstagedArea.push(this.staff);
      } else if (stage === "Director") {
        return this.Directors.push(this.staff);
      } else if (stage === "Star") {
        return this.stars.push(this.staff);
      } else if (stage === "Write") {
        return this.Writers.push(this.staff);
      }
    }
    // this.em.push(this.staff)
    // console.log("em",this.em)

  get Stars() {
    return this.stars;
  }
  get Writes() {
    return this.Writers;
  }
  get Director(){
    return this.Directors;
  }
  get Rating() {
    let rates = this.stars.map(rate => { return this.rate });
    rates.concat(this.Writers.map(rate => { return this.rate }));
    rates.concat(this.Directors.map(rate => { return this.rate })).reduce((sum,value)=> {
              return (sum + value) / arr.length
            },0)
    return rates;
  }
  addStaff(stad,stage = null) {
    if (stad instanceof Staff){
      return this.staging(stage, stad)
    } else {
      throw new Error("Please Enter A Valid Value")
    }
  }
  rate(rating) {
    return rating;
  }
  set Employees(employee = []) {

  }
  // ... Add yours :-) Look to IMDB for inspiration
}

class Staff {
  constructor(name, age, role, rate = 0) {
    this.name = name;
    this.date = age;
    this.age = this.getAge(this.date) ;
    this.role = role;
    this.rate = rate;
  }
  getName() {
    return this.name
  }
  getRole() {
    return this.role
  }
  getAge() {
    return new Date().getFullYear() - new Date(this.date).getFullYear()
  }
  // ... Add yours :-) Look to IMDB for inspiration
}

// Initialize the objects
// by pick your favorite movie from http://www.imdb.com/
// and make sure that the following actions work.
let someMovie = new Movie("Some Name","Director")
let jawhar = new Staff("jawhar","1996","Programmer")
let someoneElse = new Staff("ko", "1969", "anything")
let Employees = [
  jawhar, someoneElse
]
someMovie.addStaff(jawhar)
someMovie.addStaff(someoneElse)
console.log("Wow!",someMovie)
console.log(someMovie.Stars.map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = someMovie.Director;
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);
// Be creative with this let's see what you come up with :-)
