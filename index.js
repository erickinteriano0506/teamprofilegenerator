const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');

const empolyess = [];

function startApp() {
    inquirer
        .prompt([
            {
                name: 'startApp',
                type: 'confirm',
                message: 'Would you like to make a team?',
            },
        ])
        .then((res, err) => {
            if (err) console.error(err);
            if (res.startApp) {
                addManager();
            } else {
                process.exit();
            }
        });
}