const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is your favorite color?",
            name: "fave color",
            choices: [
                "Red",
                "Blue",
                "Green",
                "Orange",
                "Yellow",
                "Purple"
            ]
        }
    ])
    .then(function(response) {
        user = response.name;
        console.log(user);
        $.ajax({
            url: "https://api.github.com/users/" + user,
            method: "GET"
        }).then(function(res){
            console.log(res);
        })
        // const filename = response.name.toLowerCase().split(" ").join("") + ".pdf";
        // fs.appendFile(filename, JSON.stringify(response, null, "\t"), function(err){
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log("success!");
        // })
    });