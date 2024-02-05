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
  // Filter the dinosaurs array to find the dinosaur with the specified name
  let dinId=dinosaurs.filter(din => {if(din.name==dinosaurName){return din.dinosaurId}})
  // Initialize an array to store the names of rooms containing the dinosaur
  let roomName=[]
  // Check if the dinosaur with the specified name was found
  if(dinId.length>0){
  // Filter the rooms array to find the rooms containing the dinosaur
   roomName = rooms.filter(room => {
     for(let i=0;i<room.dinosaurs.length; i++){
       if(room.dinosaurs[i]==dinId[0].dinosaurId) {return room.name}
     }
   })
  // Check if rooms containing the dinosaur were found
    if(roomName.length>0){
      return roomName[0].name
    }
    else{
      return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`}
  }
  else{
     return `Dinosaur with name '${dinosaurName}' cannot be found.`}
}
  //If rooms containing the dinosaur are found, the function returns the name of the first room in the roomName array.
  //If no rooms are found containing the dinosaur, it returns an error message stating that the dinosaur with the specified name cannot be found in any rooms.
  //If no dinosaur with the specified name is found, the function returns an error message stating that the dinosaur cannot be found.






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
  // Find the room in the 'rooms' array that matches the given 'id'
  let foundRoom = rooms.find(room => room.roomId === id);
  // If the room with the given 'id' is not found, return an error message
   if(!foundRoom){
      return `Room with ID of '${id}' could not be found.`;
    }
  // Initialize an array to store the names of connected rooms
  let connectedRoomNames = [];
  // Iterate over the 'connectsTo' array of the found room
   for(let connectedId of foundRoom.connectsTo){
  // Find the connected room in the 'rooms' array based on the 'connectedId'
    let connectedRoom = rooms.find(room => room.roomId === connectedId);
  // If the connected room is not found, return an error message
     if(!connectedRoom) {
       return `Room with ID of '${connectedId}' could not be found.`;
     }
  // Add the name of the connected room to the array
    connectedRoomNames.push(connectedRoom.name);
   }
  // Return the array of connected room names
    return connectedRoomNames;
}
/**It uses the find method to directly find the room with the specified ID in the rooms array.
   *It checks if the room is found, and if not, it returns an appropriate error message.
   *If the room is found, it filters out any 'incorrect-id' from the connectsTo array and maps the remaining IDs to their corresponding room names.
   *This approach reduces the need for explicit loops and simplifies the logic.
*/





module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
 


  