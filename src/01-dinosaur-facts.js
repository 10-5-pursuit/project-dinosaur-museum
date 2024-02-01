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
// function getLongestDinosaur(dinosaurs) {
//     //if the input arr is empty, return an empty obj
//     //not needed - can just return longestDinosaurObj
//     if(dinosaurs.length === 0) return {};

//     //init variable as an empty obj to store longest dinosaur
//     let longestDinosaurObj = {};
//     let maxLength = 0;
//     let dinoName = '';
    
//     //look through all dinosaurs (loop or method)if the dinosaur length is > maxLength, update maxLength to dinosaur length and update dinoName to dinosaur's name
//     dinosaurs.forEach(dino => {
//       if(dino.lengthInMeters > maxLength){
//         maxLength = dino.lengthInMeters;
//         dinoName = dino.name;
//     }
//   })
//     //convert length in meters to feet
//     maxLength = maxLength * 3.281

//     //new key + value pair
//     longestDinosaurObj[dinoName] = maxLength
//     return longestDinosaurObj

// }

function getLongestDinosaur(dinosaurs) {
  //init variable as an empty obj to store longest dinosaur
  let longestDinosaurObj = {};
  
    //using reduce you only iterate through the array once to find the longest dino
    //maxLength is the accumulator and it is set to 0, currentDino is the dinosaur in the current iteration
    dinosaurs.reduce((maxLength,currentDino) => {
      //if currentDino.lengthInMeters > maxLength, populate empty obj with current dinosaur name as a key && length in feet as a value
      //[bracket notation]=> key using the dynamic variable created inside reduce method
      //dot.notation => access the length in meters value from the obj in dinosaurs array
      //convert length from meters to feet and return it
      if(currentDino.lengthInMeters > maxLength){
        longestDinosaurObj = {[currentDino.name]: currentDino.lengthInMeters * 3.281};
          return currentDino.lengthInMeters
    
      } else {
      //if currentDino.lengthInMeters is not greater than maxLength, return the longest length found so far
          return maxLength
  
  }}, 0);
  
  //return obj with the longest dinosaur and it's length in feet, or an empty obj if the dinosaurs array is empty
  return longestDinosaurObj

}



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
  //init variable and assign it to the result of filter method => creates a new array with filtered elements. The filter checks for unique dinosaur Id meaning that it will return 1 element if id exists.
  let dinosaur = dinosaurs.filter (dino => dino.dinosaurId === id) [0]
    
  //if the dinosaur doesn't exist return an error msg. The error msg is in the test file and description.
  if(dinosaur == undefined) return `A dinosaur with an ID of '${id}' cannot be found.`
    
  //if dinosaur id exists, return detailed description using template literal. Access the key/value pairs using dot notation. The specific string to pass the test is in the test and description.
  return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${dinosaur.mya[dinosaur.mya.length-1]} million years ago.`

}

// getDinosaurDescription(exampleDinosaurData, 'YLtkN9R37')

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


// this is my helper function to be able to complete specified test conditions. 
// the function takes two params and checks if the specified key is "name". If it is, it returns the name property of the object. If the key is not "name" it returns the Id property of the object.
function getNameOrId(key, obj){
  if(key === 'name') return obj.name
  else return obj.dinosaurId
}


// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   //init an empty arr
//   let myaDinoArr = []
  
//   //loop through the dinosaurs array
//   //check if the array has one element and if that element is equal to the input mya or one less 
//   for (let i = 0; i < dinosaurs.length; i ++){
//     if (dinosaurs[i].mya.length === 1 && (dinosaurs[i].mya[0] === mya || dinosaurs[i].mya[0]-1 === mya)){
      
//       //push the return value of the helper function to myaDinoArr. It's using the input key and the element from the array that matches either by name or Id
//       myaDinoArr.push(getNameOrId(key,dinosaurs[i]))
      
//     //check if the array has more than one element and create a range for the input mya 
//     } else if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[1] <= mya){
      
//       //this is doing exactly the same process as before
//       myaDinoArr.push(getNameOrId(key,dinosaurs[i]))
//     }
//   }
//     //after loops and all dinosaurs have been checked, return new arr
//     return myaDinoArr;

// }

function getDinosaursAliveMya(dinosaurs, mya, key) {
  //init an empty arr
  let myaDinoArr = []
  
  //loop through the dinosaurs array
  //check if the mya array for each dinosaur has one element and if that element is equal to the input mya or one less 
  for (let dino of dinosaurs){
    if(dino.mya.length == 1 && (dino.mya[0] === mya || dino.mya[0]-1 === mya)){
      
  
      
      //push the return value of the helper function to myaDinoArr. It's using the input key and the element from the array that matches either by name or Id
      myaDinoArr.push(getNameOrId(key,dino))
    
      
    //check if the mya array has more than one element and create a range for the input mya 
  } else if (dino.mya[0] >= mya && dino.mya[1] <= mya){
      
      //this is doing exactly the same process as before
          myaDinoArr.push(getNameOrId(key,dino))

    //after loops and all dinosaurs have been checked, return new arr
  }
}
    return myaDinoArr;

}

getDinosaursAliveMya(exampleDinosaurData, 65,'name')

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
