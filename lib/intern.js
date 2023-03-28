const employee = require("../lib/employee.js");


class intern extends employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchools() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = intern;