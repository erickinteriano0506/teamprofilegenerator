const Employee = require("./Employee");

class Intern extends Employee {
    contrustor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;