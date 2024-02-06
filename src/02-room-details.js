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
  const getDinosaur = dinosaurs.find((dinosaur) => dinosaur.name === dinosaurName);  //.find method searches through array and finds specified  element (parameter to pass as the argument when the function is called)

  if (getDinosaur) { //if specified dino is found (true)
    const roomName = rooms.find((room) => room.dinosaurs.includes(getDinosaur.dinosaurId)); //then .find method searches the rooms array and finds the room the dinosaur is assigned using .include that checks for a specified element is there, returns boolean true or false value

    if (roomName) { //nested if statement, if room where dino is located is found (true)
      return roomName.name; //returns room name if true
    } else {
      return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`; //temperal literal to return formatted sentence if false
    }
  } else {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`; //if dino is not found, uses temperal literal to return formatted sentence that dino can't be found
  }
}

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
      const targetConnectedRoom = rooms.find((room) => room.roomId === id); //.find method searches through array and finds specified  element (parameter to pass as the argument when the function is called)
    
      if (targetConnectedRoom) { // if specified room is found (true)
        const connectedRoomIds = targetConnectedRoom.connectsTo;  // if room is found, adds connected room IDs to variable 
    
        if (connectedRoomIds) { //checks if a connected room exists within object
          
          const connectedRoomNames = connectedRoomIds.map((roomId) => { //used map to get an array of connected room names, .map returns new array of connected rooms
            const connectedRoom = rooms.find((room) => room.roomId === roomId);
            return connectedRoom ? connectedRoom.name : null;
          });
    
          return connectedRoomNames.filter((name) => name !== null); //filter out null values (rooms not found) and return the result within the nested if statement 
          } else {
            return `Room with ID of '${id}' could not be found.`;   //returns formatted error message if connectedRoomIds is undefined
          }
      } else {
        
        return `Room with ID of '${id}' could not be found.`;   //returns an error message if connectedRoomIds is undefined from original if statement
      }
    }
    

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
