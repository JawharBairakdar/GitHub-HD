
class MovieEmployed {

  constructor(name) {
    this.name = name;
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

}

class Actor extends MovieEmployed {

  addMovie(movie) {
    super.addMovie({role: 'actor', movie});
  }

}

class Director extends MovieEmployed {

  addMovie(movie) {
    super.addMovie({role: 'director', movie});
  }

}

class Movie {

  constructor(name){
    this.name = name;
  }
  
}

const Clooney = new Actor('George Clooney');
const CoenBrothers = new Director('Coen Brothers');

Clooney.addMovie('Ocean 11');
CoenBrothers.addMovie('Is not a Land for Old');

console.log('Cloonie movies:', Clooney.movies);
console.log('Coen Brothers movies:', CoenBrothers.movies);
