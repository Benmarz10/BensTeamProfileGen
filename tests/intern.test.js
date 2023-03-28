const Intern = require ('../lib/intern');

test('matches input values', () => {
    const intern= new Intern('Caden', 73, 'Caden@email.com', 'Hardknocks School')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})