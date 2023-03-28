const Employee = require("../lib/employee");

test("matches input values", () => {
  const employee = new Employee("Ben", 27, "Ben@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});