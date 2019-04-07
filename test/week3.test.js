const {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
} = require("../challenges/week3");

describe("camelCaseWords", () => {
  test("camel cases elements in an array. all items are capitalized.", () => {
    expect(camelCaseWords(['The', 'Quick', 'Brown', 'Fox'])).toBe('theQuickBrownFox')
  });

  test("camel cases elements in an array. all items are uppercase.", () => {
    expect(camelCaseWords(['THE', 'QUICK', 'BROWN', 'FOX'])).toBe('theQuickBrownFox')
  });

  test("camel cases elements in an array. all items are lowecase.", () => {
    expect(camelCaseWords(['the', 'quick', 'brown', 'fox'])).toBe('theQuickBrownFox')
  });

  test("camel cases elements in an array. items are lowercase, uppercase, capitalized.", () => {
    expect(camelCaseWords(['THE', 'quick', 'Brown', 'FOX'])).toBe('theQuickBrownFox')
  });

  test("illegal input (integer). function to throw error.", () => {
    expect(() => {
      camelCaseWords(123);
    }).toThrow(Error);
  });

  test("illegal input (boolean). function to throw error.", () => {
    expect(() => {
      camelCaseWords(true);
    }).toThrow(Error);
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      camelCaseWords();
    }).toThrow(Error);
  });
// 
  test("empty array. function to throw error.", () => {
    expect(() => {
      camelCaseWords([]);
    }).toThrow(Error);
  });

  test("camel cases a single word (i.e. no capital letter at beginning)", () => {
    expect(camelCaseWords(["my"])).toBe("my");
  });

  test("camel cases two words (i.e. second word is capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
  });

  test("camel cases two+ words (i.e. all words after 1st are capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
    expect(camelCaseWords(["my", "variable", "name"])).toBe("myVariableName");
    expect(camelCaseWords(["is", "unique"])).toBe("isUnique");
    expect(camelCaseWords(["is", "higher", "than", "min", "number"])).toBe(
      "isHigherThanMinNumber"
    );
  });
});

describe("getSquares", () => {
  test("illegal input (string). function to throw error.", () => {
    expect(() => {
      getSquares('twenty');
    }).toThrow(Error);
  });

  test("returns an empty array if empty array passed", () => {
    expect(getSquares([])).toEqual([]);
  });

  test("throws an error if an array of strings passed", () => {
    expect(() => {
      getSquares(['twenty', 'fifty', 'three']);
    }).toThrow(Error);
  })

  test("returns an array of squares of the original numbers", () => {
    expect(getSquares([2, 4, 6])).toEqual([4, 16, 36]);
    expect(getSquares([2, 4, 6, 1])).toEqual([4, 16, 36, 1]);
    expect(getSquares([2, 3, 6, 7, 12, 4])).toEqual([4, 9, 36, 49, 144, 16]);
    expect(getSquares([54, 24, 5, 66, 992])).toEqual([
      2916,
      576,
      25,
      4356,
      984064
    ]);
  });
});

describe("getTotalSubjects", () => {
// undefined input
test("undefined input. function to throw an error.", () => {
  expect(() => {
    getTotalSubjects();
  }).toThrow(Error);
})
// empty array
test("empty array. function to throw an error.", () => {
  expect(() => {
    getTotalSubjects([]);
  }).toThrow(Error);
})
// values inside subjects array are not string
test("at least one subjects property (array) does not contain strings. function to throw an error.", () => {
  expect(() => {
    getTotalSubjects([
      { name: "Billy", subjects: [1,2,3] },
      { name: "Claude", subjects: [true, false] },
      { name: "Aneeta", subjects: ['maths', 'science'] }
    ])
  }).toThrow(Error);
})


  test("returns 0 if no people have subjects", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: [] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(0);
  });

  test("returns 1 if 1 person has a subject", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: ["chemistry"] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(1);
  });

  test("returns the correct number of subjects studied in total for all people", () => {
    const people = [
      { name: "Billy", subjects: ["welsh", "spanish"] },
      { name: "Claude", subjects: ["chemistry", "biology", "music"] },
      { name: "Aneeta", subjects: ["physics", "maths", "computing", "music"] }
    ];
    expect(getTotalSubjects(people)).toBe(9);
  });
});

describe("checkIngredients", () => {
 
  // undefined input
  test("undefined input. function to throw error.", () => {
    expect(() => {
      checkIngredients();
    }).toThrow(Error);
  })
 
  // menu.name is empty
  test("name property is empty. function to throw error.", () => {
    const menu = [
      {
        name: '',
        ingredients: ['flour', 'eggs', 'milk', 'vanilla bean']
      }
    ]
    expect(() => {
      checkIngredients(menu, 'milk');
    }).toThrow(Error);
  })

  // menu.ingredients is empty
  test("ingredients property is empty. function to throw error.", () => {
    const menu = [
      {
        name: 'Victoria Sponge Cake',
        ingredients: ''
      }
    ]
    expect(() => {
      checkIngredients(menu, 'eggs');
    }).toThrow(Error);
  })

   // every menu item should have name and ingredients
   test("ingredients property missing. every menu item should have name and ingredients properties", () => {
    const menu = [
      {
        name: 'Victoria Sponge Cake',
        dish: 'Dessert'
      }
    ]
    expect(() => {
      checkIngredients(menu, 'dark chocolate');
    }).toThrow(Error);
  })

  test("name property missing. every menu item should have name and ingredients properties", () => {
    const menu = [
      {
        ingredients: ['dark chocolate', 'milk', 'caster sugar'],
        dish: 'Dessert'
      }
    ]
    expect(() => {
      checkIngredients(menu);
    }).toThrow(Error);
  })

  // menu.name can only be a string
  test("menu.name can only be a string", () => {
    const menu = [
      {
        name: true,
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      }
    ]
    expect(() => {
      checkIngredients(menu, "egg yolk");
    }).toThrow(Error);
  });

  // menu.ingredients can only be an array
  test("menu.ingredients can only be an array", () => {
    const menu = [
      {
        name: 'tofu fritters',
        ingredients: 'tofu'
      }
    ]
    expect(() => {
      checkIngredients(menu, "tofu");
    }).toThrow(Error);
  });

  // menu.ingredients can only contain strings
  test("menu.ingredients can only be an array of strings.", () => {
    const menu = [
      {
        name: 'tofu fritters',
        ingredients: [1,2,3,4,5,6]
      }
    ]
    expect(() => {
      checkIngredients(menu, 'egg yolk');
    }).toThrow(Error);
  });

  // menu (parameter) can only be an object
  test("menu (parameter) can only be an object.", () => {
    const menu = 'chocolate cake';
    expect(() => {
      checkIngredients(menu, 'dark chocolate');
    }).toThrow(Error);
  })

  // ingredient (parameter) can only be a string
   test("ingredient (parameter) can only be a string.", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      }
    ]
    expect(() => {
      checkIngredients(menu, 123);
    }).toThrow(Error);
  })

  test("returns false if no menu items include the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "milk")).toBe(false);
  });

  test("returns true if a menu item includes the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "dark chocolate")).toBe(true);
  });
});

describe("duplicateNumbers", () => {

  test.only("undefined input. function to throw an error.", () => {
    expect(() => {
      duplicateNumbers();
    }).toThrow(Error);
  })

  test.only("arr1 missing. function to throw an error.", () => {
    expect(() => {
      let arr2 = [2, 34, 65];
      duplicateNumbers(arr2);
    }).toThrow(Error);
  });

  test.only("arr2 missing. function to throw an error.", () => {
    expect(() => {
      let arr1 = [2, 34, 65];
      duplicateNumbers(arr1);
    }).toThrow(Error);
  });

  // both inputs are arrays
  test.only("arr1 and arr2 need to be arrays.", () => {
    let arr1 = 4;
    let arr2 = 3;
    expect(() => {
      duplicateNumbers(arr1,arr2);
    }).toThrow(Error);
  });

  // both inputs are arrays of integers
  test.only("arr1 and arr2 need to be arrays of integers.", () => {
    let arr1 = ['one', 'two'];
    let arr2 = [3, 4];
    expect(() => {
      duplicateNumbers(arr1, arr2);
    }).toThrow(Error);
  });

  test.only("arr1 and arr2 need to be arrays of integers.", () => {
    let arr2 = ['one', 'two'];
    let arr1 = [3, 4];
    expect(() => {
      duplicateNumbers(arr1, arr2);
    }).toThrow(Error);
  });

  test.only("returns an array of numbers which appear in both arr1 and arr2", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0];
    expect(duplicateNumbers(arr1, arr2)).toEqual([55]);

    arr1 = [6, 4, 2, 4, 1, 9];
    arr2 = [1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1]);
  });

  test.only("returns the duplicate numbers in ascending order", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0, 1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 55]);

    arr1 = [1, 5, 88, 6, 7, 3, 2];
    arr2 = [4, 1, 7, 3, 2];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2, 3, 7]);
  });

  test.only("returns each number only once, even if it appears in one array multiple times", () => {
    let arr1 = [1, 2, 2, 2, 3, 4, 5];
    let arr2 = [1, 2, 6, 7];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2]);

    arr1 = [1, 2, 3];
    arr2 = [3, 3, 3, 4, 5];
    expect(duplicateNumbers(arr1, arr2)).toEqual([3]);
  });
});
