const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
let username;
let data;

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
                data = profileInfo.data;
                username = data.login;
                console.log(data);
                fs.writeFile(`${username}.html`, generateHTML(profileInfo), (err, dt) => {
                    if (err){
                        throw err;
                    }
                    console.log("success");
                })
        })
            // .then(function(res) {
                
            // })
    })

    // ${data.name}, data.location, etc.
