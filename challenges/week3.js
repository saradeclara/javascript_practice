function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  if (typeof nums !== 'object') throw new Error("nums is not an array")
  else {
    // check type of values of array. creates an array that contains all illegal items within the array.
    // if illegalInputs IS NOT empty, that means that there is at least one illegal element within the array.
    let illegalInputs = nums.filter(function (item) {
      return typeof item !== 'number'
    });
    if (illegalInputs.length !== 0) throw new Error("at least one of element of the array is illegal");
  }
  if (nums.length === 0) {
    return nums;
  } else {
    let newSquares = nums.map(function (item) {
      return Math.pow(item, 2);
    });
    return newSquares;
  }
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  if (words.length === 0) throw new Error("array is empty. valid array required");
  let camelCaseArr = words.map(function (item, index) {
    if (index === 0) {
      return item.toLowerCase();
    } else {
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    }
  });
  return camelCaseArr.join("");
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  if (typeof people !== 'object') throw new Error("input is illegal. array is required.");
  if (people.length === 0) throw new Error("array is empty. valid array is required.");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
