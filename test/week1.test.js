const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
} = require("../challenges/week1");

// capitalize function
describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first character if the string is a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });


test("undefined input. function to throw error.", () => {
  expect(() => {
    capitalize();
  }).toThrow(Error)});

test("integer input. function to throw error.", () => {
  expect(() => {
    capitalize(123);
  }).toThrow(Error)
});

test("boolean input. function to throw error.", () => {
  expect(() => {
    capitalize(true);
  }).toThrow(Error)
});
});

// generateInitials function
describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });
});

describe("generateInitials", () => {
  test("returns the initials of firstnames (more than one) and a surname", () => {
    expect(generateInitials("Mary Jane", "Bonneville")).toBe("M.J.B");
  });
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surnames (more than one)", () => {
    expect(generateInitials("Mary", "Bonneville Warner")).toBe("M.B.W");
  });
});

describe("generateInitials", () => {
  test("returns the initials of firstnames (more than one) and surnames (more than one)", () => {
    expect(generateInitials("Mary Jane", "Bonneville Warner")).toBe("M.J.B.W");
  });
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surnames (more than one)", () => {
    expect(generateInitials("Mary", "Bonneville Warner")).toBe("M.B.W");
  });
});

describe("generateInitials", () => {
  test("undefined input. function to throw error.", () => {
    expect(() => {
      generateInitials();
    }).toThrow(Error);
  });
});

describe("generateInitials", () => {
  test("only first name provided. function to throw error.", () => {
    expect(() => {
      generateInitials("Sara");
    }).toThrow(Error);
  });
});

describe("generateInitials", () => {
  test("only last name provided. function to throw error.", () => {
    expect(() => {
      generateInitials("De Clara");
    }).toThrow(Error);
  });
});

describe("generateInitials", () => {
  test("integer input. function to throw error.", () => {
    expect(() => {
      generateInitials(1,2);
    }).toThrow(Error);
  });
});

describe("generateInitials", () => {
  test("boolean input. function to throw error.", () => {
    expect(() => {
      generateInitials(true, false);
    }).toThrow(Error);
  });
});

//addVAT function
describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });

  test("only price provided. function to throw error.", () => {
    expect(() => {
      addVAT(25);
    }).toThrow(Error);
  });

  test("only VAT provided. function to throw error.", () => {
    expect(() => {
      addVAT(17.5);
    }).toThrow(Error);
  });

  test("both inputs are NOT legal. function to throw error.", () => {
    expect(() => {
      addVAT("50", true);
    }).toThrow(Error);
  });

  test("price type is NOT legal. VAT type is legal. function to throw error.", () => {
    expect(() => {
      addVAT("milk", 20);
    }).toThrow(Error);
  });

  test("price type is  legal. VAT type is NOT legal. function to throw error.", () => {
    expect(() => {
      addVAT(300, "twenty");
    }).toThrow(Error);
  });
});

// getSalePrice function
describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      getSalePrice();
    }).toThrow(Error);
  });

  test("original price type is legal. reduction type is NOT legal. function to throw error.", () => {
    expect(() => {
      getSalePrice(30, "ten");
    }).toThrow(Error);
  });  

  test("original price type is NOT legal. reduction type is legal. function to throw error.", () => {
    expect(() => {
      getSalePrice("thirty", 10);
    }).toThrow(Error);
  });   

  test("both input types are NOT Legal. function to throw error.", () => {
    expect(() => {
      getSalePrice(true, "ten");
    }).toThrow(Error);
  }); 

});

//getMiddleCharacter function
describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });

  test("empty string. fuction to throw error.", () => {
    expect(() => {
      getMiddleCharacter("");
    }).toThrow(Error);
  });  

  test("undefined input. fuction to throw error.", () => {
    expect(() => {
      getMiddleCharacter();
    }).toThrow(Error);
  }); 

  test("string input. fuction to throw error.", () => {
    expect(() => {
      getMiddleCharacter(123);
    }).toThrow(Error);
  }); 

  test("boolean input. fuction to throw error.", () => {
    expect(() => {
      getMiddleCharacter(false);
    }).toThrow(Error);
  }); 
});

// reverseWord function
describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      reverseWord();
    }).toThrow(Error);
  });

  test("empty string. function to throw error.", () => {
    expect(() => {
      reverseWord("");
    }).toThrow(Error);
  });

  test("number input. function to throw error.", () => {
    expect(() => {
      reverseWord(123);
    }).toThrow(Error);
  });

  test("boolean input. function to throw error.", () => {
    expect(() => {
      reverseWord(true);
    }).toThrow(Error);
  });

});

// reverseAllWords function
describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });

  test("string input. only arrays allowed", () => {
    expect(() => {
      reverseAllWords("jest mocha rspec");
      }).toThrow(Error);
  });

  test("integer input. only arrays allowed", () => {
    expect(() => {
      reverseAllWords(123);
      }).toThrow(Error);
  });

  test("boolean input. only arrays allowed", () => {
    expect(() => {
      reverseAllWords(true);
      }).toThrow(Error);
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      reverseAllWords();
      }).toThrow(Error);
  });

});

// countLinuxUsers function
describe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });

  test("integer input. function to throw error.", () => {
    expect(() => {
      countLinuxUsers(123);
    }).toThrow(Error);
  });

  test("string input. function to throw error.", () => {
    expect(() => {
      countLinuxUsers("123");
    }).toThrow(Error);
  });

  test("boolean input. function to throw error.", () => {
    expect(() => {
      countLinuxUsers(true);
    }).toThrow(Error);
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      countLinuxUsers();
    }).toThrow(Error);
  });

  test("empty array. function to throw error.", () => {
    expect(() => {
      const users = [];
      countLinuxUsers(users);
    }).toThrow(Error);
  });

});

// getMeanScore function
describe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean score from an array of one element", () => {
    expect(getMeanScore([8])).toBe(8);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });

  test("empty array. function to throw error.", () => {
    expect(() => {
      const scores = [];
      getMeanScore(scores);
    }).toThrow(Error);
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      getMeanScore();
    }).toThrow(Error);
  });

  test("string input. function to throw error.", () => {
    expect(() => {
      getMeanScore("twenty, thirty, five");
    }).toThrow(Error);
  });

  test("boolean input. function to throw error.", () => {
    expect(() => {
      getMeanScore(true);
    }).toThrow(Error);
  });

});

// simpleFizzBuzz function
describe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });

  test("undefined input. function to throw error.", () => {
    expect(() => {
      simpleFizzBuzz();
    }).toThrow(Error);
  });

  test("string input. function to throw error.", () => {
    expect(() => {
      simpleFizzBuzz("fifteen");
    }).toThrow(Error);
  });

  test("boolean input. function to throw error.", () => {
    expect(() => {
      simpleFizzBuzz(true);
    }).toThrow(Error);
  });

});
