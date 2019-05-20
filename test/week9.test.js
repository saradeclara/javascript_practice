const { 
    sumMultiples
} = require("../challenges/week9");

describe("sumMultiples", () => {
     // function to throw error
     test("undefined input. error expected.", () => {
        //  illegal input: undefined input
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        // illegal input: string
        expect(() => {
            sumMultiples("foo");
        }).toThrow("an array is required");
        // illegal input: number
        expect(() => {
            sumMultiples(5);
        }).toThrow("an array is required");
        expect(() => {
            sumMultiples(['sara', 'hello']);
        }).toThrow("an array of numbers is required");
    })
    // array with 1, 3, 5 to equal 8
    test("array with 1, 3, 5 to equal 8", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    // decimal numbers 
    test("it works ok with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    })
    // array with no multiples to return 0
    test("array with no multiples to return 0", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    })
    // wrong type input (should be array)
    // wrong type output (should be number)
   
})