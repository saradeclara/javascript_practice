const { 
    sumMultiples
} = require("../challenges/week9");

describe("sumMultiples", () => {
    // array with 1, 3, 5 to equal 8
    test("array with 1, 3, 5 to equal 8", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    })
    // array with 2, 4, 6 to throw Error (no numbers are multiple of 3 or 5)
    // wrong type input (should be array)
    // wrong type output (should be number)
    // undefined input
})