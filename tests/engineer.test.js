const Engineer = require ('../lib/engineer');

test('matches input values', () => {
    const engineer = new Engineer('Bill', 16, 'Billy@email.com', 'billsgithub')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})