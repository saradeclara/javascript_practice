const {
    sumMultiples,
    areWeCovered,
    isValidDNA
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

    // check day is a string containing a day of the week
    test('day should be a day of the week', () => {
        const staff = [
            { name: "stephen", rota: ["monday", "tuesday"] },
        ];
      expect(() => { areWeCovered(staff, 'stephen') }).toThrow("day should be a day of the week [e.g. Monday, Tuesday,...]")
    });

    // check staff is array of objects
    test('staff should be an array of objects', () => {
      expect(() => {
          areWeCovered(['paul', 'stephen', 'sally'], 'monday')
      }).toThrow("staff should be an array of objects");
    })
    
    // check staff is array of objects, each object has two properties (name and rota)
    test('check staff array is formatted correctly', () => {
        expect(() => {
            areWeCovered([{fullName: 'paul', schedule: ['monday', 'tuesday']}], 'monday')
        }).toThrow("staff not formatted correctly (every obj has 2 props, name and rota)");
    })

    // check the name property is a string and rota property is an array of strings
    test('name prop should be a string and rota prop should be array of strings', () => {
      expect(() => {
          areWeCovered([
              { name: true, rota: false }
          ]).toThrow("name prop should be a string and rota prop should be array of strings")
      })
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

    // 3 or more staff available, true
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

    test('rota should only contain days of the week ', () => {
      expect(() => {
          areWeCovered([{
              name: 'stephen', rota: ['stephen', 'paul', 'sally']
          }], 'monday').toThrow("rota should only contain days of the week");
      })
    })
    
})

describe('isValidDNA', () => {
//   undefined input
test('undefined input.', () => {
  expect(() => {
      isValidDNA()
  }).toThrow("str is required");
});

// type check (should be string)
test('param should be a string', () => {
  expect(() => {
      isValidDNA(123)
  }).toThrow("param should be a string");
  expect(() => {
      isValidDNA(true)
  }).toThrow("param should be a string");
  expect(() => {
    isValidDNA(['D', 'C', 'T', 'A'])
}).toThrow("param should be a string");
})

// check those strings pass (case insensitive)
test("those are valid strings", () => {
    expect(isValidDNA('CGTACAGT')).toBe(true);
    expect(isValidDNA('ACTATTTGCAC')).toBe(true);
    expect(isValidDNA('GATCAACT')).toBe(true);
    expect(isValidDNA('catatagcagact')).toBe(true);
    expect(isValidDNA('actacaaagtt')).toBe(true);
    expect(isValidDNA('gcagtagcagg')).toBe(true);
})
// check those strings do not pass
test('those are not valid strings ', () => {
  expect(isValidDNA('ASDCDSASDF')).toBe(false);
  expect(isValidDNA('ASDCASDGGASDEW')).toBe(false);
  expect(isValidDNA('ASDFSDF')).toBe(false);
  expect(isValidDNA('ASDFASDGFGD')).toBe(false);
  expect(isValidDNA('VDFHERHDGF')).toBe(false);
  expect(isValidDNA('GFDG')).toBe(false);
})

})
