const {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
} = require("../challenges/week8");

describe("findNextNumber", () => {
  test("returns the next number after the given number in the array", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });

  // new test: parameters are undefined. function to throw error.
  test("parameters are undefined. function throws error.", () => {
    expect(() => {
      findNextNumber()
    }).toThrow(Error);
  });

  // new test: nums is empty array. function throws error.
  test("nums is empty array. function to throw error", () => {
    expect(() => {
      findNextNumber([], 8)
    }).toThrow(Error);
  });

  // new test: illegal inputs. nums can only array and n can only be an integer.
  test("if inputs are illegal, function to throw error.", () => {
    expect(() => {
      findNextNumber(['a', 'b'], 2)
    }).toThrow(Error);
    expect(() => {
      findNextNumber([1, 2, 3], true)
    }).toThrow(Error);
    expect(() => {
      findNextNumber(['a', 'b'], false)
    }).toThrow(Error);
  })
});

describe("count1sand0s", () => {
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3
    });

    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4
    });

    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0
    });

    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1
    });
  });

  // new test: undefined input.
  test("undefined input provided. function to throw error", () => {
    expect(() => {
      count1sand0s()
    }).toThrow(Error);
  })

  // new test: illegal input. str can only be a string. throws an error.
  test("illegal input. str can only be a string.", () => {
    expect(() => {
      count1sand0s(123456)
    }).toThrow(Error);
    expect(() => {
      count1sand0s(true)
    }).toThrow(Error);
  })

  // new test: a string is provided which does not only contain 1s and 0s. throws an error.
  test("a string is provided which does not only contain 1s and 0s.", () => {
    expect(() => {
      count1sand0s('hello world')
    }).toThrow(Error)
  })
});

describe("reverseNumber", () => {
  test("reverses the digits of a number", () => {
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
  });

  // new test: undefined input
  test("undefined input. function to throw error.", () => {
    expect(() => {
      reverseNumber()
    }).toThrow(Error)
  })

  // new test: type check
  test("illegal input provided. function to throw error.", () => {
    expect(() => {
      reverseNumber(true)
    }).toThrow(Error)
  })
});

describe("sumArrays", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(sumArrays(arrs)).toBe(44); 
    const arrs1 = [[], [4, 1, 2, 2, 1], [0]];
    expect(sumArrays(arrs1)).toBe(10);
  });

  // new test: undefined input
  test("undefined input. function to throw error.", () => {
    expect(() => {
      sumArrays()
    }).toThrow(Error)
  })

  // new test: empty array or sub arrays as input
  test("empy array or empty subarrays as input. if length of flat array is 0, function to throw error.", () => {
    expect(() => {
      sumArrays([])
    }).toThrow(Error);
    expect(sumArrays([1, 2, 2], [])).toBe(5);
    expect(() => {
      sumArrays([[]])
    }).toThrow(Error);
  })

  // new test: type check, type check of subarrays
  test("arrs can only contains integers.", () => {
    expect(() => {
      sumArrays(true)
    }).toThrow(Error);
    expect(() => {
      sumArrays(123456)
    }).toThrow(Error);
    expect(() => {
      sumArrays(['a', 1, 3], [2, 5])
    }).toThrow(Error);
    expect(() => {
      sumArrays(['a', 'b', 'c'], [true, false, false])
    }).toThrow(Error);
  })
});

describe.only("arrShift", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
  });

  // new test: undefined input.
  test("undefined input. function to throw error.", () => {
    expect(() => {
      arrShift()
    }).toThrow(Error)
  });

  // new test: type check
  test("type check. function to throw error if arr is not array.", () => {
    expect(() => {
      arrShift(123456)
    }).toThrow(Error);
    expect(() => {
      arrShift(true)
    }).toThrow(Error);
    expect(() => {
      arrShift('true')
    }).toThrow(Error);
  })
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };

    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
});

describe("getWordFrequencies", () => {
  test("returns the frequencies of each word in a string", () => {
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1
    });
  });
});
