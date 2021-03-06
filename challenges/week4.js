function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("illegal input provided. only arrays allowed.")
  const smallNums = nums.filter(function (num) {
    return (num < 1) ? true : false;
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (typeof names !== 'object' || typeof char !== 'string') throw new Error("Illegal input provided. Names should be an array and char should be a string.");
  const filteredNames = names.filter(function (name) {
    return (name[0].toUpperCase() === char.toUpperCase()) ? true : false;
  });
  return filteredNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if (typeof words !== 'object') throw new Error("illegal input provided. words should be an array.");
  let filtered = words.filter(function (item) {
    return (typeof item === 'string') ? true : false;
  })
  if (words.length !== filtered.length) throw new Error("illegal input provided. words should only contain strings.");

  let verbs = words.filter(function (word) {
    let regex = /^to /gi;
    return (word.match(regex) !== null) ? true : false;
  });

  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("illegal input. nums should only be an array");
  let filteredIntegers = nums.filter(function (item) {
    return (typeof item === 'number') ? true : false;
  })
  if (nums.length !== filteredIntegers.length) throw new Error("illegal input provided. nums should only contain numbers.");

  let integers = nums.filter(function (num) {
    return (Number.isInteger(num)) ? true : false;
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  if (typeof users !== 'object') throw new Error("illegal input. users should be an array");
  let filteredUsers = users.filter(function (user) {
    return (typeof user === 'object') ? true : false;
  })
  if (users.length !== filteredUsers.length) throw new Error("illegal input provided. nums should only contain numbers.");
  let checkUsers = users.filter(function (user) {
    return (user.id && user.data && user.data.city && user.data.city.id && user.data.city.displayName) ? true : false;
  });
  if (users.length !== checkUsers.length) throw new Error("illegal input provided. each user should have id, data -> city -> id, displayName");

  let cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });

  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("nums should be an array");
  let filteredNums = nums.filter(function (num) {
    return (typeof num === 'number') ? true : false;
  });
  if (nums.length !== filteredNums.length) throw new Error("illegal input. nums should only contain numbers.");

  if (nums.length === 0) {
    return nums;
  } else {
    let sqrRtNums = nums.map(function (num) {
      return Math.round(Math.sqrt(num) * 100) / 100;
    });
    return sqrRtNums;
  }
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  if (typeof sentences !== 'object' || typeof str !== 'string') throw new Error("illegal input provided. sentences can only be an array and str can only be a string.");
  let filteredArray = sentences.filter(function (sentence) {
    return (typeof sentence === 'string') ? true : false;
  });
  if (sentences.length !== filteredArray.length) throw new Error("illegal input. array should only contain strings.");

  let sentencesContainingStr = [];

  sentences.forEach(function (sentence) {
    let regex = new RegExp(str, 'gim');
    if (sentence.match(regex) !== null) {
      sentencesContainingStr.push(sentence);
    }
  })
  return sentencesContainingStr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  if (typeof triangles !== 'object') throw new Error("triangles should only be an array");
  triangles.forEach(function (item) {
    if (typeof item !== 'object') {
      throw new Error("triangles should only be an array of arrays")
    } else {
      item.forEach(function (element) {
        if (typeof element !== 'number') {
          throw new Error('triangles should only be an array of arrays containing numbers.');
        }
      })
    }
  });

  let longestSides = [];
  triangles.forEach(function (item) {
    item.sort(function (a, b) { return a - b });
    item.forEach(function (number, index) {
      if (index === item.length - 1) {
        longestSides.push(number);
      }
    })
  });
  return longestSides;

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
