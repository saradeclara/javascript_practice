const { sumDigits, 
        createRange } = require("../challenges/week10");

describe("sumDigits", () => {
    // undefined input
    test("undefined input. function throws error", () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required")
    });
    // input should be number
    test("input should be number", () => {
        expect(() => {
            sumDigits("123")
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits(true)
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits([123])
        }).toThrow("n should be an integer");
        expect(() => {
            sumDigits({int: "123"})
        }).toThrow("n should be an integer");
    });
    // input cannot be float
    test("input should be integer, not float", () => {
        expect(() => {
            sumDigits(123.45)
        }).toThrow("n should be an integer");
    });
    // test with integers (small, big)
    test("test with small integers", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(456)).toBe(15);
        expect(sumDigits(0)).toBe(0);
    })
    // test with big integers
    test("test with big integers", () => {
        expect(sumDigits(197562461267)).toBe(56);
        expect(sumDigits(9007199254740991)).toBe(76);
    })
});

describe("createRange", () => {
    // undefined input
    test("should throw error if input is undefined", () => {
        expect(() => {
            createRange()
        }).toThrow("start is required");
        expect(() => {
            createRange(1)
        }).toThrow("end is required");
    });
    // check type start, end and step are all numbers
    test("should throw error if start, end or step is not a number", () => {
        expect(() => {
            createRange("one", "two", "three")
        }).toThrow("start should be a number");
        expect(() => {
            createRange(1, "two")
        }).toThrow("end should be a number");
    });
    // what if end is never met, returns partial array
    test('should return partial array once end is passed', () => {
        expect(createRange(1,9,3)).toEqual([1, 4, 7, 10]);
    });
    // positive and negative step
    test('createRange(0,8,2) should return [0,2,4,6,8]', () => {
        expect(createRange(0,8,2)).toEqual([0, 2, 4, 6, 8])
    });
    test('createRange(0,-8,-2) should return [0,-2,-4,-6,-8]', () => {
        expect(createRange(0,-8,-2)).toEqual([0, -2, -4, -6, -8])
    });
    // step is not defined
    test('undefined step should default to 1', () => {
        expect(createRange(0,8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        expect(createRange(2,6)).toEqual([2, 3, 4, 5, 6]);
    });
    // float numbers
    test('float numbers', () => {
        expect(createRange(1.1,3.1)).toEqual([1.1, 2.1, 3.1]);
    })
    // start = end
    test('if start = end should return [start]', () => {
        expect(createRange(2,2)).toEqual([2]);
        expect(createRange(3.54, 3.54)).toEqual([3.54]);
        expect(createRange(0,0)).toEqual([0]);
    })
})
