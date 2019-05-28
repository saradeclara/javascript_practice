const { sumDigits,
    createRange,
    findWinner,
    getScreentimeAlertList } = require("../challenges/week10");

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
            sumDigits({ int: "123" })
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
        expect(createRange(1, 9, 3)).toEqual([1, 4, 7, 10]);
    });
    // positive and negative step
    test('createRange(0,8,2) should return [0,2,4,6,8]', () => {
        expect(createRange(0, 8, 2)).toEqual([0, 2, 4, 6, 8])
    });
    test('createRange(0,-8,-2) should return [0,-2,-4,-6,-8]', () => {
        expect(createRange(0, -8, -2)).toEqual([0, -2, -4, -6, -8])
    });
    // step is not defined
    test('undefined step should default to 1', () => {
        expect(createRange(0, 8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
    });
    // float numbers
    test('float numbers', () => {
        expect(createRange(1.1, 3.1)).toEqual([1.1, 2.1, 3.1]);
    })
    // start = end
    test('if start = end should return [start]', () => {
        expect(createRange(2, 2)).toEqual([2]);
        expect(createRange(3.54, 3.54)).toEqual([3.54]);
        expect(createRange(0, 0)).toEqual([0]);
    })
})

describe("findWinner", () => {
    // undefined input
    test('should return an error if input is undefined', () => {
        expect(() => {
            findWinner()
        }).toThrow("board is required");
    });
    // board shoud be array
    test('should return an error if board is not an array', () => {
        expect(() => {
            findWinner("X")
        }).toThrow("board should be an array");
        expect(() => {
            findWinner(true)
        }).toThrow("board should be an array")
    });
    // every cell should only contain X, 0 or null
    test('every cell should only contain X, 0 or null', () => {
        const board = [
            ['a', 'a', null],
            ['y', null, null],
            ['y', null, null]
        ];
        expect(() => {
            findWinner(board)
        }).toThrow("every cell should only contain X, 0 or null");
    });
    // board should be a square
    test('board should be a square', () => {
        const board = [
            ['X', 'X', 'X'],
            [null, null, 0]
        ];
        expect(() => {
            findWinner(board)
        }).toThrow("board should be a square");
    });
    // board should be 3x3
    test('board should be 3x3', () => {
        const board = [
            ['X', 'X'],
            [null, null]
        ];
        const nRows = board.length;
        const colArr = [];
        board.forEach(row => {
            colArr.push(row.length);
        });
        const uniqColVals = [...new Set(colArr)];
        const nCols = uniqColVals[0];
        expect(() => {
            findWinner(board)
        }).toThrow(`this board is ${nRows}x${nCols}, it should be 3x3`);
    });
    // player X wins
    test('player X wins', () => {
        const board = [
            ['X', null, null],
            ['X', 0, 0],
            ['X', 0, null]
        ];
        expect(findWinner(board)).toBe('X');
    });
    // player 0 wins
    test('player 0 wins', () => {
        const board = [
            ['X', null, null],
            [0, 0, 0],
            ['X', 0, 'X']
        ];
        expect(findWinner(board)).toBe(0);
    });
    // nobody has won yet
    test('nobody has won yet', () => {
        const board = [
            [null, null, null],
            ['X', 0, 0],
            ['X', null, null]
        ];
        expect(findWinner(board)).toBe('Game in progress');
    });
    // draw
    test('draw', () => {
        const board = [
            ['X', 0, 'X'],
            [0, 0, 'X'],
            ['X', 'X', 0]
        ];
        expect(findWinner(board)).toBe('Draw');
    });
})

describe('getScreentimeAlertList', () => {
    // undefined input
    test('should throw error with undefined input', () => {
        const users1 = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];
        expect(() => {
            getScreentimeAlertList()
        }).toThrow("users is required");
        expect(() => {
            getScreentimeAlertList(users1)
        }).toThrow("date is required");
    })
    // users should be an array and date should be a string
    test('users should be an array and date should be a string ', () => {
        const users2 = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];
        expect(() => {
            getScreentimeAlertList('sam_j_1989', '2019-06-11')
        }).toThrow("users should be an array");
        expect(() => {
            getScreentimeAlertList(users2, 2019)
        }).toThrow("date should be a string");
    })
    // check that users is an array of objects
    test('users should be an array of objects', () => {
        const users3 = [
            [
                "beth_1234",
                "Beth Smith",
                [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            ]
        ];
        expect(() => {
            getScreentimeAlertList(users3, '2019-05-01')
        }).toThrow("users should be an array of objects")
    });
    // check that object has only 3 props (username, name, screenTime)
    test('every user should only have 3 props (username, name, screenTime)', () => {
        const users4 = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ],
                dateOfBirth: "120589"
            }
        ];
        expect(() => {
            getScreentimeAlertList(users4, "2019-06-11")
        }).toThrow("every user can only have 3 props");
        const users5 = [
            {
                username: "sam_j_1989",
                fullName: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(() => {
            getScreentimeAlertList(users5, "2019-06-11")
        }).toThrow("every user can only have props called username, name and screenTime")
    });
    // check screenTime is an array of objects
    test('users should be an array of objects', () => {
        const users6 = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: "2019-05-02"
            }
        ];
        expect(() => {
            getScreentimeAlertList(users6, '2019-05-01')
        }).toThrow("screenTime should be an array")
    });
    // objects should only have 2 props (date and usage)
    test('objects should only have 2 props (date and usage)', () => {
        const users7 = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { facebook: 15 }, device: 'phone'}
                ]
            }
        ];
        expect(() => {
            getScreentimeAlertList(users7, '2019-05-01')
        }).toThrow("every screenRecord can only have 2 props");
        const users8 = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { fullDate: "2019-06-11", websites: { facebook: 15 }}
                ]
            }
        ];
        expect(() => {
            getScreentimeAlertList(users8, '2019-05-01')
        }).toThrow("every screenRecord can only have props date and usage");
    });
    // no one is above 100 mins => []
    test('no user is above 100 mins, returns []', () => {
        const users9 = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(
            getScreentimeAlertList(users9, '2019-06-14')
        ).toEqual([])
    });
    // comment example, ==> ["beth_1234"]
    test("should return ['beth_1234']", () => {
        const users10 = [
              {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
             ]
        expect(
            getScreentimeAlertList(users10, '2019-05-04')
        ).toEqual(['beth_1234']);
    });
    // date not available, ==> []
    test("date not available, returns []", () => {
        const users10 = [
              {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
             ]
        expect(
            getScreentimeAlertList(users10, '2019-03-01')
        ).toEqual([]);
    });
})
