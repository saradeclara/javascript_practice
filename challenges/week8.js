const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.length === 0) throw new Error("nums cannot be empty");
  if (typeof num !== 'object' && typeof n !== 'number') 
     throw new Error("illegal inputs. nums should be an array and n should be an integer.");
  const checkedNums = nums.filter(num => typeof num === 'number');
  if (checkedNums.length !== nums.length) throw new Error("illegal input provided. nums can only contain integers.");

  let found = nums.findIndex((element) => element === n);
  if (nums.includes(n) && nums[nums.length - 1] !== n) {
    return nums[found + 1]
  } else {
    return null
  }
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("illegal input. str should be a string.");
  let oneCounter = 0;
  let zeroCounter = 0;
  str.split("").forEach(char => {
    if (char === '0') zeroCounter++ 
    else if (char === '1') oneCounter++
    else throw new Error("this string should only contain 1s and 0s")
  })
  let result = {
    0: zeroCounter,
    1: oneCounter
  }
  return result
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
