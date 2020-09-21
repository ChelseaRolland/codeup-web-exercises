(function(){
    "use strict";

    function githubPromise (username) {
        let githubRepoURL = `https://api.github.com/users/${username}/events/public`;
        fetch(githubRepoURL, {headers: {'Authorization': gitRepoToken}})
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                let html = "";
                let commitArray = [];
                $("#commit").empty();

                data.forEach(info => {
                    if (info.type === "PushEvent") {
                        commitArray.push(info)
                    }
                });
                    console.log("full data list: ",commitArray);
                    let last = commitArray[0].payload.commits.pop();
                    let lastMessage = last.message;
                    console.log("last element of array: ",last);
                    console.log("last message: ",last.message);
                    console.log("last message: ",lastMessage);

                    let repository = commitArray[0].repo.name;
                    let username = commitArray[0].actor.login;
                    let time = new Date (commitArray[0].created_at);

                    html += `<p><strong>User:</strong> ${username}</p>` +
                        `<p><strong>Repository:</strong> ${repository}</p>` +
                        `<p><strong>Most Recent Commit:</strong> ${lastMessage}</p>` +
                        `<p><strong>Time:</strong> ${time}</p>`

                    $("#commit").append(html);

            })
                    .catch(error => console.log(error));

    }

    $("#user").click(function(e){
        e.preventDefault();
        let userInput = $("#userInput").val().trim();
        if (userInput !== ""){
            githubPromise(userInput);
            $("#userInput").val("");
        }
    });

    $("#userInput").keypress(function(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            let userInput = $("#userInput").val().trim();
            if (userInput !== "") {
                githubPromise(userInput);
                $("#userInput").val("");
            }
        }
    });

    $("#refresh").click(function(){
        window.location.reload();
    });

})();