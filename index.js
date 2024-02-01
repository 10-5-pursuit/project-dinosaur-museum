



const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

function getDinosaursAliveMya(dinosaurs, mya, key) {
  let arr = []; //declare empty array

  for(let dinoMyaObj of dinosaurs) { //creates variable dinoMya and it returns ALL objects in array
    dinosaurs.mya.length > 1 ? dinoMyaObj = {[dinosaurs[i].mya]} :

   
    

  

  return arr;
  }

}
console.log(getDinosaursAliveMya(exampleDinosaurData))

/* EXAMPLE:
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