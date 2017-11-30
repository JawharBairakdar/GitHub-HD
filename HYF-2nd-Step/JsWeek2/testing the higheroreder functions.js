/*
    Higher Order Functions
        Filter:
            Function on the Arrays That accept another function as it argument wich it will used to return a new version of the array
            it's a method in the array object
        Map:
            Just like filter, Map is another Higher Order Function also like filter it goes throgh in an array But unlike filter it »
            doesn't throgh the objects away instead it transforms them
        REVIEW:
            All Of These Common They Transform A List Into Something Else ^^
                Map     Will Take An Array And Transform That Into An Array Of The Same Length But With Each Individual Item Transform.
                Filter  Transforms Array Into A Smaller Array.
                Reject  Does The Same As FILTER But Inverted.
                Find    Same As FILTER But Only Returns The First Item >> So That's Transforms Array Into A Single Item.
            MAP FILTER REJECT And Find Are All List Transformations They Turn Your List Into Something Else BUT They Are All Pretty »
            Specific REDUCE is NOT.
        Reduce:
            reduce is the multi tool on list transformations it can be used to express any list transformation infact you can use it »
            to implement function like Math Further reject or Find OR any Other list transformation
            Just like the others it takes a callback function BUT it takes also an object (starting point) like so:
                [Array].reduce( (callMeBack) => {} , startPoint );
*/
function reduceMDNSyntax() {
    /*
    SyntaxEdit  (FROM MDN) >>
        arr.reduce(callback[, initialValue])

        Parameters
            callback
                Function to execute on each element in the array, taking four arguments:
            accumulator
                The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
            currentValue
                The current element being processed in the array.
            currentIndex
                The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
            array
                The array reduce was called upon.
            initialValue
                [Optional] Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty array without an initial value is an error.
        Return value
            The value that results from the reduction.
    */
    const total = [0, 1, 2, 3, 1, 4, 1, 7, 3, 2, 55, 1].reduce(function(sum, val, ind, arr) {
        console.log("The Sum:  ",sum);
        console.log("The Val:  ",val);
        console.log("The Index:",ind);
        console.log("The Array:",arr);
        return sum + val;
    }, 0);
    // total is 80
    console.log(total);
}

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
function reducedOrders() {
    var totalAmount = orders.reduce(function(sum, order) {
        return sum + order.amount;
    }, 0);
    console.log(totalAmount);
}
reducedOrders()
function looppedOrders() {
    var totalAmount = 0;
    for (var i = 0; i < orders.length; i++) {
        totalAmount += orders[i].amount;
    }
    console.log(totalAmount);
}




















//  All About Filter && Map
var animals = [
    { name:'Fluffykins',    species: 'rabbit' },
    { name:'Caro',          species: 'dog' },
    { name:'Hamilton',      species: 'dog' },
    { name:'Harold',        species: 'fish' },
    { name:'Ursula',        species: 'cat' },
    { name:'Jimmy',         species: 'fish' }
];


console.log(animals.map((names)=>names.name)); // MAP Is Not Just Like That
console.log(animals.map((names)=>names.name));





//  Start Filter Testing
function filteredDogs() {
    console.groupCollapsed("Filtered Dogs");
        console.log('First\n',animals);
        var dogs = animals.filter(
            function(animal) {
                return animal.species === 'dog';
            }
        );
        console.log('Last\n',animals);
        console.log('Dogs\n',dogs);
    console.groupEnd();
}
function looppedDogs() {
    console.groupCollapsed("For Loop");
        console.log('First\n',animals);
        let dogs = [];
        for (let i = 0; i < animals.length; i++) {
            if(animals[i].species === 'dog') {
                dogs.push(i , animals[i]);
                
            }
        }
        console.log('Last\n',animals);
        console.log('Dogs\n',dogs);
    console.groupEnd();
}
//  Start Map Testing
function mappedNames() {
    console.groupCollapsed("Mapped Names");
        console.log('First\n',animals);
        var names = animals.map(
            function(animal) {
                return animal.name;
            }
        )
        console.log(names);
        console.log('Last\n',animals);
    console.groupEnd();
}
function looppedNames() {
    console.groupCollapsed("Loopped Names");
        console.log('First\n',animals);
        var names = [];
        for (var i = 0; i < animals.length; i++) {
            names.push(animals[i].name);
        }
        console.log(names);
        console.log('Last\n',animals);
    console.groupEnd();
}