const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

// /**
//  * Retrieves the IDs or specified key values of dinosaurs that lived during a given time period.
//  * @param {Object[]} dinosaurs - An array of dinosaur objects.
//  * @param {number} mya - The time period in "Millions of years ago."
//  * @param {string} key - An optional parameter. If included, returns the value of the supplied key; otherwise, returns the dinosaur ID.
//  * @returns {*[]} An array of values, depending on the key given, for dinosaurs that lived during the specified time period.
//  */
// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   // Initialize an empty array to store the result
//   let arr = [];

//   // Iterate over each property in the dinosaurs object
//   for (const dinoKey in dinosaurs) {
//     // Access the dinosaur object using the current property key
//     const dinoObj = dinosaurs[dinoKey];
//     // Extract the mya range from the current dinosaur object
//     const myaRange = dinoObj.mya;

//     // Check if the mya range matches the specified condition
//     if (
//       (myaRange.length === 1 && mya >= myaRange[0] - 1 && mya <= myaRange[0]) ||
//       (myaRange.length === 2 && mya >= myaRange[1] && mya <= myaRange[0])
//     ) {
//       // Check if a key is provided and if the dinosaur object has that key
//       if (key && dinoObj.hasOwnProperty(key)) {
//         // Push the value of the specified key to the result array
//         arr.push(dinoObj[key]);
//       } else {
//         // If no key is provided or the key is not present, push the dinosaurId to the result array
//         arr.push(dinoObj.dinosaurId);
//       }
//     }
//   }

//   // Return the final result array
//   return arr;
// }
