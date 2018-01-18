/*  the class is the generator for the main user links
the input value have to be a user name who we want to show 
his details in the program

the output is an object that contains:
  user login name and his api url, user name , user avatar, user bio, user repos url
  And an Array that contains:
    repos Names + last commit + last Commiter Name + last Committer Avatar + last commit Date
*/

const githubAPI = ["https://api.github.com"];
class user {
  constructor(input) {
    let url = githubAPI.slice()
    url.push("users", input);

    this.login = input;
    this.user_url = url.join("/");
    this.repos_url = null;
    this.avatar_url = null;
    this.name = null;
    this.bio = null;
    this.repos = null;
  }
}


let mainBox = document.querySelector("#mainBox");
let descripBox = mainBox.querySelector(".descripBox");
let userAvatar = mainBox.querySelector(".userAvatar");
let table = mainBox.querySelector("table");
let Input = mainBox.querySelector("input");
let user_name = Input.nextElementSibling;
let token = user_name.nextElementSibling;
let button = mainBox.querySelector("button");
console.log(user_name,token)
/* get Function it will retur a promise that is the responseText
from the request url
it will reject the request at all or it will return a resolved parsed responseText
*/
function get(url) {
  let req = new XMLHttpRequest();
  req.open("GET", url);
  if (user_name.value && token.value) {
    req.setRequestHeader("Authorization", "Basic " + btoa(user_name.value + ":" + token.value));
  }
  req.send()
  return new Promise((resolve, reject) => {
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          resolve(JSON.parse(req.responseText))
        } else {
          reject(req)
        }
      }
    }  
  })
}

// cleaner Function for clean any element from it childNodes
function cleaner(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild)
  }
}

button.addEventListener("click", () => { 
  cleaner(table)
  if (descripBox.getAttribute("class").includes("hide")) {
    descripBox.setAttribute("class", "descripBox")
  }
  let newUser = new user(Input.value)
  get(newUser.user_url).then(res => {
    // first Get is for main Information
    // should return the repos URLs
    newUser.name = res.name;
    newUser.repos_url = res.repos_url;
    newUser.avatar_url = res.avatar_url;
    newUser.bio = res.bio;
    return newUser.repos_url;
  }).then(reposReq => {
    // second Get Is For the repositories Names
    // the (reposReq) is the repos url that is returned from first get
    // and this one at the end should return the commits URLs
      get(reposReq).then(response => {
        let reposDetails = response.map(item => {
          let commit = item.commits_url.replace(/\{\/\w+\}/, "");
          let repoName = item.name;
          let repos = newUser.repo;
          repos = {
            name: repoName,
            commits_url: commit,
            lastCommit: null
          };
          return repos
        })
        return reposDetails;
      }).then(commitsReq => {
          // (commitsReq) is an array that includes the repositories details
          // .map is for make a request for each commit
          commitsReq.map(item => {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = item.name;
            tr.appendChild(td)
            get(item.commits_url).then(response => {
              let commit = response[0].commit;
              let msg = commit.message;
              let committer = response[0].author.login;
              let avatar = response[0].author.avatar_url;
              let date = new Date(commit.author.date).toDateString();
              
              return item.lastCommit = {
                lastCommitMessage: msg,
                committer: committer,
                committerAvatar: avatar,
                date: date
              };
            }).then(commitsRes => {
              // the DOM Work below this line
              // last Commit Msg
              td = document.createElement("td");
              td.textContent = commitsRes.lastCommitMessage;
              tr.appendChild(td)
              // Committer Name
              td = document.createElement("td");
              td.textContent = commitsRes.committer;
              tr.appendChild(td)
              // Committer Image
              td = document.createElement("td");
              let committerAvatar = document.createElement("img");
              committerAvatar.src = commitsRes.committerAvatar;
              td.appendChild(committerAvatar)
              tr.appendChild(td)
              // Commit Date
              td = document.createElement("td");
              td.textContent = commitsRes.date;
              tr.appendChild(td)
              // the DOM Work above this line
              }).catch(e => { // if a commit request rejected
              console.log(e.statusText, e.status, e.responseURL)
            })
            table.appendChild(tr)
          })// .map()
          newUser.repos = commitsReq
        }).catch(e => { // if the repos Request Rejected
          console.log(e)
        })
        cleaner(descripBox)
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        h3.textContent = newUser.name;
        p.textContent = newUser.bio;
        userAvatar.src = newUser.avatar_url;
        let userName = descripBox.appendChild(h3);
        let userBio = descripBox.appendChild(p);
    }).catch(e => { // if the main request Rejected
      if (e.status) {
      cleaner(descripBox)
        let h1 = document.createElement("h1");
        h1.textContent = `${e.status} ${e.statusText}`
        userAvatar.src = "https://via.placeholder.com/200X200";  
        descripBox.appendChild(h1)
      }
    })
}, false) // the Event listener