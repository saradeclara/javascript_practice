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
  if (typeof n !== 'number') throw new Error("n should be an integer")

  return parseInt(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  if (typeof arrs !== 'object') throw new Error("arrs can only be an array");

  let flatArray = [].concat(...arrs);
  if (arrs.length === 0 || flatArray.length === 0) throw new Error("arrs cannot be empty");
  let checkedNums = flatArray.filter(el => typeof el === 'number');
  if (checkedNums.length !== flatArray.length) throw new Error("illegal input provided. arrs can only contain integers.");


  const add = (a, b) => a + b;
  const sum = flatArray.reduce(add);
  return sum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (typeof arr !== 'object') throw new Error("arr should be an array");

  if (arr.length < 2) {
    return arr
  } else {
    const first = arr.shift();
    const last = arr.pop();
    arr.unshift(last)
    arr.push(first)
    return arr
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  if (typeof haystack !== 'object' || typeof searchTerm !== 'string') throw new Error("input provided is illegal. haystack should be an object and searchTerm should be a string");
  if (Array.isArray(haystack)) throw new Error("haystack is an array. haystack should be an object.");
  const checkedValues = Object.values(haystack).map(value => {
    return (value.toString().toUpperCase().includes(searchTerm.toUpperCase()))
  })
  return (checkedValues.includes(true))
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("str should be a string");
  
  // second solution: forEach w/ incremental counter 
  const frequencies = new Object();
  let cleanStr = str.toLowerCase().replace(/[^a-zA-Z ]/gm, '');
  cleanStr.split(' ').forEach(char => {
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char] += 1;
    }
  })

  return frequencies;
};
// first solution: countUp function w/ forEach loop
// const countUp = (arr, term) => {
//   let counter = 0;
//   arr.map(el => {
//     if (el === term) counter++
//   })
//   return counter
// }
// let o = new Object();
// let checkedStr = str.toLowerCase().replace(/[^a-zA-Z ]/gm, '');
// checkedStr.split(" ").forEach((word, index, array) => {
//   o[word] = countUp(array, word)
// })
// return o
// };

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
