/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dino = dinosaurs.find(dinos => dinos.name === dinosaurName); // declaring a variablet to find if the name given matches the name in the dinosaur data
                                                                    
  if (!dino) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`; // if the name doesn't exist we return a message stating so
  }

  let dinoId = dino.dinosaurId; // declaring a variable to store the dinosaur's IDs

  for (let room of rooms) {
    if (room.dinosaurs.includes(dinoId)) { //looping through the rooms to check if the rooms have the same ID as dinoId you return the room name if not you
      return `${room.name}`;                //return an error message with the dinosaur's name you were trying to find.
    }
  }
  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
}

console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Pterodactyl"))

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
  let roomArr = [];  // delaring a variable with an empty array that will be returned at the end


  for (let i = 0; i < rooms.length; i++) { // created a loop to loop through the data
    let roomConnected = rooms[i].connectsTo.find(room => room === id) //making sure the roomIDs match the ID that is being inputted

    if (roomConnected) {  
      roomArr.push(rooms[i].name) //if the roomId existed we are pushing in the name of the room to the array
    }
  }

  if (roomArr.length === 0 || !id) {
    return `Room with ID of '${id}' could not be found.`  //if the id doesn't exist or there are no rooms we return a message saying the room cannot be found;
  }
  return roomArr;
}

 
  


module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
