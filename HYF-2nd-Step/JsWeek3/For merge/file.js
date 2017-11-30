// "use strict";
// With The IIFE Is A Local Scope
// ES6 Block Scope
// {
//     let HackYourFuture;
//     HackYourFuture = 'Fun';
//     console.log("HackYourFuture is:", HackYourFuture);
// }


















let books = [
    { id: 'gone_wind', title: 'Gone with the wind', language: 'english', author: 'Margaret Mitchell', gone_wind: 'https://via.placeholder.com/300X300' },
    { id: 'game_thrones', title: 'Game of thrones', language: 'english', author: 'George R. R. Martin', game_thrones: 'https://via.placeholder.com/300X300' },
    { id: 'love_time_cholera', title: 'Love in the time of Cholera', language: 'english', author: 'Gabriel García Márquez', love_time_cholera: 'https://via.placeholder.com/300X300' },
    { id: 'sherlock_holmes', title: 'Sherlock Holmes', language: 'english', author: 'Arthur Conan Doyle', sherlock_holmes: 'https://via.placeholder.com/300X300' },
    { id: 'da_vinci_code', title: 'Da vinci code', language: 'english', author: 'Dan Brown', da_vinci_code: 'https://via.placeholder.com/300X300' },
    { id: 'azazeel', title: 'Azazeel', language: 'arabic', author: 'Youssef Ziedan', azazeel: 'https://via.placeholder.com/300X300' },
    { id: 'old_man_sea', title: 'Old man and the sea', language: 'english', author: 'Ernest Hemingway', old_man_sea: 'https://via.placeholder.com/300X300' },
    { id: 'origin', title: 'Origin', language: 'english', author: 'Jessica Khoury', origin: 'https://via.placeholder.com/300X300' },
    { id: 'hobbit', title: 'The Hobbit', language: 'english', author: 'J. R. R. Tolkien', hobbit: 'https://via.placeholder.com/300X300' },
    { id: 'thirteen_reasons_why', title: 'Thirteen reasons Why', language: 'english', author: 'Jay Asher', thirteen_reasons_why: 'https://via.placeholder.com/300X300' }
];
let index = 0, textMode = "";
let ul = document.createElement('ul');
function Sorting(id, title, language, author, source) {
    id = books[index]['id'];
    title = books[index]['title'];
    language = books[index]['language'];
    author = books[index]['author'];
    source = books[index][Object.values(id).join("")];
    console.log(source)
    console.log(id, "$", title, "$", language, "$", author, "$", source)
    
    // 
    
    let li = document.createElement("li");
    li.setAttribute("id", id);
    ul.appendChild(li);

    let h4 = document.createElement("h4");
    textMode = document.createTextNode(title);
    h4.appendChild(textMode);

    let p = document.createElement("p");
    textMode = document.createTextNode(author);
    p.appendChild(textMode);

    let span = document.createElement("span");
    textMode = document.createTextNode(language);
    span.appendChild(textMode);

    let img = document.createElement("img");
    img.setAttribute("src", source);
    img.setAttribute("alt", title);

    li.appendChild(h4);
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(p);

        // 

}
for (index; index < books.length; index++) {
    console.log(index);
    // for (prop of Object.keys(books[index])) {
        // console.log(prop);
        
        Sorting();
        
    //     console.log(books[index][prop]);
    // }
}
document.body.appendChild(ul)
// console.log("First",books)
// console.log("Second",books[0])
// console.log("Third",books[0].id)
// console.log("Fourth",books[0]['id'])









/*
// Q.1
const DETECTIVE_CONAN = [
    "roller_coaster",
    "company_president\'s_daughter",
    "valentine",
    "on_location",
    "luxury_liner_serial",
    "kogoro\'s_class_reunion",
    "coffee_shop",
    "mountain_villa_bandaged_man",
    "karaoke_box",
    "conan_edogawa"
];

// Q.2 HTML File
// Q.3
function setup() {
    let ul = document.createElement('ul');
    let li;
    for (let e of DETECTIVE_CONAN) {
        // console.log(e)
        li = document.createElement('li');
        li.setAttribute('id', e);
        ul.appendChild(li);
    }
    
    // Q.4
    const titles = [
        "Roller Coaster Murder Case",
        "Company President's Daughter Kidnapping Case",
        "Valentine Murder Case",
        "On Location, TV Drama Murder Case",
        "Luxury Liner Serial Murder Case",
        "Kogoro's Class Reunion Murder Case",
        "Coffee Shop Murder Case",
        "Mountain Villa Bandaged Man Murder Case",
        "Karaoke Box Murder Case",
        "Conan Edogawa Kidnapping Case"
    ];
    const characters = [
        "Shinichi Kudo",
        "Ran Mouri",
        "Kogoro Mouri",
        "Juzo Megure",
        "Hiroshi Agasa",
        "Ayumi Yoshida",
        "Mitsuhiko Tsuburaya",
        "Genta Kojima",
        "Gin",
        "Vodka"
    ];
    let index = 0;
    let MOVIE_INFO = [];
    let h3, img, p, text;
    for (index; index < DETECTIVE_CONAN.length; index++) { 
        MOVIE_INFO = { id: DETECTIVE_CONAN[index], title: titles[index], languages: ["Englesh", "Japanese"], characters: characters }
        console.log(MOVIE_INFO); // The Solution Inside The Console
        console.log(MOVIE_INFO.id)
        
        // Q.5
        text = document.createTextNode(MOVIE_INFO.title);
        h3 = document.createElement("h3");
        
        h3.appendChild(text);
        console.log(h3);
        li.appendChild(h3);
    }
    
    
    document.body.appendChild(ul);
    
}
setup();

*/
















// let id, tit;
// for (let index = 0; index < DETECTIVE_CONAN.length; index++) {
//     id = DETECTIVE_CONAN[index];
//     tit = titles[index];
//     MOVIE_INFO = {
//         id: {
//             "Title": tit,
//             "Characters": characters,
//             "Languages": ["Englesh", "Japanese"]
//         }
//     };
//     console.log(MOVIE_INFO);
// }
// let ids = "id";







// MOVIE_INFO[DETECTIVE_CONAN[e]] = "Information";

// Q.4
// function MOVIE_INFO(id, title, lang, author) {
    
//     for (title of Object.keys(DETECTIVE_CONAN)) {
//         title = MOVIE_INFO[DETECTIVE_CONAN[title]]
//     }

//     this.id = id;
//     this.title = title;
//     this.lang = lang;
//     this.author = author;

// }
