/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number" || Number.isInteger(n) === false) throw new Error("n should be an integer");

  const getSum = (total, num) => {
    return total + num
  };
  let nArray = n.toString().split("").map(n => {
    return parseInt(n, 10);
  });
  return nArray.reduce(getSum);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof start !== "number") throw new Error("start should be a number");
  if (typeof end !== "number") throw new Error("end should be a number");
  if (typeof step !== "number") throw new Error("step should be a number");

  let rangeArray = [];
  rangeArray[0] = start;
  let currentValue = start;
  if (start < end) {
    for (let i = start; i < end; i += step) {
      currentValue += step;
      rangeArray.push(currentValue);
    }
  } else if (end < start) {
    for (let i = start; i > end; i += step) {
      currentValue += step;
      rangeArray.push(currentValue);
    }
  }
  return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  // undefined input
  if (board === undefined) throw new Error("board is required");
  // check board is array
  if (!Array.isArray(board)) throw new Error("board should be an array");
  // check every cell only contains a legal value (X, 0 or null)
  board.forEach(row => {
    row.forEach(cell => {
      if (cell !== 'X' && cell !== null && cell !== 0) {
        throw new Error("every cell should only contain X, 0 or null")
      }
    })
  })
  //   count number of rows
  const nRows = board.length;
  const colArr = [];
  // count up elements for each row
  board.forEach(row => {
    colArr.push(row.length);
  });
  // checking that all rows have same number
  // convert array to Set, to extract unique values
  // if there is more than one value, not all rows have the same n of elements
  const uniqColVals = [...new Set(colArr)];
  if (uniqColVals.length !== 1)
    throw new Error("not all rows have the same n of elements");
  // check nRows = nCols
  const nCols = uniqColVals[0];
  if (nCols !== nRows)
    throw new Error("board should be a square");
  // check board is 3x3
  if (nCols !== 3 && nRows !== 3)
    throw new Error(`this board is ${nRows}x${nCols}, it should be 3x3`);
  // create winningCombos array
  // create temporary array
  let winningCombos = [];
  let tmpArray = [];
  // push all horizontal combos
  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nRows; j++) {
      tmpArray.push(board[i][j]);
      if (tmpArray.length === nRows) {
        winningCombos.push(tmpArray);
        tmpArray = [];
      }
    }
  }
  // push all vertical combos
  for (let i = 0; i < nCols; i++) {
    for (let j = 0; j < nCols; j++) {
      tmpArray.push(board[j][i]);
      if (tmpArray.length === nCols) {
        winningCombos.push(tmpArray);
        tmpArray = [];
      }
    }
  }
  // push all diagonal combos
  for (let i = 0; i < nRows; i++) {
    tmpArray.push(board[i][i]);
    if (tmpArray.length === nRows) {
      winningCombos.push(tmpArray);
      tmpArray = [];
    }
  }
  for (let i = 0; i < nRows; i++) {
    tmpArray.push(board[i][Math.abs(i - 2)]);
    if (tmpArray.length === nRows) {
      winningCombos.push(tmpArray);
      tmpArray = [];
    }
  }
  // check if there are any winners
  // possible outcomes:
  let outcome;
  const checkCombos = winningCombos.map(combo => {
    combo = [...new Set(combo)];
    return combo;
  });
  //   - player X wins
  //   - player 0 wins
  for (let i = 0; i < checkCombos.length; i++) {
    if (checkCombos[i].length === 1 && checkCombos[i][0] !== null) {
      outcome = checkCombos[i][0]
      return outcome;
    }
  }
  //   - nobody has won yet
  //   - draw
  const flatCombos = [].concat(...winningCombos);
  if (flatCombos.includes(null)) {
    outcome = 'Game in progress';
  } else {
    outcome = 'Draw';
  }
  // return outcome
  return outcome;
}

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
