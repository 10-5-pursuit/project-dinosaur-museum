const exampleDinosaurData = require("./data/dinosaurs");

function getLongestDinosaur(dinosaurs) {
  let longestDinosaurName = dinosaurs[0];
  let longestDinosaurLengthInFeet = 0;

  dinosaurs.forEach(dino => {  //
    let lengthInFeet = dino.lengthInMeters * 3.281; //converts length in meters to feet
    if (lengthInFeet > longestDinosaurLengthInFeet)
    {
      longestDinosaurLengthInFeet = lengthInFeet;
      longestDinosaurName = dino.name;
    }
  });

let result = {};
result[longestDinosaurName] = longestDinosaurLengthInFeet;
return result;
  }


  
  // function getDinosaurDescription(dinosaurs, id){
  //   const dinosaur = dinosaurs.find(dino => dino.dinosaurID === id);
  //   if (!dinosaur){
  //     return `"Error: Dinosaur with ID ${id} cannot be found.`;
  //   }
  
  //   return `Name: (${dinosaur.name} ($dinosaur.pronounciation))
  //   Period: ${dinosaur.period}
  //   Diet: ${dinosaur.diet}
  //   Length: ${dinosaur.lengthInMeters} meters
  //   Info: ${dinosaur.info}';
  
  // }
  

  function getDinosaurDescription(dinosaurs, id) {
    for (let dinoObj of dinosaurs) {
      if (dinoObj.dinosaurId === id) {
        let myaIndex = 0;
        if (dinoObj.mya.length > 1) {
          myaIndex = dinoObj.mya.length - 1;
        }
        return `${dinoObj.name} (${dinoObj.pronunciation}), lived during the ${dinoObj.period} period, about ${dinoObj.mya[myaIndex]} million years ago.`;
      }
    }
    return `A dinosaur with an ID of '${id}' cannot be found.`;
  }


  function getDinosaursAliveMya(dinosaurs, mya, key) {
   
  





  }



  function getDinosaursAliveMya(dinosaurs, mya, key) {
    const result = [];
    
    dinosaurs.forEach((dino) => {
      const myaRange = dino.mya //the mya in the dinosaurs object
      if (
        (myaRange.length === 1 && (myaRange[0] === mya || myaRange[0] -1 === mya)) || 
        (myaRange.length === 2 && mya <= myaRange[0] && mya >= myaRange[1])
      ) {
        result.push(key in dino ? dino[key] : dino.dinosaurId);
      }
    });
    return result;
    }
    
// /// Program your functions below //

// function getLongestDinosaur(dinosaurs) {
//     let longestDinosaur= Math.max(dinosaurs.lengthInMeters)
//     let longestDinosaurInFeet = longestDinosaur *  3.281;
//     //dinosaurs.longestInFeet = longestDinosaurInFeet;
//     return `${name}: ${longestDinosaurInFeet} feet long`;
//   }
//   getLongestDinosaur()
