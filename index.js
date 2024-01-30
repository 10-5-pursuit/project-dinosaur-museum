const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
/// Program your functions below //
function getConnectedRoomNamesById(rooms, id) {
    let roomArray = rooms.filter(room => room.connectsTo.includes(id));
    if(roomArray.length == 0){
        return `Room with ID of '${id}' could not be found.`
    }

    let roomNameArray = roomArray.filter(room => room.name)
    if(roomNameArray.length === 0){
        return `Room with ID of '${id}' could not be found.`
    }
    return roomNameArray
}

console.log(getConnectedRoomNamesById(exampleRoomData, "Gp6nCN1JGT"))