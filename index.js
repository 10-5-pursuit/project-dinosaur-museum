const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //
// function checkingIfYearsIsWithinRange (age) {
    // for(let i = 0; i < age.length; i++){
    //   let arrayOfYears = age[i].mya;
    //   console.log(arrayOfYears);
      //   for(let j = 0; j < arrayOfYears.length; j++) {
          //     if(arrayOfYears.length == 2){
              //       if(age <= arrayOfYears[i] && age >= arrayOfYears[i+1]) {
                
                  //     }
                  // }
                  // }
                // }
            // }
//   console.log(checkingIfYearsIsWithinRange([ 156, 144 ]));



// function getDinosaursAliveMya(dinosaurs, mya, key) {
// let dinosaursFromEra = [];

// for(const info of dinosaurs) {
//     let years = info.mya
//     if(years.length === 1) {
// // Checking if mya equals only one digit. Next check if the mya is within those with two mya.
//         if (years[0] === mya && info.hasOwnProperty[key]) {
//             if(!info.hasOwnProperty[key]) {
//                 dinosaursFromEra.push(info.dinosaurId)
//             }
//         dinosaursFromEra.push(info[key])
//         } 
//     } else {
//         if (mya <= years[0] && mya >= years[1]) {
//             if (info.hasOwnProperty[key]) {
//                 dinosaursFromEra.push(info[key])
//             } else {
//             dinosaursFromEra.push(info.dinosaurId)
//             }
//         }
//     }
    
// }



// return dinosaursFromEra;
// }
function getDinosaursAliveMya(dinosaurs, mya, key) {
    let dinosaursFromEra = [];
    
    for(const info of dinosaurs) {
      let years = info.mya;
      if(years.length === 1 && years[0] - 1 === mya) {
        if(key) {
          dinosaursFromEra.push(info[key])
        }
          dinosaursFromEra.push(info.dinosaurId)
      }
      if(mya <= years[0] && mya >= years[years.length -1]) {
        if(key) {
          dinosaursFromEra.push(info[key])
        }
          dinosaursFromEra.push(info.dinosaurId)
  
      }
    }
    return dinosaursFromEra;
}
console.log(getDinosaursAliveMya(exampleDinosaurData))