/**
 As a user I want to travel by train to a certain city. I can give this program
 the city I depart from and the city I want to arrive at.

 The program should give us the route we need to take, that is: which stations
 we need to go to. For example, if we want to go from Amsterdam to Arnhem it
 should give us [Amsterdam, Utrecht, Arnhem]

 Furthermore it should also tell us the distance of a route and the cost of our
 train ticket. A train ticket costs about 19 eurocents per kilometer
 */

const trainStations = {
    "Amsterdam": 
        {// [latitude, longitude]
         coordinates: [52.3791283, 4.8980833], 
         connections: ["Rotterdam", "Utrecht"]},
    "Rotterdam": 
        {coordinates: [51.92235, 4.4661983], 
         connections: ["Amsterdam", "Utrecht"]},
    "Utrecht":     
        {coordinates: [52.0894444, 5.1077981], 
         connections: ["Amsterdam", "Rotterdam", "Arnhem", "Oberhausen"]},
    "Arnhem": 
        {coordinates: [51.984034, 5.8983483], 
         connections: ["Utrecht", "Oberhausen"]},
    "Oberhausen":
         {coordinates: [51.4983534, 6.8131958],
          connections: ["Arnhem", "Utrecht"]}
};

function latitude(coordinates) {
  return coordinates[0];
}

function longitude(coordinates) {
  return coordinates[1];
}

function metersToKilometers(meters) {
  return meters / 1000;
}

function distanceInMeters(coord1, coord2) {
  const earthRadiusInMeters = 6371000;
  
  function radians(degrees) {
    return (Math.PI / 180) * degrees;
  }
  
  const deltaLatitude = radians(latitude(coord2) - latitude(coord1));
  const deltaLongitude = radians(longitude(coord2) - longitude(coord1));
  const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(radians(latitude(coord1))) *
    Math.cos(radians(latitude(coord2))) *
    Math.sin(deltaLongitude / 2) * 
    Math.sin(deltaLongitude / 2);
  const c = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 2;
  
  return earthRadiusInMeters * c;
}
/*------------------------From Here Begains----------------------------------*/
function distanceBetweenStationsInMeters(station1, station2) {
  return distanceInMeters(station1.coordinates, station2.coordinates);
}
// Doesn't Used
function departure(route) {
  return route[0];
}
// Doesn't Used
function destination(route) {
  return route[route.length - 1];
}

function isInRoute(route, city) {
  return route.includes(city);
}

function updateRoute(route, city) {
  // An Empty slice means { [Copy the Entire Array] }
  const newRoute = route.slice();
  newRoute.push(city);
  return newRoute;
}
// The main Function
function routes(departingCity, destinationCity) {
  if(departingCity === destinationCity) {
    throw "Destination city cannot be the same as departure city."
  }
  // console.log("dddd",departingCity)
  const possibleRoutes = []; // the possible Routes
  function buildRoutes(route) {
    const currentCity = route[route.length - 1];
    const currentStation = trainStations[currentCity];
    // Until Now Nothing clear yet
    // But Following the (route) parameter will Be the key
    currentStation.connections.forEach(connectedCity => {
      if (!isInRoute(route, connectedCity)) {
        // if is't Not in route (updateRoute)
        const updatedRoute = updateRoute(route, connectedCity);
        // slice the entire route and put it into a variable called (updateRout)
        if (connectedCity === destinationCity) {
          // when ever it presses => push it to the (possibleRoutes) then:
          // Stop the presses! We have a route!
          possibleRoutes.push(updatedRoute);
        } else {
          // Otherwise Check Again
          buildRoutes(updatedRoute);
        }
      }
    });
  }
  const startingRoute = [departingCity];
  buildRoutes(startingRoute);
  return possibleRoutes;
}

function routeInKm(route) {
  route.reduce((sub, cur, index, array) => {
    console.log(route)
  })
}


function routeLengthInKilometers(route) {
  if(route.length < 2) {
    return 0;
  } else {
    let totalLengthInKm = 0;
    // console.log(route)
/* The Challenge

Using Reduce instead of For Loop

*/
console.log(route)

    

    for(let index = 0; index < route.length - 1; index++) {
      const currentCity = route[index];
      const currentStation = trainStations[currentCity];
      const nextCity = route[index + 1];
      const nextStation = trainStations[nextCity];
      // Making It Smiple :D
      let destinceInMeters = distanceBetweenStationsInMeters(currentStation, nextStation);
      let destinceInKm = metersToKilometers(destinceInMeters);
      totalLengthInKm += destinceInKm
    }
    // you have to return the (totalLength) NOT (totalLengthInKm)
    return totalLengthInKm;
  }
}

function shortestRoute(routes) {
  if(routes.length === 0) {
    throw "Have to provide at least one route"
  } else {
    let currentShortestRoute = routes[0];
    for(let index = 1; index < routes.length - 1; index++) {
      const route = routes[index];
      if (routeLengthInKilometers(currentShortestRoute) > routeLengthInKilometers(route)) {
        // console.log(routeLengthInKilometers(currentShortestRoute), currentShortestRoute)
        // console.log(routeLengthInKilometers(route), route)
        // You can't Change't if it's Constant
        currentShortestRoute = route;
      }
    }
    return currentShortestRoute;
  }
}

// In (Km) Out (Number)
function routeCostInEuros(route) {
  const pricePerKilometers = 0.19;
  // return Keywork Missed
  return routeLengthInKilometers(route) * pricePerKilometers;
}

const amsterdamArnhemRoutes = routes("Amsterdam", "Arnhem");

// console.log(amsterdamArnhemRoutes);
const shortestAmsterdamArnhemRoute = shortestRoute(amsterdamArnhemRoutes);

console.log(
  "Our route:",
  shortestAmsterdamArnhemRoute,
  "is",
  routeLengthInKilometers(shortestAmsterdamArnhemRoute) + " km",
  ", costing €" + routeCostInEuros(shortestAmsterdamArnhemRoute));
/* Why it Takes the longest Way?
[ [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Arnhem' ],
  [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ],
  [ 'Amsterdam', 'Utrecht', 'Arnhem' ],
  [ 'Amsterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ] ]
55.33081670226421 [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Arnhem' ]
82.97091952503791 [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ]
Our route: [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ] is 82.97091952503791 km , costing €15.764474709757204
*/

/* Better Result there is still shorter Way
[ [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Arnhem' ],
  [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ],
  [ 'Amsterdam', 'Utrecht', 'Arnhem' ],
  [ 'Amsterdam', 'Utrecht', 'Oberhausen', 'Arnhem' ] ]
Our route: [ 'Amsterdam', 'Rotterdam', 'Utrecht', 'Arnhem' ] is 55.33081670226421 km , costing €10.5128551734302
*/