const {
    sumMultiples,
    areWeCovered
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

})

describe("areWeCovered", () => {
    // empty array
    test("returns false if there are no staff available (empty array)", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    // illegal input, staff should be array of objects, day should be a string
    test("check that staff is an array of objects and that day is a string", () => {
        const staff = [
            { name: 'stephen', rota: ['tuesday', 'monday']}
        ]
        expect(() => { areWeCovered(123456, "Monday") }).toThrow("staff should be an array");
        expect(() => { areWeCovered('paul', "Monday") }).toThrow("staff should be an array");
        expect(() => { areWeCovered(true, "Monday") }).toThrow("staff should be an array");
        expect(() => { areWeCovered(staff, 123) }).toThrow("day should be a string");
        expect(() => { areWeCovered(staff, false) }).toThrow("day should be a string");
        expect(() => { areWeCovered(staff, ['monday']) }).toThrow("day should be a string");
    })
    // check it returns false if less than 3 available staff
    test("returns false if there are less than 3 scheduled staff on a day", () => {
        const staff = [
            { name: "stephen", rota: ["monday", "tuesday"] },
            { name: "paul", rota: ["monday", "tuesday"] }, 
            { name: "sally", rota: ["monday", "tuesday"] },
            { name: "jess", rota: ["monday", "tuesday"] }
        ];
        expect(areWeCovered(staff, "wednesday")).toBe(false);
        expect(areWeCovered(staff, "saturday")).toBe(false);
    });

    // 3 staff available, true
    test("returns true if there is available staff (3 or more)", () => {
        const staff = [
            { name: "stephen", rota: ["monday", "tuesday"] },
            { name: "paul", rota: ["monday", "tuesday"] }, 
            { name: "sally", rota: ["monday", "tuesday"] },
            { name: "jess", rota: ["monday", "tuesday"] }
        ];
        expect(areWeCovered((staff), "Monday")).toBe(true);
    });
            // 3 staff available, true
    test("returns true if there is available staff (3 or more)", () => {
        const staff = [
            { name: "stephen", rota: ["monday", "tuesday"] },
            { name: "paul", rota: ["monday", "tuesday"] }, 
            { name: "sally", rota: ["wednesday", "tuesday"] },
            { name: "jess", rota: ["saturday", "friday"] }
        ];
        expect(areWeCovered((staff), "Tuesday")).toBe(true);
    });
    // test case insensitive for day of the week
    test("day parameter should be case insensitive", () => {
        const staff = [
            { name: "stephen", rota: ["monday", "tuesday"] },
            { name: "paul", rota: ["monday", "tuesday"] }, 
            { name: "sally", rota: ["monday", "tuesday"] },
            { name: "jess", rota: ["monday", "tuesday"] }
        ];
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });
})