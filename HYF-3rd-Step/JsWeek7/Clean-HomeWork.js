

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
    return this.rating.reduce((sum, val) => {
      sum += val.Rate
      return sum
    },0) / this.rating.length;
  }
  rate() {
    return this.getRating()
  }
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

let Michael_Cuesta = new Staff("Michael Cuesta","Director","1963", 5)
let Edward_Zwick = new Staff("Edward Zwick","Writer","1952", 5)
let Marshall_Herskovitz = new Staff("Marshall Herskovitz","Writer","1952", 10)
let Dylan_Brien = new Staff("Dylan O'Brien","Actor","1991", 10)
let Charlotte_Vega = new Staff("Charlotte Vega","Actor","1994", 10)
let Christopher_Bomford = new Staff("Christopher Bomford","Actor","1996", 10)
let Chris_Webster = new Staff("Chris Webster","Actor","1998", 10)
let Shahid_Ahmed = new Staff("Shahid Ahmed","Actor","2000", 10)

let American_Assassin  = new Movies("American Assassin ")
 American_Assassin.Staffs = Michael_Cuesta
 American_Assassin.Staffs = Edward_Zwick
 American_Assassin.Staffs = Marshall_Herskovitz
 American_Assassin.Staffs = Dylan_Brien
 American_Assassin.Staffs = Charlotte_Vega
 American_Assassin.Staffs = Christopher_Bomford
 American_Assassin.Staffs = Chris_Webster
 American_Assassin.Staffs = Shahid_Ahmed

// Initialize the objects
// by pick your favorite movie from http://www.imdb.com/
// and make sure that the following actions work.


console.log( American_Assassin.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director =  American_Assassin.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);


// Be creative with this let's see what you come up with :-)
