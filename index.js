const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
var pdf = require('html-pdf');
let username;

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
                const userInput = {
                    color: response.color,
                    profileInfo: profileInfo.data
                }
                username = profileInfo.data.login;
                // fs.writeFile(`${username}.html`, generateHTML(userInput), (err, dt) => {
                //     if (err){
                //         throw err;
                //     }
                //     console.log("success");
                // })
                pdf.create(generateHTML(userInput)).toFile(`${username}.pdf`, function(err, res) {
                    if (err) return console.log(err);
                    console.log(res);
                  });
        })
    })

    // how do you get the html doc to save has a pdf?
    // finish updating readme