class Actor {

  constructor (name = null, date_of_birth = null, nationality = null) {

    this.validateProperties(name, date_of_birth, nationality);

    this.name = name;
    this.date_of_birth = new Date(date_of_birth);
    this.nationality = nationality;

  }

  validateProperties(name, date_of_birth, nationality) {

        if (name === null) {
          throw new Error('Missing name');
        }

        if (date_of_birth === null) {
          throw new Error('Missing date_of_birth');
        }

        if (nationality === null) {
          throw new Error('Missing nationality');
        }
  }

  getAge () {

    let currentYear = new Date().getFullYear();
    return currentYear - this.date_of_birth.getFullYear();

  }

}

class Movie {

    constructor (title = '', actors = []) {
      this.title = title;
      this.actors = actors;
      this.finish = false;
      this.startDate = new Date();


    }

    addActor (actor){

      if (actor instanceof Actor){
        this.actors.push(actor);
      } else {
        throw new Error('Not Actor object passed');
      }

    }
filterOlder(){
this.actors.filter(actor => actor.getAge() )
}

}
const Clooney = new Actor('George', '10/10/1970', 'USA');
const deNero = new Actor("Robert", "12-6-1935", "italian")
const Ocean11 = new Movie ('Ocean11', [Clooney]);
Ocean11.addActor(deNero);


console.log(Ocean11);
