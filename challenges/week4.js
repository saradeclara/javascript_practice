function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("illegal input provided. only arrays allowed.")
  const smallNums = nums.filter(function(num) {
    return (num < 1) ? true : false;
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (typeof names !== 'object' || typeof char !== 'string') throw new Error("Illegal input provided. Names should be an array and char should be a string.");
  const filteredNames = names.filter(function(name) {
    return (name[0].toUpperCase() === char.toUpperCase()) ? true : false;
  });
  return filteredNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if (typeof words !== 'object') throw new Error("illegal input provided. words should be an array.");
  let filtered = words.filter(function(item) {
    return (typeof item === 'string') ? true : false;
  })
  if (words.length !== filtered.length) throw new Error("illegal input provided. words should only contain strings.");

  let verbs = words.filter(function(word) {
      let regex = /^to /gi;
    return (word.match(regex) !== null) ? true : false;
  });
  
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("illegal input. nums should only be an array");
  let filteredIntegers = nums.filter(function(item) {
    return (typeof item === 'number') ? true : false;
  })
  if (nums.length !== filteredIntegers.length) throw new Error("illegal input provided. nums should only contain numbers.");

  let integers = nums.filter(function(num) {
    return (Number.isInteger(num)) ? true : false;
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  if(typeof users !== 'object') throw new Error("illegal input. users should be an array");
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
