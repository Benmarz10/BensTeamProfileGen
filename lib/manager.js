const employee = require("../lib/employee.js");


class manager extends employee{
    constructor(name, id, email, Officenumber) {
        super(name, id, email)
        this.Officenumber = Officenumber;
        this.role = 'Manager';
    }
    getOfficenumber() {
        return this.Officenumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = manager;