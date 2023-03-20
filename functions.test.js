const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('return two', () => {
    expect(returnTwo()).toEqual(2)
})

test("should return 'Hello, name'", () => {
    expect(greeting('James')).toEqual('Hello, James')
})


describe('Math functions', () => {
    test('Should add up the two numbers', () => {
        expect(add(5,4)).toEqual(9)
    })
    test('Should subtract the two numbers', () => {
        expect(subtract(10,6)).toEqual(4)
    })
    test('Should multiply the two numbers', () => {
        expect(multiply(5,4)).toEqual(20)
    })
    test('Should divide the two numbers', () => {
        expect(divide(30,6)).toEqual(5)
    })
})