
const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
//console.log(exampleRoomData)

for (let dinosaur of exampleDinosaurData) { //dino name
    console.log(dinosaur.name);
}

for (let dinosaurMya of exampleDinosaurData) { //all mya data
    console.log(dinosaurMya.mya);
}

for (let dinoMya of exampleDinosaurData) { //name and mya info
    console.log({ name: dinoMya.name, mya: dinoMya.mya });
}

for (let roomId of exampleRoomData) { //room ID
  //  console.log('Room id: ' + roomId.roomId);
    console.log(`Room id, ${roomId.roomId}`);
}

for (let roomId of exampleRoomData) { //room ID and room name returned (logged as object)
  console.log({ roomNum: roomId.roomId, roomName: roomId.name });
}

/// Program your functions below //
//01.01
// function getLongestDinosaur(dinosaurs) {
//   let longestDinosaur = 0;  //initialized variable to hold longestDino
//   let longestDinoObj = {}; //create empty object to hold values of data returned
//   let dinoInFeet; //initialize variable to convert meters into feet, used in each iteration

//   for(let dinosaursObj of dinosaurs) { //for of loop, creates object to hold info from looping(searching) dinosaurs array (of objects)
//     let lengthInMeters = dinosaursObj.lengthInMeters  //intialize variable to locate user's height

//     if (lengthInMeters > longestDinosaur) { //conditional statement, checks if current record searched is larger than stored record, if it is, then it updates variable
//       longestDinosaur = lengthInMeters; //updates longestDinosaur with length in meters
//       dinoInFeet = lengthInMeters * 3.281; // converts dino meters into feet
//       longestDinoObj = {[dinosaursObj.name]: dinoInFeet} //updates dino object with dino name as key and length as value
//     }  
//   } 
//   return longestDinoObj //returns longest Dinosaur
// }
// console.log(getLongestDinosaur(exampleDinosaurData))

// //01.02
// function getDinosaurDescription(dinosaurs, id) {

//   const findDinosaur = dinosaurs.find((dinosaur) => dinosaur.dinosaurId === id);
//   //used the find array method to search through the array (dinosaur) using a callback function that finds the dinosaur with the specified id
//   if (findDinosaur) { //checks if specified dinosaur is found
//       let myaIndex = 0 //initializes mya Index variable to hold position of index found
//   if (findDinosaur.mya.length > 1) { //checks if mya array has more than 1 element
//       myaIndex += 1 //if yes, increment the MyaIndex
//       } return(`${findDinosaur.name} (${findDinosaur.pronunciation})\n${findDinosaur.info} It lived in the ${findDinosaur.period} period, over ${findDinosaur.mya[myaIndex]} million years ago.`) //return formated message with template literal if specified id is found 
//       } else {
//         return(`A dinosaur with an ID of '${id}' cannot be found.`)
//         } //returns formatted message if specified id is not found
// }
// console.log(getDinosaurDescription(exampleDinosaurData, "U9vuZmgKwUr"));
// console.log(getDinosaurDescription(exampleDinosaurData, "incorrect-id"));


//01.03

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
 */

// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   let findDinoAlive = []; //initialize empty array to store values of dino mya years

//   for (let dinosaur of dinosaurs) { //loop through dinosaurs array of objects
//     if (dinosaur.mya.length === 1) { //checks if there is more than one value for mya
//       if (mya === dinosaur.mya[0] || mya === dinosaur.mya[0] - 1) { //checks if specified mya matches or is 1 less.
//         if (key > key.length) {
//           return dinosaur[key]
//         } else {
//           return dinosaur.dinosaurID
//         }
//       }
//     }
//   }







//   return findDinoAlive;
//   }


// console.log(getDinosaursAliveMya(exampleDinosaurData))

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



/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *

/*EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
//   const getDinosaur = dinosaurs.find((dinosaur) => dinosaur.name === dinosaurName);  //.find method searches through array and finds specified  element (parameter to pass as the argument when the function is called)

//   if (getDinosaur) { //if specified dino is found (true)
//     const roomName = rooms.find((room) => room.dinosaurs.includes(getDinosaur.dinosaurId)); //then .find method searches the rooms array and finds the room the dinosaur is assigned using .include that checks for a specified element is there, returns boolean true or false value

//     if (roomName) { //nested if statement, if room where dino is located is found 
//       return roomName.name; //returns room name if true
//     } else {
//       return `Dinosaur with name '${dinosaurName}' is not assigned to any room.`; //temperal literal to return formatted sentence if false
//     }
//   } else {
//     return `Dinosaur with name '${dinosaurName}' cannot be found.`; //if doino is not found, uses temperal literal to return formatted sentence that dino can't be found
//   }
// }
// console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Tyrannosaurus"));
// console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Pterodactyl"));







