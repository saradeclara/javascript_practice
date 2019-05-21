/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an array is required");
  arr.forEach(n => {
    if (typeof n !== 'number') {
      throw new Error("an array of numbers is required");
    }
  })
  // loop through the array
  // if the number / 3 or 5 (%), add to a total
  // return total
  let total = 0;
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0 ) {
      total += n;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!str) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("param should be a string");

  const allowedChars = ['C', 'G', 'T', 'A'];

  let valid = true;
  str = str.split("");
  
  for (let i = 0; i < str.length; i++) {
    if (!allowedChars.includes(str[i].toUpperCase())) {
      valid = false;
      break;
    }
  }

  return valid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (!str) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("param should be a string");

    let complementaryDNA = str.toLowerCase().split("").map(char => {
       switch(char) {
         case 'a':
           return 't';
         case 'g':
           return 'c';
         case 'c':
           return 'g';
         case 't':
           return 'a';
         default: 
           throw new Error('string should be a valid DNA string')
       }
    })
    return complementaryDNA.join('').toUpperCase();
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (!n) throw new Error("n is required");
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!n) throw new Error("n is required");
  if (!fill) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  // input type check. staff should be array, day should be a string
  if (!Array.isArray(staff)) throw new Error("staff should be an array");
  if (typeof day !== 'string') throw new Error("day should be a string");

  // undefined input check.
  if (!staff) throw new Error("staff is required");
  if (!day) throw new Error("day is required");
  if (staff.length === 0) return false;

  // check that day is a day of the week
  const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  if (!week.includes(day.toLowerCase())) throw new Error("day should be a day of the week [e.g. Monday, Tuesday,...]");

  // check that staff is an array of objects
  // check that each object has only 2 props, name (string) and rota (array of strings)
  // check that rota should only contain days of the week
  staff.forEach(employee => {
    if (typeof employee !== 'object' && employee.constructor !== Object) throw new Error ("staff should be an array of objects")
    if (Object.values(employee).length !== 2 || (!employee.hasOwnProperty('name')) || (!employee.hasOwnProperty('rota')))
    throw new Error("staff not formatted correctly (every obj has 2 props, name and rota)");
    if (typeof employee.name !== 'string' || (!Array.isArray(employee.rota))) 
      throw new Error("name prop should be a string and rota prop should be array of strings");
    employee.rota.forEach(rotaDay => {
      if (typeof rotaDay !== 'string') 
        throw new Error("name prop should be a string and rota prop should be array of strings");
      if (!week.includes(rotaDay.toLowerCase())) throw new Error ("rota should only contain days of the week");
    })
  })
 
  // initialise staffCounter = 0
  // loop throught staff array 
  // loop through rota of each employee
  //  and increment counter every time 
  // there is available staff (3 or more)

  let staffCounter = 0;
  staff.forEach(employee => {
    employee.rota.forEach(rotaDay => {
      // case insensitive check
      if (rotaDay.toLowerCase() === day.toLowerCase()) {
        staffCounter += 1;
      }
    })
  });

  return (staffCounter >= 3);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
