(function(){
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //q.2
    // TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
        let threeLang = users.filter( (user) => {return user.languages.length >= 3});
        console.log(threeLang);

    //q.3
    // TODO: Use .map to create an array of strings where each element is a user's email address
        let emails = users.map( (user) => {return user.email} );
        console.log(emails);

    //q.4
    // TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
        let totalExperience = users.reduce( (totalYears, user) => {return totalYears + user.yearsOfExperience}, 0)
        let averageExperience = totalExperience / users.length;
        console.log(totalExperience);
        console.log(averageExperience);

    //q.5
    // TODO: Use .reduce to get the longest email from the list of users.

        let longestEmail = emails.reduce((longest, email) => {
            if (email.length > longest.length){
                return email;
            }
            return longest;
        }, "");

        console.log("long email reduce: ",longestEmail);

    //q.6
    // TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
        let userList = users.reduce((name, user, index) => {
            if (index === 0){
                return user.name;
            } return name += ", " + user.name;
        }, "");
        console.log("usernames reduce: ",userList);

        const everyone =  users.reduce((name, user) => {
            if (name !== "") {
                name += ", ";
            }
            return name + user.name;
        }, "");

        console.log("log out everyone: ",everyone);

    //BONUS
    // TODO: Use .reduce to get the unique list of languages from the list of users.

    //     let langArrays = users.map((user)=> {return user.languages});
    //     console.log(langArrays);
    //
    //     let flattenLang = langArrays.reduce((acc, lang)=>{
    //         return acc.concat(lang);
    //     },[]);
    //
    //     console.log(flattenLang);
    //
    //     let listedLang = flattenLang.reduce((acc, val) =>{
    //        if (acc.indexOf(val) === -1){
    //            acc.push(val)
    //        }
    //        return acc
    //     }, []);
    //
    //     console.log(listedLang);

        let uniqueLangs = users.reduce((langList, user) => {
            for (let i = 0; i < user.languages.length; i++) {
                if(!langList.includes(user.languages[i])) {
                    langList.push(user.languages[i])
                }
            }
            return langList;
        }, []);

        console.log(uniqueLangs);

        let allLang = users.reduce((lang, user) => {
            user.languages.forEach((language) => {
                if (!lang.includes(language)) {
                    lang.push(language);
                }
            });
            return lang;
        }, []);

        console.log("allLang: ",allLang)

})();