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
  // Check if the input array is empty
  if(dinosaurs.length===0) return {}
  // Initialize variables to keep track of the maximum height and corresponding dinosaur
  let maxDino={}
  let maxHeigth=0
  let dinoName=''
  // Iterate through each dinosaur in the input array
   dinosaurs.forEach(din => {
  // Check if the current dinosaur's length is greater than the current maximum heigh
    if(din.lengthInMeters > maxHeigth){
  // Update the maximum height and corresponding dinosaur's name
      maxHeigth=din.lengthInMeters
      dinoName=din.name
      }
   })
  // Convert the maximum height from meters to feet (assuming 1 meter = 3.281 feet)
      maxHeigth= maxHeigth * 3.281

  // Create an object with the dinosaur's name as the key and its height as the value
      maxDino[dinoName]=maxHeigth 
  // Return the object containing the name and height of the tallest dinosaur
      return maxDino;
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
  // Use the filter method to find the dinosaur with the given ID
  let din= dinosaurs.filter(dinos => dinos.dinosaurId == id)[0]
  // Check if the dinosaur with the specified ID was not found
    if(din===undefined) return `A dinosaur with an ID of '${id}' cannot be found.`
  // Construct the description string using information from the found dinosaur object
    return `${din.name} (${din.pronunciation})\n${din.info} It lived in the ${din.period} period, over ${din.mya[din.mya.length-1]} million years ago.`
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
// Use the filter method to find dinosaurs that were alive during the specified time period
  let dino=dinosaurs.filter(din =>{
    if (din.mya.length == 1 && (din.mya==mya ||din.mya-1==mya)) return din.dinosaurId
    else if (mya<=din.mya[0] && mya>=din.mya[1]) return din.dinosaurId
  })
   // Initialize an array to store either dinosaur IDs or name
  let dinOfId=[];
  // Populate the array based on the specified key ('name' or 'dinosaurId')
   if(key== 'name'){
    dino.forEach(din=> dinOfId.push(din.name))}
   else{
    dino.forEach(din=> dinOfId.push(din.dinosaurId))}
  
  // Return the array of either dinosaur IDs
   return dinOfId
}





module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
