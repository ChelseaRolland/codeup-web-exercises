(function(){
    "use strict";

    // let gitRepoUrl = "https://api.github.com/users/chelsearolland/received_events";
    // let gitRepoUrl = "https://api.github.com/repos/chelsearolland/codeup-web-exercises/commits";
    let gitRepoUrl = "https://api.github.com/users/chelsearolland/repos"; // WORKS
    // let gitRepoUrl = "https://api.github.com/users/chelsearolland/repos/search/commits"; DOESNT WORK
    // let gitRepoUrl = "https://api.github.com/users/chelsearolland/search/commits"; DOESNT WORK
    // let gitRepoUrl = "https://api.github.com/search/commits"; DOESNT WORK
    // let gitRepoUrl = "https://api.github.com/repos/chelsearolland/codeup-web-exercises/commits";
    // let gitRepoUrl = "https://api.github.com/users/chelsearolland/received_events";
    // let gitRepoUrl = "https://api.github.com/users/chelsearolland/received_events";

    // /repos/:owner/:repo/commits

    fetch(gitRepoUrl, {headers: {'Authorization': gitRepoToken}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(info => {
                console.log(info.name)
            });
        })
        .catch(error => console.log(error));


    function githubPromise (username) {
        // let githubRepoURL = `https://api.github.com/users/${username}/repos`;
    }

})();