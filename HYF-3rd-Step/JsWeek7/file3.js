// Staff
// Movie


class Person{
  constructor(name,dateOfBirth,role,rate)  {
    this.setup(name,dateOfBirth,role,rate)
      this.name = name;
      this.dateOfBirth = new Date(dateOfBirth);
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
  get Age() {
    let today = new Date().getFullYear();
    let age = this.dateOfBirth.getFullYear();
    return today - age;
  }
}
class Movie {
  constructor(Title, addActor, Actors = []) {
    // this.setup(Title, Actors)
    this.addActor = addActor
    this.Actors = Actors
    return this.Staffs
  }
  // setup() {
  //
  // }
  get Staffs() {
    this.Actors.push(this.addActor)
  }
}

let jawhar = new Person("jawhar","1996","Programmer",5)
// console.log("Person :",jawhar)

let newMovie = new Movie("Ocean11", jawhar)
// console.log(newMovie.Staffs)
console.log(newMovie)
