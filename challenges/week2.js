function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (typeof sandwich !== "object") throw new Error("illegal input provided.")
  if (sandwich.fillings.length === 0) throw new Error("no fillings provided.");
  if (sandwich.bread === undefined) throw new Error("no bread provided for this sandwich.");
  if (sandwich.fillings === undefined) throw new Error("no fillings provided for this sandwich.");
  if (sandwich.accompaniment === undefined) throw new Error("no accompaniment provided for this sandwich.");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === undefined) throw new Error("city was not defined");
  if (person.name === undefined) throw new Error("name was not defined");
  return (person.city === "Manchester" ? true : false);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};