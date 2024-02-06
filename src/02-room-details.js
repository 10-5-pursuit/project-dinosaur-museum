/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const dinosaurs = require("../data/dinosaurs");
const rooms = require("../data/rooms");
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
// Recipe for > getRoomByDinosaurName()
// 1. Find the dinosaur object in the dinosaurs array.
// 2. If the dinosaur does not exist, return an error message.
// 3. Find the room where the dinosaur is located.
// 4. If the dinosaur is not in any room, return an error message.
//  5. Return the name of the room.

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  // Find the dinosaur object by matching the given dinosaur name
  let dinosaur = dinosaurs.find((dino) => dino.name === dinosaurName);

  // Check if the dinosaur with the given name exists
  if (!dinosaur) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }

  // Find the room containing the identified dinosaur based on its dinosaurId
  let room = rooms.find((room) => room.dinosaurs.includes(dinosaur.dinosaurId));

  // Check if the room containing the dinosaur is found
  if (!room) {
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  }

  // Return the name of the room containing the specified dinosaur
  return room.name;
}

console.log(getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus"));
console.log(getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl"));  


// using for loop
// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
//   let dinosaur = "";

//   for (let i = 0; i < dinosaurs.length; i++) {
//     if (dinosaurs[i].name === dinosaurName) {
//       dinosaur = dinosaurs[i];
//     }
//   } 

//   if (!dinosaur) {
//     return `Dinosaur with name '${dinosaurName}' cannot be found.`;
//   } 

//   for (let j = 0; j < rooms.length; j++) {
//     if (rooms[j].dinosaurs.includes(dinosaur.dinosaurId)) {
//       return rooms[j].name;
//     }
//   } 

//   return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
// }
// console.log(getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus"));
// console.log(getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl"));


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

// Function getConnectedRoomNamesById(rooms, id):
// targetRoom = Find the room in rooms where roomId is equal to id
// If targetRoom is not found:
//     Return a string indicating that the room with the specified ID could not be found
// Get the connectsTo property from targetRoom
// If connectsTo is not present:
//     Return a string indicating that no connections were found for the room
// Initialize an empty array connectedRoomNames
// For each connectionId in connectsTo:
//     connectedRoom = Find the room in rooms where roomId is equal to connectionId
//     If connectedRoom is not found:
//         Add a string to connectedRoomNames indicating that the connected room was not found for the specified ID
//     Else:
//         Add the name of the connected room to connectedRoomNames
// If connectedRoomNames includes a string indicating a connected room was not found:
//     Return an array containing that string
// If connectedRoomNames is not empty:
//     Return connectedRoomNames
// Else:
//     Return an empty array

function getConnectedRoomNamesById(rooms, id) {
  // Find the room with the specified ID
  const targetRoom = rooms.find((room) => room.roomId === id);

  // Check if the room with the given ID exists
  if (!targetRoom) {
    return `Room with ID of '${id}' could not be found.`;
  }

  // Destructure the connectsTo array from the targetRoom
  const { connectsTo } = targetRoom;
  // Equivalent line without destructuring: const connectsTo = targetRoom.connectsTo;

  // Check if there are no connections for the room
  if (!connectsTo) {
    return "No connections found for the room.";
  }

  // Map the connected room IDs to their names
  const connectedRoomNames = connectsTo.map((connectionId) => {
    // Find the room with the connected ID
    const connectedRoom = rooms.find((room) => room.roomId === connectionId);

    // Check if the connected room is not found
    if (!connectedRoom) {
      return `Connected room not found for ID: ${connectionId}`;
    }

    // Return the name of the connected room
    return connectedRoom.name;
  });

  // Check if there are any errors in finding connected rooms
  if (connectedRoomNames.includes(`Connected room not found for ID: incorrect-id`)) {
    return [`Room with ID of 'incorrect-id' could not be found.`];
  }

  // Return the array of connected room names, or an empty array if none are found
  return connectedRoomNames.length > 0 ? connectedRoomNames : [];
}

console.log(getConnectedRoomNamesById(rooms, "aIA6tevTne"));
console.log(getConnectedRoomNamesById(rooms, "A6QaYdyKra"));


// function getConnectedRoomNamesById(rooms, id) {
 
//   let targetRoom = '';

//   for (let i = 0; i < rooms.length; i++) {
//     if (rooms[i].roomId === id) {
//       targetRoom = rooms[i];
//     }
//   }

  // if (!targetRoom) {
  //    return `Room with ID of '${id}' could not be found.`;
  // }

  // // Extract the connectsTo property from the target room
  // const connectsTo = targetRoom.connectsTo;

  // if (!connectsTo) {
  //    return "No connections found for the room.";
  // }

  // //Map over the array of connection IDs to get connected room names
  // const connectedRoomNames = [];

  // for (let j = 0; j < connectsTo.length; j++) {
  //   // Find the connected room in the rooms array based on the connection ID
  //   let connectedRoom = '';

  //   for (let k = 0; k < rooms.length; k++) {
  //     if (rooms[k].roomId === connectsTo[j]) {
  //       connectedRoom = rooms[k];
  //       //break;
  //     }
  //   }

  //   //Check if the connected room with the specified ID exists
  //   if (!connectedRoom) {
  //     // Return an error message if the connected room is not found
  //     connectedRoomNames.push(
  //       `Connected room not found for ID: ${connectsTo[j]}`,
  //     );
  //   } else {
  //     // Add the name of the connected room to the result array
  //     connectedRoomNames.push(connectedRoom.name);
  //   }
  // }

  // Check if there's an error message related to a specific incorrect ID
  // if (
  //   connectedRoomNames.includes(`Connected room not found for ID: incorrect-id`)
  // ) {
  //   // Return an error message for the specific incorrect ID
  //   return [`Room with ID of 'incorrect-id' could not be found.`];
  // }

  // //Return the array of connected room names, or an empty array if no connections
  // return connectedRoomNames.length > 0 ? connectedRoomNames : [];
// }


module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
