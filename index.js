const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const exampleTicketData = require("./data/tickets");

/// Program your functions below //

function getConnectedRoomNamesById(rooms, id) {
    let connectedRooms = [];
  
    for (const room of rooms)
      if (room.roomId == id)
        connectedRooms = room.connectsTo;
  
    const smallerRooms = rooms.reduce((group, x) => {
      group[x.roomId] = x.name;
      return group;
    },{});
  
    return connectedRooms.map(x => smallerRooms[x]);
  }

console.log(getConnectedRoomNamesById(exampleRoomData, "zwfsfPU5u"));