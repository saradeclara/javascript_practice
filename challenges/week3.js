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
  let illegalInputs = []; // array to contain all illegal items contained in 'subjects' property
  // // nested forEach loop to check that all 'subjects' are strings
  people.forEach(function (people) {
    let subjectArray = people.subjects;
    subjectArray.forEach(function (singleSubject) {
      if (typeof singleSubject !== 'string') {
        illegalInputs.push(singleSubject);
      }
    })
  });
  if (illegalInputs.length !== 0) throw new Error("at least one subjects record contains illegal item. all subjects should be strings.");

  let subjectsArray = [];
  people.forEach(function (student) {
    student.subjects.forEach(function (subject) {
      subjectsArray.push(subject);
    })
  });
  let totalSubjects = subjectsArray.length;
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  menu.forEach(function (recipe) {
    if (recipe.name === '' || recipe.ingredients === '') {
      throw new Error("at least one property is empty. every property should contain information.")
    }
  });
  menu.forEach(function (recipe) {
    if (typeof recipe.name !== 'string' || typeof recipe.ingredients !== 'object') {
      throw new Error("illegal type provided. name can only be a string and ingredients can only be an object.")
    }
  });
  menu.forEach(function (recipe) {
    recipe.ingredients.forEach(function (item) {
      if (typeof item !== 'string') {
        throw new Error("illegal type provided. ingredients can only be an array of strings.");
      }
    })
  });
  if (typeof menu !== 'object' || typeof ingredient !== 'string') throw new Error("menu needs to be array. ingredient needs to be a string");

  let ingredientArray = [];
  menu.forEach(function (recipe) {
    recipe.ingredients.forEach(function (item) {
      ingredientArray.push(item);
    })
  });
  return ingredientArray.includes(ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  if (typeof arr1 !== 'object' && typeof arr2 !== 'object') throw new Error("illegal parameters provided. arr1 and arr2 need to be arrays.");
  arr1.forEach(function (item) {
    if (typeof item !== 'number') throw new Error("illegal parameter provided (arr1). only integers allowed.");
  });
  arr2.forEach(function (item) {
    if (typeof item !== 'number') throw new Error("illegal parameter provided (arr2). only integers allowed.");
  });
  let duplicateArray = [];
  arr1.forEach(function (item) {
    if (arr2.indexOf(item) !== -1)
      duplicateArray.push(item);
  });
  let newDuplicateArray = duplicateArray.filter(function (item, index, array) {
    return (array.indexOf(item) >= index);
  });
  let sortedDuplicateArray = newDuplicateArray.sort(function (a, b) { return a - b });
  return sortedDuplicateArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
