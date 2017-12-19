class GitHubUser {
  constructor (data){
    Object.assign(this, data);
  }
}

function getUrl (url){
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener('load', function() {
      resolve(JSON.encode(this.responseText));
    })
    req.open('GET', url);
    req.send();
  });
}

getUrl()
