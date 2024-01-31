
const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

//01 - Problem 1, return longest dino in feet as an object dino.name: length in ft.
// function getLongestDinosaur(dinosaurs) {
//     let longestDinosaur = dinosaurs[0]; //initilize variable with the first dino in the array
    
//     dinosaurs.forEach((dinosaur) => { //loops through each dino in array
//       if (dinosaur.lengthInMeters > longestDinosaur.lengthInMeters) {  //checks for longest dino
//         longestDinosaur = dinosaur; // if true, updates longestDinosaur to current dino
//       }
//     });
  
//       const longestDino = { [longestDinosaur.name]: longestDinosaur.lengthInMeters * 3.281};  //creates an object with the dino name as the object key and length in meters as the value - multipied by 3.281 to convert to feet.
//       return longestDino;
//   }

//   console.log(getLongestDinosaur(exampleDinosaurData))

//02 - Problem 2, return dino details formatted.
  function getDinosaurDescription(dinosaurs, id) {
    const findDinosaur = dinosaurs.find((dinosaur) => dinosaur.dinosaurId === id);  //.find to find dinosaur with specified ID
    
    if (findDinosaur) {  //if findDino is true
      console.log(`${findDinosaur.name} (${findDinosaur.pronunciation})\n${findDinosaur.info} It lived in the ${findDinosaur.period} period, over ${findDinosaur.mya[1]} million years ago.`) //prints formatted text
    } else {
      console.log(`A dinosaur with an ID of ${id} cannot be found.`)  //prints formatted text if id is not found, or incorrect input
    }
    
  }
  getDinosaurDescription(exampleDinosaurData, "U9vuZmgKwUr")
  getDinosaurDescription(exampleDinosaurData, "incorrect-id")



