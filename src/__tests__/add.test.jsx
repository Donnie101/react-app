const add = (a, b) => a + b;

const generateGreeting = (name)=> `Hi ${name}`

test('should add two numbers',()=>{
    expect(add(1,1)).toEqual(2)
})

test('should generate a greeting from name',()=>{
    expect(generateGreeting('Mark')).toBe('Hi Mark')
})

