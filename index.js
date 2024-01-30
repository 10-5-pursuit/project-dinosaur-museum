
const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //


//01 - Problem 1, 
function getLongestDinosaur(dinosaurs) {
    let longestDinosaur = dinosaurs[0]; 
    
    dinosaurs.forEach((dinosaur) => {
      if (dinosaur.lengthInMeters > longestDinosaur.lengthInMeters) {
        longestDinosaur = dinosaur;
      }
    });
  
      const longestDino = { [longestDinosaur.name]: longestDinosaur.lengthInMeters * 3.281};
      return longestDino;
  }

  console.log(getLongestDinosaur(exampleDinosaurData))

