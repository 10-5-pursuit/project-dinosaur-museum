const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

// Returns an object with the longest dinosaur from the list. Converts from meters to feet.

// Function to find the longest dinosaur in terms of length and convert the length from meters to feet.
function getLongestDinosaur(dinosaurs) {
  // Initialize variables to keep track of the longest dinosaur's name and its length in feet.
  let longestDinosaur = '';
  let longestLengthInFeet = 0;

  // Check if the input array is empty. If so, return an empty object.
  if (dinosaurs.length === 0) {
    return {};
  }

  // Loop through each dinosaur in the array.
  for (let dinosaur of dinosaurs) {
    // Calculate the length of the dinosaur in feet by multiplying the length in meters by 3.281.
    let lengthInFeet = dinosaur.lengthInMeters * 3.281;

    // Compare the length of the current dinosaur with the longest recorded length.
    if (lengthInFeet > longestLengthInFeet) {
      // If the current dinosaur is longer, update the longest dinosaur information.
      longestDinosaur = dinosaur.name;
      longestLengthInFeet = lengthInFeet;
    }
  }

  // Return an object with the longest dinosaur's name as the key and its length in feet as the value.
  return { [longestDinosaur]: longestLengthInFeet };
}


function getDinosaurDescription(dinosaurs, id) {
  // Iterate through each dinosaur in the input array
  for (let key of dinosaurs) {
    // Extract relevant information from the current dinosaur
    let pronunciation = key.pronunciation;
    let name = key.name;
    let info = key.info;
    let period = key.period;
    let mya = key.mya;

    // Check if the current dinosaur has the specified ID
    if (key.dinosaurId === id) {
      // Construct and return a formatted description of the dinosaur
      return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${
        mya.length === 1 ? mya[0] : mya[1]
      } million years ago.`;
    }
  }

  // Return an error message if the dinosaur with the specified ID is not found
  return `A dinosaur with an ID of '${id}' cannot be found.`;
}




// Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value.
//  * If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
//  *
//  * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less.
//  * For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.

function getDinosaursAliveMya(dinosaurs, mya, key) {
  // Initialize an array to store the results
  let arr = [];

  // Iterate through each dinosaur in the input array
  for (const dinoKey in dinosaurs) {
    // Retrieve the dinosaur object based on the current key
    const dinoObj = dinosaurs[dinoKey];

    // Get the `mya` range of the current dinosaur for comparison
    const myaRange = dinoObj.mya;

    // Check if the current dinosaur lived during the specified time period (`mya`)
    if (
      (myaRange.length === 1 && mya >= myaRange[0] - 1 && mya <= myaRange[0]) ||
      (myaRange.length === 2 && mya >= myaRange[1] && mya <= myaRange[0])
    ) {
      // If a `key` is provided, add the corresponding value to the result array; otherwise, add the dinosaur's ID
      if (key && dinoObj.hasOwnProperty(key)) {
        arr.push(dinoObj[key]);
      } else {
        arr.push(dinoObj.dinosaurId);
      }
    }
  }