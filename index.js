const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');
const { ADDRGETNETWORKPARAMS } = require("dns");

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
            },

            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ["Manager", "Intern", "Engineer", "Employee"],
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log("Please enter a role")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: "What is their email?",
                validate: Input => {
                    if(Input) {
                        return true;
                    } else {
                        console.log("Please enter an email")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: "What is their ID?",
                validate: Input => {
                    if(Input) {
                        return true;
                    } else {
                        console.log("Please enter an ID")
                        return false;
                    }
                }
            },
        ])

        .then(answer => {
            if(answer.role === 'Manager') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'office',
                            message: "What is the managers office number?",
                        }
                    ])
                    .then (answer => {
                        const teamManager = new Manager(answer.name, answer.role, ans.email, and.id, answer.officeNumber);
                        employees.push(teamManager);
                        console.log(employees);
                        addTeam();
                    })
            } else if(answer.role === 'Intern') {
                inquirer
                    .prompt ([
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What school are they currently attending?',
                        }
                    ])
                    .then (answer => {
                        const teamIntern = new Intern(answer.name, answer.role, answer.email, answer.id, answer.school);
                        employees.push(teamIntern);
                        console.log(employees);
                        addTeam();
                    })
            } else if(answer.role === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: 'What is their GitHub username?',
                        }
                    ])
                    .then (answer => {
                        const teamEngineer = new Engineer(answer.name, answer.role, answer.email, answer.id, answer.gitHub);
                        employees.push(teamEngineer);
                        console.log(employees);
                        addTeam();
                    })
            } else {
                const teamEmployee = new Employee(answer.name, answer.role, answer.email, answer.id);
                employees.push(teamEmployee);
                addTeam();
            }
        })
} 
