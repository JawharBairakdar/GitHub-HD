
function unOrderedList(ul) {
    ul = document.createElement("ul");
    const allTogether = {
    CONAN_IDs: [
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
    ],
    TITLEs: [
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
    ],
    SOURCES: [
        "http://www.detectiveconanworld.com/wiki/images/3/33/TV_Episode_1.jpg",
        "http://www.detectiveconanworld.com/wiki/images/5/51/EP2_Gallery_10.JPG",
        "http://www.detectiveconanworld.com/wiki/images/3/3b/TV_Episode_6.jpg",
        "http://www.detectiveconanworld.com/wiki/images/8/80/TV_Episode_21.jpg",
        "http://www.detectiveconanworld.com/wiki/images/0/00/TV_Episode_22-23.jpg",
        "http://www.detectiveconanworld.com/wiki/images/2/23/TV_Episode_27-28.jpg",
        "http://www.detectiveconanworld.com/wiki/images/e/ed/TV_Episode_32.jpg",
        "http://www.detectiveconanworld.com/wiki/images/a/a7/TV_Episode_34-35.jpg",
        "http://www.detectiveconanworld.com/wiki/images/a/a9/TV_Episode_42.jpg",
        "http://www.detectiveconanworld.com/wiki/images/4/44/TV_Episode_43.jpg"
    ],
    CHARACTERS: [
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
    ],
    LANGUAGE: ["English", "Japanese", "Arabic", "...etc"]
    };

    function s(textMode, id, index, li) {
        textMode = 0;
        id = 0;
        index = 0;
        for (textMode, id, index; (textMode, id, index) < allTogether.CONAN_IDs.length; textMode++ , id++ , index++) {
            li = document.createElement("li");
            li.setAttribute("id", allTogether.CONAN_IDs[index]);
            ul.appendChild(li);

            let h4 = document.createElement("h4");
            textMode = document.createTextNode(allTogether.TITLEs[index]);
            h4.appendChild(textMode);

            let p = document.createElement("p");
            textMode = document.createTextNode(allTogether.CHARACTERS.join(", "));
            p.appendChild(textMode);

            let span = document.createElement("span");
            textMode = document.createTextNode(allTogether.LANGUAGE.join(", "));
            span.appendChild(textMode);

            let img = document.createElement("img");
            img.setAttribute("src", allTogether.SOURCES[index]);
            img.setAttribute("alt", allTogether.TITLEs[index]);

            li.appendChild(h4);
            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(p);
        }
    }
    s();
    document.body.appendChild(ul);
}
unOrderedList();
