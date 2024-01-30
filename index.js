const dinosaurs = require("./data/dinosaurs");
const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //


function getLongestDinosaur(dinosaurs) {
    let longestDinosaur;
    let longestLengthInFeet = 0;
  
    for (let dinosaur of dinosaurs) {
      let lengthInFeet = dinosaur.lengthInMeter * 3.281;
  
      if (lengthInFeet > longestLengthInFeet) {
        longestDinosaur = dinosaur.name;
        longestLengthInFeet = lengthInFeet;
      }
    }
    return {[longestDinosaur]: longestLengthInFeet};
  }
  getLongestDinosaur();

