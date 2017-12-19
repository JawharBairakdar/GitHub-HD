// Staff
// Movie


class Person{
  constructor(name,dateOfBirth,role,rate)  {
    this.setup(name,dateOfBirth,role,rate)
      this.name = name;
      this.dateOfBirth = this.getAge(dateOfBirth);
      this.role = role;
      this.rate = rate;
  }
  setup(name,date,role,rate) {
    if (name === undefined || name === null){
      throw new Error("Please Enter Valid Name")
    }
    if (date === undefined || date === null){
      throw new Error("Please Enter Valid Date Of Birth")
    }
    if (role === undefined || role === null){
      throw new Error("Please Enter Valid Role")
    }
  }
  getAge(age) {
    let today = new Date().getFullYear();
    return today - new Date(age).getFullYear();
  }
}


class Movie {
  constructor(Title) {
    this.setup(Title)
    let Actors = [];
    let Directors = [];
    let Writers = [];
    this.Title = Title;
    this.Actors = Actors
    this.Directors = Directors
    this.Writers = Writers
  }
  setup(title) {
    if (title === undefined || title === null) {
      throw new Error("Please Enter a Title")
    }
  }
  set Staffs(staff = {name:"",date:"",role:"",rate:0}) {
    if (staff.role === "Actor") {
      this.Actors.push(staff)
    } else if (staff.role === "Director") {
      this.Directors.push(staff)
    } else if (staff.role === "Writer") {
      this.Writers.push(staff)
    }

  }
  get Rating() {
    this.rating = this.Actors.concat(this.Directors, this.Writers)
    return this.rating.reduce((sum, val ,x , array) => {
      sum += val.rate
      return sum / array.length
    },0)
  }
}

// console.log("Person :",jawhar)
/*
// let jawhar = new Person("jawhar","1996","Director",5)
// let Josh = new Person("Josh","1900","Actor",1)
// let Daan = new Person("Daan","1946","Actor",2)
// let Joost = new Person("Joost","1976","Actor",7)
// let samah = new Person("samah","1997","Actor",10)
//
// let newMovie = new Movie("Ocean11")
// newMovie.Staffs = jawhar
// newMovie.Staffs = Josh
// newMovie.Staffs = Daan
// newMovie.Staffs = Joost
// newMovie.Staffs = samah
//
// console.log(newMovie.Rating)
*/
// console.log(samah)

// console.log(newMovie)
// console.log(newMovie)





// Inspired by the lesson.
// Create the following objects: Movies, Staff.

//Fill the following methods:
class Movies {
  constructor(title) {

    this.Title = title
    let Stars = [];
    let Writers = [];
    let Directors = [];
    this.Stars = Stars
    this.Directors = Directors
    this.Writers = Writers
  }
  set Staffs(actor) {
    // this.staff.push(actor)
    // this.sortingArea()
    if (actor.Role === "Actor") {
      this.Stars.push(actor)
    }

    if (actor.Role === "Writer") {
      this.Writers.push(actor)
    }

    if (actor.Role === "Director") {
      this.Directors.push(actor)
    }
  }
  // sortingArea() {
  //   let item = this.staff
  //     console.log(item)
  //     if (item.Role === "Actor") {
  //       this.Stars.push(item)
  //     }
  //
  //     if (item.Role === "Writer") {
  //       this.Writers.push(item)
  //     }
  //
  //     if (item.Role === "Director") {
  //       this.Directors.push(item)
  //     }
  //
  // }

  getStars() {
    return this.Stars
  }
  getWriters() {
    return this.Writers
  }
  getDirector() {
    return this.Directors
  }
  getRating() {
    this.rating = this.Stars.concat(this.Directors, this.Writers)
    return this.rating.reduce((sum, val ,x , array) => {
      sum += val.Rate
      return sum / array.length
    },0)
  }
  // rate() {
  //
  // }
  // ... Add yours :-) Look to IMDB for inspiration
}
class Staff {
  constructor(name, role, dateOfBirth, rate) {
    this.Name = name
    this.Role = role
    this.dateOfBirth = dateOfBirth
    this.Rate = rate
  }
  getName() {
    return this.Name
  }
  getRole() {
    return this.Role
  }
  getAge() {
    let today = new Date().getFullYear()
    return today - new Date(this.dateOfBirth).getFullYear()
  }
  // ... Add yours :-) Look to IMDB for inspiration
}

let jawhar = new Staff("jawhar","Director","1996", 5)
let Josh = new Staff("Josh","Actor","1900", 2)
let Daan = new Staff("Daan","Actor","1946", 10)
let Joost = new Staff("Joost","Actor","1976", 10)
let samah = new Staff("samah","Actor","1997", 10)

let newMovie = new Movies("Ocean11")
newMovie.Staffs = jawhar
newMovie.Staffs = Josh
newMovie.Staffs = Daan
newMovie.Staffs = Joost
newMovie.Staffs = samah

// console.log("get Stars", newMovie.getStars())
// console.log("new Movie", newMovie.getRating())


// Initialize the objects
// by pick your favorite movie from http://www.imdb.com/
// and make sure that the following actions work.


console.log(newMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = newMovie.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);


// Be creative with this let's see what you come up with :-)
