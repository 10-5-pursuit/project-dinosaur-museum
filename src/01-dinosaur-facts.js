/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  let longestDinosaur = '';
  let longestLengthInFeet = 0;
  if (dinosaurs.length === 0) {
    return {}
  }

  for (let dinosaur of dinosaurs) {
    let lengthInFeet = dinosaur.lengthInMeters * 3.281;

    if (lengthInFeet > longestLengthInFeet) {
      longestDinosaur = dinosaur.name;
      longestLengthInFeet = lengthInFeet;
    }
  }
  return {[longestDinosaur]: longestLengthInFeet};
}
// function getLongestDinosaur(dinosaurs) {
//   const longestDinosaurObj = {};

//   if (dinosaurs.length === 0){
//     return {};
//   }

//   let lengthMap = dinosaurs.map(dinosaur => dinosaur.lengthInMeters);
//   let greatestLength = Math.max(...lengthMap);
//   let longestDinosaur = dinosaurs.find(dinosaur => dinosaur.lengthInMeters === greatestLength);
//   longestDinosaurObj[longestDinosaur.name] = longestDinosaur.lengthInMeters * 3.281;

//   return longestDinosaurObj;
// }

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  for (let key of dinosaurs){
    let pronunciation = key.pronunciation
    let name = key.name
    let info = key.info
    let period = key.period
    let mya= key.mya
  if(key.dinosaurId === id){
    return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${mya.length === 1 ? mya[0] : mya[1]} million years ago.`
  }
  
  }
  return `A dinosaur with an ID of '${id}' cannot be found.`
}


/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let arr = [];

for (const dinoKey in dinosaurs) {
  const dinoObj = dinosaurs[dinoKey];
  const myaRange = dinoObj.mya;

  if ((myaRange.length === 1 && mya >= myaRange[0] - 1 && mya <= myaRange[0]) ||
      (myaRange.length === 2 && mya >= myaRange[1] && mya <= myaRange[0])) {
    if (key && dinoObj.hasOwnProperty(key)) {
      arr.push(dinoObj[key]);
    } else {
      arr.push(dinoObj.dinosaurId);
    }
  }
}

return arr;
  }
  getDinosaursAliveMya()
  // let dinoArr = [];

  // dinosaurs.forEach(function(dinosaur)) {
  //   let myaRange = dino.mya;

  //   if (
  //     (myaRange.length === 1 && (myaRange[0] === mya || myaRange[0] - 1 === mya)) || (myaRange.length === 2 && mya <= myaRange[0] && mya >= myaRange[1]){
  //     result.push(key in dino ?[key] : dino.dinosaurId);
  //   }
  // });
  // return result;



module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
