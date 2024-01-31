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



//   function getDinosaurDescription(dinosaurs, id) {
//     for (let key of dinosaurs){
//       let pronunciation = key.pronunciation
//       let name = key.name
//       let info = key.info
//       let period = key.period
//       let mya= key.mya
//     if(key.dinosaurId === id){
//       return `${name} ${pronunciation} \n ${info}. It lived in the ${period} period, over ${mya.length === 1 ? mya[0] : mya[1]} million years ago.`
//     }
    
//     }
//     return 'A dinosaur with an ID of cannot be found.'
  
//   }
//   console.log(getDinosaurDescription(exampleDinosaurData, 'V53DvdhV2A'))


  function getDinosaursAliveMya(dinosaurs, mya, key) {
    const result = [];
    
    dinosaurs.forEach((dino) => {
      const myaRange = dino.mya //the mya in the dinosaurs object
      if (
        (myaRange.length === 1 && (myaRange[0] === mya || myaRange[0] -1 === mya)) || 
        (myaRange.length === 2 && mya <= myaRange[0] && mya >= myaRange[1])
      ) {
        result.push(key in dino ? dino[key] : dino.dinosaurId);  //the result is pushed into result
      }
    });
    return result;
    }

