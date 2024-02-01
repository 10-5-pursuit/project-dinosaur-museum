const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const exampleTicketData = require("./data/tickets");
/// Program your functions below //
/*
* EXAMPLE:
const purchases = [
  {
    ticketType: "general", // Incorrect
    entrantType: "adult",
    extras: ["movie", "terrace"],
  }
]
*/
// Helper Function To Convert The string Number to US currency
const getConnectedRoomNamesById = (rooms, id) => {
  let roomArray = rooms.filter(room => room.connectsTo.includes(id));
  if(roomArray.length == 0){
    return `Room with ID of '${id}' could not be found.`;
  }

  return roomArray.reduce((arr, room) => {
    if(!room.connectsTo.includes(id)){
      return `Room with ID of '${id}' could not be found.`;
    }
    arr.push(room.name);
    return arr;
  },[]);
}
console.log(getConnectedRoomNamesById(exampleRoomData, "A6QaYdyKra"))

//     purchaseTickets(tickets, purchases);
 //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"
