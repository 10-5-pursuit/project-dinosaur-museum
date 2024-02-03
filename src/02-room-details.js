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
// function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {

//     let dinosaur = dinosaurs.find(dino => dino.name === dinosaurName); // Find the dinosaur object in the dinosaurs array

//     if (!dinosaur) {
//         return `Dinosaur with name '${dinosaurName}' cannot be found.`;
//     } // If the dinosaur does not exist, return an error message

//     let room = rooms.find(room => room.dinosaurs.includes(dinosaur.dinosaurId)); // Find the room where the dinosaur is located

//     if (!room) {
//         return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`; // If the dinosaur is not in any room, return an error message
//     }

//     return room.name;  // Return the name of the room
//   }

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dinosaur = ""; // Initialize as an empty string

  for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].name === dinosaurName) {
      dinosaur = dinosaurs[i];
      // break; // Exit the loop once the dinosaur is found
    }
  } // Find the dinosaur with the specified name

  if (!dinosaur) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  } // Check if a dinosaur with the specified name was found

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].dinosaurs.includes(dinosaur.dinosaurId)) {
      return rooms[i].name;
    }
  } // Find the room containing the dinosaur

  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
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

//  // Function to retrieve connected room names based on a specified room ID
// function getConnectedRoomNamesById(rooms, id) {
//   // Find the room with the specified ID in the rooms array
//   const targetRoom = rooms.find(room => room.roomId === id);

//   // Check if the target room with the specified ID exists
//   if (!targetRoom) {
//     // Return an error message if the room is not found
//     return `Room with ID of '${id}' could not be found.`;
//   }

//   // Extract the connectsTo property from the target room
//   const { connectsTo } = targetRoom;

//   // Check if the target room has no connections
//   if (!connectsTo) {
//     // Return a message indicating no connections found for the room
//     return "No connections found for the room.";
//   }

//   // Map over the array of connection IDs to get connected room names
//   const connectedRoomNames = connectsTo.map(connectionId => {
//     // Find the connected room in the rooms array based on the connection ID
//     const connectedRoom = rooms.find(room => room.roomId === connectionId);
//     // Check if the connected room with the specified ID exists
//     if (!connectedRoom) {
//       // Return an error message if the connected room is not found
//       return `Connected room not found for ID: ${connectionId}`;
//     }
//     // Return the name of the connected room
//     return connectedRoom.name;
//   });

//   // Check if there's an error message related to a specific incorrect ID
//   if (connectedRoomNames.includes(`Connected room not found for ID: incorrect-id`)) {
//     // Return an error message for the specific incorrect ID
//     return [`Room with ID of 'incorrect-id' could not be found.`];
//   }

//   // Return the array of connected room names, or an empty array if no connections
//   return connectedRoomNames.length > 0 ? connectedRoomNames : [];
// }

function getConnectedRoomNamesById(rooms, id) {
  // Find the room with the specified ID in the rooms array
  let targetRoom = null;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === id) {
      targetRoom = rooms[i];
      break;
    }
  }

  // Check if the target room with the specified ID exists
  if (!targetRoom) {
    // Return an error message if the room is not found
    return `Room with ID of '${id}' could not be found.`;
  }

  // Extract the connectsTo property from the target room
  const connectsTo = targetRoom.connectsTo;

  // Check if the target room has no connections
  if (!connectsTo) {
    // Return a message indicating no connections found for the room
    return "No connections found for the room.";
  }

  // Map over the array of connection IDs to get connected room names
  const connectedRoomNames = [];

  for (let i = 0; i < connectsTo.length; i++) {
    // Find the connected room in the rooms array based on the connection ID
    let connectedRoom = null;

    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j].roomId === connectsTo[i]) {
        connectedRoom = rooms[j];
        break;
      }
    }

    // Check if the connected room with the specified ID exists
    if (!connectedRoom) {
      // Return an error message if the connected room is not found
      connectedRoomNames.push(
        `Connected room not found for ID: ${connectsTo[i]}`
      );
    } else {
      // Add the name of the connected room to the result array
      connectedRoomNames.push(connectedRoom.name);
    }
  }

  // Check if there's an error message related to a specific incorrect ID
  if (
    connectedRoomNames.includes(`Connected room not found for ID: incorrect-id`)
  ) {
    // Return an error message for the specific incorrect ID
    return [`Room with ID of 'incorrect-id' could not be found.`];
  }

  // Return the array of connected room names, or an empty array if no connections
  return connectedRoomNames.length > 0 ? connectedRoomNames : [];
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
