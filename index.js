
const dinosaurs = require("./data/dinosaurs");
const exampleDinosaurData = require("./data/dinosaurs");

// function getLongestDinosaur(dinosaurs) {
//   let longestDinosaurLength = 0;
//   let longestDinosaurName = '';
//   if (dinosaurs.length === 0) return {};
//   // Loop through the dinosaurs array.
//   for ( let i = 0; i < dinosaurs.length; i++) {
//     if (dinosaurs[i].lengthInMeters > longestDinosaurLength) {
//       longestDinosaurLength = dinosaurs[i].lengthInMeters;
//       longestDinosaurName = dinosaurs[i].name;
//     }
//   }
// console.log(longestDinosaurName)
//   lengthInFeet = longestDinosaurLength * 3.281;
//   const longestDinosaur = {};
//     longestDinosaur [longestDinosaurName] = lengthInFeet
//  console.log(longestDinosaur)
// // Return the longest dinosaur and its height in feet.
//   return longestDinosaur

// }
// console.log(getLongestDinosaur(exampleDinosaurData))


const { dinosaurID, name, pronunciation, meaningOfName, diet, lengthInMeters, period, mya, info } = dinosaurs




function getDinosaurDescription(dinosaurs, id) {
  for (let key of dinosaurs){
    let pronunciation = key.pronunciation
    let name = key.name
    let info = key.info
    let period = key.period
    let mya= key.mya
  if(key.dinosaurId === id){
    return `${name} ${pronunciation} \n ${info}. It lived in the ${period} period, over ${mya.length === 1 ? mya[0] : mya[1]} million years ago.`
  }
  
  }
  return 'A dinosaur with an ID of cannot be found.'

}
console.log(getDinosaurDescription(exampleDinosaurData, 'V53DvdhV2A'))