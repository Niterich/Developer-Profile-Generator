const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHtml = require("./generateHTML");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "list",
            message: "What is your favorite color?",
            name: "color",
            choices: [
                "Green",
                "Blue",
                "Pink",
                "Red"
            ]
        }
    ])
    // .then(function({ color }){
    //     // generateHTML();
    // })

    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function(res) {
                console.log(res.data.name)
    //             // fs.writeFile(`${username}.pdf`, JSON.stringify(res), (err, data) => {
    //             //     if (err){
    //             //         throw err;
    //             //     }
    //             //     console.log("success");
    //             // })
            });
    });

    //How do the two js files communicate with each other? how do i reference a function declared in a different js file?

    //once we have user color, how do we use it to generate html in the corresponding color?
        //how do we parse the data from the axios call to populate on this new html page?