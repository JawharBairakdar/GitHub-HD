/* A program That is an edition to the old program with Promises And New Features
      Make A New Callback Function That Contains:
        (XMLHttpRequest)s
      Make A New container Class for Each of the Elements That we have there
*/
// we will take the user name we want to match around
// and the userName that is the user is searching
// Becuase it's alot of expensive requests For the
// server and the token or The password offcourse

/* the Member class
    this class is to contain the details that generated from the request
    function (XHREveryWhere()) and setting the arguments that supose to
    get into the request function makeing my life with it Easier

    it have to return one of those (userDetails, userRepos, reposCommites)
    <!--JUST NO MORE-->

    Example:
    Member("userNameToMatch", "userNameTheMatcher", "token")

*/



/*  This Member class Object
      it will recieve the Information from the DOM and translate them into a new
      Object that is reusable to my Function XHREveryWhere()

      if (Member userName input contains a details && Member userName input contains a details)
        return thim back to the new Object that is made
*/
const githubAPI = ["https://api.github.com"];
class user {
  constructor (input) {
    this.name = input;
    this.repos = []
    // from the InputBox(DOM) if the inpust is not Empty Just return the username and the token
    // as an object properties
    /*
    SOME (DOM) ELEMENTS
    */
  }
  get userDetails () {
    let url = githubAPI.slice();
    url.push("users",this.name);
    let repos = url.slice()
    repos.push("repos");
    // console.log(url)
    return {
      user_url: url.join("/"),
      repos_url: repos.join("/")
      // repoCommit: this.repoCommits()
    };
  }
  // when Ever the userDetails is Ready we can set the repos one by one
  set repo (repoName) {
    return this.repos.push(repoName);
  }
}

// function XHREveryWhere(url,callback,details) {
//   let request = new XMLHttpRequest();
//   request.onreadystatechange = () => {
//     if (request.readyState === XMLHttpRequest.DONE){
//       console.log("I have something",request)
//       if (request.status === 200) {
//         callback(JSON.parse(request.responseText))
//       } else {
//         console.log("From Here",details)
//         console.log(request.statusText,request.status)
//       }
//     }
//   }
//   request.open("GET",url);
//   if (details) {
//     if (details.userName && details.userToken) {
//       request.setRequestHeader("Authorization", "Basic " + btoa(`${details.userName}:${details.userToken}`));
//     }
//   }
//   request.send();
// }

let details = new user("JawharBairakdar");
console.log(details.userDetails)
// XHREveryWhere(details.userDetails.user_url,(X)=>{
//   console.log("SomeThing",X)
// },details)

// console.log(details)
console.log("last console.log")
