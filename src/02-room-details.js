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

// first look throught the data 
// next check the dinosaurs obj and look for the dino name 
// loop through the dino obj
// if the dino is in the object acess the name of the dino 
// if the dino name is there then DinosaurName === the dino name (true )
// loop through rooms array to find dino 
// after accessing dino make sure that the rooms include the dinoId which is the same as the dinoObj name 
// finally return the room that the dino is in


function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName){
for (let i = 0; i < dinosaurs.length; i++){ /// LOOP through dino obj
  if (dinosaurs[i].name == dinosaurName){  /// if dino.name === the dinoname 
    for (let x = 0; x < rooms.length; x++){ // LOOP through rooms object
      if(rooms[x].dinosaurs.includes(dinosaurs[i].dinosaurId)){ /// if the dino in the room includes the same as the dino data ID number which is how you identify the dino in rooms by its ID
        return rooms[x].name /// return room where dino is found
      }
    }
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
    
  }
}
  return `Dinosaur with name '${dinosaurName}' cannot be found.`
}

/**
 * 
 * 
 * 
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
// first i need an array for holding strings 
// next i would loop through array of rooms
// check each room object & access 'connectsTo'
// then I have to loop through connctsTo key which is an array value 
// then I have to make sure that the name of the room ID convert to the room name
let connectedRooms = []
  for (let i = 0; i < rooms.length; i++){
    if (rooms[i].roomId === id){
      connectedRooms = rooms[i].connectsTo
    }
    for (let j = 0; j < connectedRooms.length; j++){
      for (let k = 0; k < rooms.length; k++){
        if (connectedRooms[j] == rooms[k].roomId){
          connectedRooms[j] = rooms[k].name
        }
      }
    }
  } 
    if (connectedRooms.length === 0){
    return `Room with ID of 'incorrect-id' could not be found.`
  }
  return connectedRooms
}



module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
