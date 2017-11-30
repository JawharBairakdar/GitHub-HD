

// Q.2
let myString = "hello,this,is,a,difficult,to,read,sentence"

// Q.3
console.log(myString);

// Q.4
console.log(myString.length);

// Q.5
let v = myString.replace(/\,/g, " "); // the original one will never change with replace(); method if you know another easiest way let me know please!
myString = v;

// Q.6
console.log(myString);

// Q.7
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
    // Q.7 Followers

        ((theParticularBranch) => {
            // Q.1
            favoriteAnimals.push("turtle");
            // Q.2
            console.log(favoriteAnimals);

            // Q.3
            favoriteAnimals.splice(1, 0, "meerkat");
            // Q.4
            console.log(
                "The Array have to be just like so:",
                "['blowfish','turtle' , 'capricorn', 'giraffe', 'turtle']"
            )
            // Q.5
            console.log(favoriteAnimals);

            // Q.6
            console.log("The array has a length of: ", favoriteAnimals.length);
            
            // Q.7
            favoriteAnimals.splice(3, 1);
            // Q.8
            console.log(favoriteAnimals);

            // Q.9
            favoriteAnimals.indexOf("meerkat");

            // Q.10
            console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));
        })();

