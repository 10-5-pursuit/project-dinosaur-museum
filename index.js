const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

const exampleRoomData = require("./data/rooms");
const exampleTicketData = require("./data/tickets");

//////// DINOSAUR FACTS ///////

function getLongestDinosaur(dinosaurs) {
  const longestDinosaurObj = {};

  if (dinosaurs.length === 0){
    return {};
  }

// create an array of lengths using 'map' method, find max value and match to dinosaur objects to find longest dinosaur.

  let lengthMap = dinosaurs.map(dinosaur => dinosaur.lengthInMeters);
  let greatestLength = Math.max(...lengthMap);
  let longestDinosaur = dinosaurs.find(dinosaur => dinosaur.lengthInMeters === greatestLength);
  longestDinosaurObj[longestDinosaur.name] = longestDinosaur.lengthInMeters * 3.281;

  return longestDinosaurObj;
}


function getDinosaurDescription (dinosaurs, id){
  
  for(let i = 0; i < dinosaurs.length; i++){

    if(Object.values(dinosaurs[i]).includes(id)){
      return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[dinosaurs[i].mya.length - 1]} million years ago.`
    }    
  
  }
  
  return `A dinosaur with an ID of '${id}' cannot be found.`
}


function getDinosaursAliveMya(dinosaurs, mya, key) {

  let dinosaursAlive = dinosaurs.filter(dinosaur => {
    if(dinosaur.mya.length === 1){
      return mya <= dinosaur.mya[0] && mya >= dinosaur.mya[0] - 1;
    }
    else{
      return mya <= dinosaur.mya[0] && mya >= dinosaur.mya[1];
    }
  });

  let dinosaursAliveByIdOrKey = dinosaursAlive.map(dinosaur =>{

    if(key && Object.keys(dinosaur).includes(key)){
      return dinosaur[key]
    } 
    else {
      return dinosaur.dinosaurId
    }

  })

  return dinosaursAliveByIdOrKey;
}  

///  ROOM DETAILS

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {

  // Check if given dinosaurName exists in the dinosaurs object.
    let foundDinosaur = dinosaurs.find(dinosaur => dinosaur.name === dinosaurName);
    
    if(foundDinosaur){
  
  // Obtain the Id for FoundDinosaur and find room where the Id is present, return error message if not found.
      let foundId = dinosaurs.find(dinosaur => dinosaur.name === dinosaurName).dinosaurId;
      let foundRoom = rooms.find(room => room.dinosaurs.includes(foundId));
      
      return foundRoom ? foundRoom.name : `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
    }
    
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
    }

function getConnectedRoomNamesById(rooms, id) {

  if(!checkIfIdValid(rooms, id)){
    return `Room with ID of '${id}' could not be found.`;
  }

  let connectedRoomNames = [];

  let connectedRoomIds = rooms.find(room => room.roomId === id).connectsTo;

  for(let id of connectedRoomIds){
    if(!checkIfIdValid(rooms, id)){
      return `Room with ID of '${id}' could not be found.`;
    }
  }

  rooms.forEach(room => connectedRoomIds.includes(room.roomId) ? connectedRoomNames.push(room.name) : null);

  return connectedRoomNames;
}

/// Helper function to check if Id is valid
function checkIfIdValid (rooms, id){
  return rooms.map(room => room.roomId).includes(id);
}


//////    TICKET CALCULATOR ///////

function calculateTicketPrice(ticketData, ticketInfo) {

  let ticketPrice = 0;

  // Use helper functions to check for invalid entries.
  if (!checkTicketType(ticketInfo)){ 
  return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
  }

  else if (!checkEntrantTypeByKeys(ticketData, ticketInfo)){
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  }

  else if(!getExtraDescriptions(ticketData, ticketInfo)){
    return `Extra type '${identifyInvalidExtra(ticketData, ticketInfo)}' cannot be found.`
  }

  // Calculate total ticketPrice based on ticketType and entrantType.
  let typeCost = ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType];
  
  // get prices of each extra if extras is not an empty array and combine into extraCost.

  let extrasCost = 0;
  if(ticketInfo.extras.length > 0){
    
    for(extra of ticketInfo.extras){
      extrasCost += ticketData.extras[extra].priceInCents[ticketInfo.entrantType];
    } 
  }

  // add both costs to ticketPrice
  ticketPrice += typeCost + extrasCost;

  return ticketPrice;
}

//// Helper Functions////

//1. Helper function to check for valid ticket type and return appropriate price or false.

function checkTicketType(ticketInfo){
  // create an array that includes all valid ticket types, and check if value from ticketInfo is present in the array.
 
   let validTicketTypes = ["general", "membership"];
 
   return validTicketTypes.includes(ticketInfo.ticketType);
 }

 //2. Helper function to check for valid entrantType.

 function checkEntrantType(ticketInfo){
  let validEntrantTypes = ["child", "adult", "senior"]

  return validEntrantTypes.includes(ticketInfo.entrantType);
}

// 2.1 Another option for checking validity using keys. Might be more effective for larger data-sets.

function checkEntrantTypeByKeys(tickets, ticketInfo){

  return Object.keys(tickets[ticketInfo.ticketType].priceInCents).includes(ticketInfo.entrantType);
}

//3. Helper function that serves two purposes; concatonates extra descriptions and returns false if invalid extra exists.

function getExtraDescriptions(data, ticketInfo){

  if (ticketInfo.extras.some(extra => !Object.keys(data.extras).includes(extra))){
    
    return false;
  } 
  
  else {
  let extrasMap = ticketInfo.extras.map(extra => data.extras[extra].description)
  
    return `(${extrasMap.join(", ")})`;
  }
}

//4. Helper function to identify invalid extra:

function identifyInvalidExtra(data, ticketInfo){
  if (ticketInfo.extras.some(extra => !Object.keys(data.extras).includes(extra))){
    return ticketInfo.extras.find(extra => !Object.keys(data.extras).includes(extra));
  }
    return false;
  }


  function purchaseTickets(ticketData, purchases) {
    let total = 0;
    let receipt = "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------";
  
    for(let i = 0; i < purchases.length; i++){
  
      if(typeof calculateTicketPrice(ticketData, purchases[i]) === "string"){
        return calculateTicketPrice(ticketData, purchases[i]);
      }
  
      let currentEntrant = purchases[i].entrantType;
      let entrantCapitalized = currentEntrant[0].toUpperCase().concat(currentEntrant.substring(1, currentEntrant.length).toLowerCase());
      let currentPrice = calculateTicketPrice(ticketData, purchases[i]);
  
      if(purchases[i].extras.length > 0){
        receipt += `\n${entrantCapitalized} ${ticketData[purchases[i].ticketType].description}: $${currentPrice / 100}.00 ${getExtraDescriptions(ticketData, purchases[i])}`;
      }
        
      else{
        receipt += `\n${entrantCapitalized} ${ticketData[purchases[i].ticketType].description}: $${currentPrice / 100}.00`
      }
      
      total += currentPrice;
      
    }
  
    return receipt + `\n-------------------------------------------\nTOTAL: $${total / 100}.00`;
  }
  
/// STRETCH: Create object that classifies dinosaurs based on "diet" or "period".

function groupByKey(dinosaursData, key){
  if(key !== "diet" && key !== "period"){
    return `"${key}" is not a valid key for this function. Please try a valid key value.`
  }
  let dinosaursByKey = {};
  for(dinosaur of dinosaursData){
    if(dinosaursByKey.hasOwnProperty(dinosaur[key])){
      dinosaursByKey[dinosaur[key]].push(dinosaur.name);
    }
    else{
      dinosaursByKey[dinosaur[key]] = [dinosaur.name];
    }
  }
  return dinosaursByKey;
}

console.log(groupByKey(exampleDinosaurData, "mya"))