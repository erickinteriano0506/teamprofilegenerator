const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');

const employees = [];

function getInfo (projectTeam) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log("Please enter employees name")
                        return false;
                    }
                }
            }
        ])
}
