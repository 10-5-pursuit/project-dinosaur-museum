/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");

const dinoFacts = require("../src/01-dinosaur-facts");
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
  //id will have the return of the helper function getDinosaurId from 01-dinodaur-facts
  const id = dinoFacts.getDinosaurId(dinosaurs,dinosaurName)

  if (id== '') return `Dinosaur with name '${dinosaurName}' cannot be found.`;

  let DinosaurRoom = '';

  rooms.forEach(room =>{
    if(room.dinosaurs.includes(id)){
      DinosaurRoom = room.name;
    }
  })

  if(DinosaurRoom == '') return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;

  return DinosaurRoom;
}
getRoomByDinosaurName(exampleDinosaurData,exampleRoomData,'Tyrannosaurus')

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
// helper function 01 checks if the id is in the data, return true or false
function checkRoomId (rooms, id){
  //return true if at least 1 element of the array match the id. returns false if no id in the data
  return rooms.some(room => room.roomId === id)
}

// helper function 02 checks the ids of the array 'connects To' and return the name if it find a connected room that is not in the data
function checkConnectedRooms (rooms){

  for (let room of rooms) {
    for (let connectedId of room.connectsTo) {
      if (!checkRoomId(rooms, connectedId)) {
        return connectedId;
      }
    }
  }
  return undefined;
}

function getConnectedRoomNamesById(rooms, id) {

  const roomDoesNotExist = checkConnectedRooms(rooms);

  if (roomDoesNotExist) return `Room with ID of '${roomDoesNotExist}' could not be found.`;
  
  if (!checkRoomId(rooms, id)) return `Room with ID of '${id}' could not be found.`;
  
  const connectedRooms = rooms.filter(room => room.connectsTo.includes(id)).map(room => room.name);

  return connectedRooms;
}
// console.log(getConnectedRoomNamesById(exampleRoomData,"A6QaYdyKra"))

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
