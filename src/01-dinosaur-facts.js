/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const dinosaurs = require("../data/dinosaurs");
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.≈≈

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

//Recipe for > function getLongestDinosaur(dinosaurs) {
// 1. Check if the dinosaurs array is empty.
// 2. If empty, return an empty object.
// 3. Initialize the longestDinosaur variable with the first dinosaur in the array.
// 4. Use accumulator pattern - probably can use reduce, will try it later.
// 5. Iterate through the dinosaurs array.
// 6. Check if the length of the current dinosaur is greater than the length of the longest dinosaur.
// 7. If true, update the longestDinosaur variable with the current dinosaur.
// 8. Return an object with the name of the longest dinosaur as the [key] and its length converted from meters to feet as the value.
// 9. Call the function.
// 10. Check value against example.

// using for - of
function getLongestDinosaur(dinosaurs) {
  if (dinosaurs.length === 0) {
    return {};
  }

  let longestDinosaur = dinosaurs[0];
  for (dino of dinosaurs) {
    if (dino.lengthInMeters > longestDinosaur.lengthInMeters) {
      longestDinosaur = dino;
    }
  }

  return {
    [longestDinosaur.name]: longestDinosaur.lengthInMeters * 3.281,
  };
}

console.log("prob 1:", getLongestDinosaur(dinosaurs));

// using for loop
// function getLongestDinosaur(dinosaurs) {
//   if (dinosaurs.length === 0) {
//     return {};
//   }

//   let longestDinosaur = dinosaurs[0];
//   for (let i = 0; i < dinosaurs.length; i++) {
//     if (dinosaurs[i].lengthInMeters > longestDinosaur.lengthInMeters) {
//       longestDinosaur = dinosaurs[i];
//     }
//   }

//   return {
//     [longestDinosaur.name]: longestDinosaur.lengthInMeters * 3.281
//   }
// }

// console.log(getLongestDinosaur(dinosaurs));

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

// Recipe for > getDinosaurDescription(dinosaurs, id)
// 1. Find the dinosaur with the specified ID in the array.
// 2. Check if the dinosaur is found.
// 3. If foundDinosaur:
// 4. Extract the first value from the mya array.
// 5. Construct the dinosaur description.
// 6. Return the constructed description.
// 7. Else: Return an error message if the dinosaur is not found.

function getDinosaurDescription(dinosaurs, id) {
  const foundDinosaur = dinosaurs.find((dino) => dino.dinosaurId === id);

  if (foundDinosaur) {
    const mya = foundDinosaur.mya[0];
    return `${foundDinosaur.name} (${foundDinosaur.pronunciation})\n${foundDinosaur.info} It lived in the ${foundDinosaur.period} period, over ${mya} million years ago.`;
  }
  return `A dinosaur with an ID of '${id}' cannot be found.`;
}

console.log("prob 2:", getDinosaurDescription(dinosaurs, "GOycwH_EiU"));
console.log("prob 2:", getDinosaurDescription(dinosaurs, "rizelrex"));

// 1. Initialize a variable to store the found dinosaur
// 2. Iterate through the dinosaurs array to find the one with the specified ID
// 3. Check if a dinosaur with the specified ID was found
// 4. Extract the first value from the mya array
// 5. Construct and return the dinosaur description
// 6. Return a message indicating that the dinosaur with the specified ID cannot be found

// using traditional for loop
// function getDinosaurDescription(dinosaurs, id) {
//   let foundDinosaur = '';

//   for (let i = 0; i < dinosaurs.length; i++) {
//     if (dinosaurs[i].dinosaurId === id) {
//       foundDinosaur = dinosaurs[i];
//     }
//   }

//   if (foundDinosaur) {
//     const mya = foundDinosaur.mya[0];
//     return `${foundDinosaur.name} (${foundDinosaur.pronunciation})\n${foundDinosaur.info} It lived in the ${foundDinosaur.period} period, over ${mya} million years ago.`;
//   }
//   return `A dinosaur with an ID of '${id}' cannot be found.`;
// }

// console.log(getDinosaurDescription(dinosaurs, "GOycwH_EiU"))
// console.log(getDinosaurDescription(dinosaurs, "rizelrex"))

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

// Recipe for > getDinosaursAliveMya(dinosaurs, mya, key)
// 1. Filter dinosaurs based on their time range and return selected properties.
// 2. Destructure the mya array of the current dinosaur into startMya and endMya.
// 3. Check if the dinosaur's time range is represented by a single value.
// 4. Return true if the given mya matches the single value or is one unit less.
// 5. Check if the dinosaur's time range is represented by two values.
// 6. Return true if the given mya falls within that range.
// 7. If neither of the above conditions is met, exclude the dinosaur from the filtered array.
// 8. Map the filtered array to transform it into an array of selected properties.
function getDinosaursAliveMya(dinosaurs, mya, key) {
  // Filter dinosaurs based on the specified time range
  return dinosaurs
    .filter((dinosaur) => {
      // Destructuring to get the start and end mya values from the dinosaur object
      const [startMya, endMya] = dinosaur.mya;

      // Check if the dinosaur existed in a single mya period
      if (dinosaur.mya.length === 1) {
        // Return true if the specified mya matches the start mya or the previous mya
        return mya === startMya || mya === startMya - 1;
      } 
      // Check if the dinosaur existed in a range of mya periods
      else if (dinosaur.mya.length === 2) {
        // Return true if the specified mya is within the range of the dinosaur's existence
        return mya >= endMya && mya <= startMya;
      }

      // Return false for invalid cases
      return false;
    })
    // Map the result to either the specified key or the dinosaurId
    .map((dinosaur) =>
      key && dinosaur[key] !== undefined ? dinosaur[key] : dinosaur.dinosaurId,
    );
}

console.log(getDinosaursAliveMya(dinosaurs, 65, "name"));
console.log(getDinosaursAliveMya(dinosaurs, 150));  

// using for loop and no destructuring
// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   const result = [];

//   for (let i = 0; i < dinosaurs.length; i++) {
//     const dinosaur = dinosaurs[i];
//     const startMya = dinosaur.mya[0];
//     const endMya = dinosaur.mya[1];

//     if (dinosaur.mya.length === 1) {
//       if (mya === startMya || mya === startMya - 1) {
//         result.push(key && dinosaur[key] !== undefined ? dinosaur[key] : dinosaur.dinosaurId);
//       }
//     } else if (dinosaur.mya.length === 2) {
//       if (mya >= endMya && mya <= startMya) {
//         result.push(key && dinosaur[key] !== undefined ? dinosaur[key] : dinosaur.dinosaurId);
//       }
//     }
//   }

//   return result;
// }

// console.log(getDinosaursAliveMya(dinosaurs, 65, "name"));
// console.log(getDinosaursAliveMya(dinosaurs, 150));

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
