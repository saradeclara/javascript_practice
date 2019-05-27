const { sumDigits } = require('../challenges/week10');

describe('sumDigits', () => {
    // undefined input
    test('undefined input. function throws error', () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required")
    });
    // input should be number
    test('input should be number', () => {
        expect(() => {
            sumDigits('123')
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits(true)
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits([123])
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits({int: '123'})
        }).toThrow("n should be an integer");
    });
    // input cannot be float
    test('input should be integer, not float', () => {
        expect(() => {
            sumDigits(123.45)
        }).toThrow("n should be an integer");
    });
    // test with integers (small, big)
    test('test with small integers', () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(456)).toBe(15);
        expect(sumDigits(0)).toBe(0);
    })
    // test with big integers
    test('test with big integers', () => {
        expect(sumDigits(197562461267)).toBe(56);
        expect(sumDigits(9007199254740991)).toBe(76);
    })
});
