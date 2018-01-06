/*
Homework assignment this week:
  1 . Create a single-page application with a text box and a submit button.

  2 . When the user types a github username into the text box, the page should
      (without refreshing) display a list of all repos for that github user,

  3 . as well as the most recent committer's name and photo.

  4 . If a new github username is typed in (and the submit button pressed),
      the page should clear existing contents and replace it with the repo
      information for the newer user.
    Good luck :slightly_smiling_face:
*/



document.forms.userName.addEventListener('click', function(e) {
  document.querySelector("#input").contentEditable = true
  if (e.target.nodeName === "BUTTON") {
    console.log(this.querySelector('h4'))
  } else {
    console.log("nothing has happend")
  }
}, false)






















// document.querySelector('#magicBox').addEventListener('click', function(e) {
//   document.querySelector("#input").contentEditable = true
//   if (e.target.nodeName === "BUTTON") {
//     console.log(this.querySelector('h4'))
//   } else {
//     console.log("nothing has happend")
//   }
// }, false)
//
// let input = document.querySelector("#input");
// input.contentEditable = true
// let btn = document.querySelector("#button");
// function mainRequest() {
//   let main = new XMLHttpRequest();
//   main.open("GET", `https://api.github.com/users/${input.textContent}`);
//   main.onreadystatechange = console.log(main)
//   main.send();
// }
//
// btn.addEventListener("click", mainRequest)
// console.log(input)

/*
  you'll need one http request to get the user's repositories, one request to
  get the commits from that repository, and one request to get information from
  the last committer's user profile. Making your code not too complicated (and
  tangled like spaghetti) is part of the challenge!
*/
