const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");

// console.log(colors);
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
                "green",
                "blue",
                "pink",
                "red"
            ]
        }
    ])

    .then(function(response) {
        const queryUrl = `https://api.github.com/users/${response.username}`;

        axios.get(queryUrl)
            .then(function(profileInfo){
                console.log(profileInfo.data.name);
        })
            // .then(function(res) {
            //     fs.writeFile(`${response.username}.html`, generateHTML(profileInfo), (err, data) => {
            //         if (err){
            //             throw err;
            //         }
            //         console.log("success");
            //     })
            // })
    })

    // ${data.name}, data.location, etc.