function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  const capitalizedWord = word[0].toUpperCase() + word.slice(1);
  return capitalizedWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  const firstNameArray = firstName.split(" ");
  const lastNameArray = lastName.split(" ");
  let fullNameArray = [];

  const firstNameInitials = firstNameArray.map(function(item) {
    return item[0].toUpperCase();
  });

  const lastNameInitials = lastNameArray.map(function(item) {
    return item[0].toUpperCase();
  });

  fullNameArray = firstNameInitials.concat(lastNameInitials);
  const fullNameInitials = fullNameArray.join(".");

  return fullNameInitials;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined || typeof originalPrice !== "number") throw new Error("originalPrice is required");
  if (vatRate === undefined || typeof vatRate !== "number") throw new Error("vatRate is required");
  
  let finalPrice = originalPrice + (originalPrice * (vatRate / 100));
  finalPrice = Math.round(finalPrice * 100) / 100;
  return finalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined || typeof originalPrice !== "number") throw new Error("originalPrice is required");
  if (reduction === undefined || typeof reduction !== "number") throw new Error("reduction is required");
  
  let discountedPrice = originalPrice - (originalPrice * (reduction / 100));
  discountedPrice = Math.round(discountedPrice * 100) / 100;
  return discountedPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let index1, index2;
  
  if (str.length % 2 === 0) {
    index1 = (str.length / 2) - 1;
    index2 = (str.length / 2) + 1;
  } else {
    index1 = Math.floor(str.length / 2);
    index2 = Math.floor(str.length / 2) + 1;
  }

  let middleCharacter = str.slice(index1, index2);
  return middleCharacter;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
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
};
