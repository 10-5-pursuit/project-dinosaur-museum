const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //
function getLongestDinosaur(dinosaurs) {
    if(dinosaurs == []){
      return {}
    }
    let sortedInfo = dinosaurs.sort((a, b) => b.lengthInMeters - a.lengthInMeters)
    let longest = 0;
    let obj = sortedInfo.reduce((obj, dino) => {
      if(dino.lengthInMeters >= longest){
        if(dino.lengthInMeters === longest){
          obj[dino.name] = (dino.lengthInMeters * 3.281).toFixed(2)
        }
        longest = dino.lengthInMeters
        obj[dino.name] = (dino.lengthInMeters * 3.281).toFixed(2)
      }
      return obj;
    },{});
    let resultArr = Object.entries(obj)[0];
    return {[resultArr[0]]: +resultArr[1]}
}

// console.log(getLongestDinosaur(exampleDinosaurData))

function getDinosaursAliveMya(dinosaurs, mya, key) {
    let array = [];
  
    for(let dino of dinosaurs) {
        if(dino.mya.length == 1){
            if(mya == dino.mya[0] || mya == dino.mya[0] - 1){
                if(key){
                    if(!dino[key]){
                        array.push(dino.dinosaurId)
                    }else {
                        array.push(dino[key]);
                    }
                }else {
                    array.push(dino.dinosaurId);
                }
            }
        }else if(mya <= dino.mya[0] && mya >= dino.mya[1]){
            if(key){
                if(!dino[key]){
                    array.push(dino.dinosaurId)
                }else {
                    array.push(dino[key]);
                }
            }else{
                array.push(dino.dinosaurId);
            }
        }
    }
    return array; 
}

console.log(getDinosaursAliveMya(exampleDinosaurData, 150))