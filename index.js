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
const moneyConverter = (strNum) => {
    if(strNum.length > 4){
      return `$${strNum.slice(0, 3)}.${strNum.slice(3)}`
    }
    if(strNum.length > 5){
      return `$${strNum.slice(0, 4)}.${strNum.slice(4)}`
    }
    return `$${strNum.slice(0, 2)}.${strNum.slice(2)}`
  }
        
  function purchaseTickets(ticketData, purchases) {
    let receipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
    let receiptDescription = "";
    let total = 0;
    
    // Sinlge Purchase Ticket 
    if(purchases.length === 1){
      if(!ticketData.hasOwnProperty(purchases[0].ticketType)) {
        return `Ticket type '${purchases[0].ticketType}' cannot be found.`
      }
      let price = ticketData[purchases[0].ticketType].priceInCents[purchases[0].entrantType]
      let description = `${ticketData[purchases[0].ticketType].description}`;
      let entrant = purchases[0].entrantType.slice(0,1).toUpperCase() + purchases[0].entrantType.slice(1).toLowerCase()
      let extrasArr = purchases[0].extras;
      
      if(extrasArr.length === 0) {
          receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}`
          total += price;
      }else {
        let extraStr = extrasArr.reduce((str, item, _, arr) => {
        if(item === arr[arr.length - 1]){
          str += `${ticketData.extras[item].description}`
          price += ticketData.extras[item].priceInCents[purchases[0].entrantType]
          return str
        }else {
          str += `${ticketData.extras[item].description}, `
          price += ticketData.extras[item].priceInCents[purchases[0].entrantType]
          return str
        }
        },"")
        total += price;
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
      }
  
    return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`
}
  
  // Multiple Purchases 
  for(let i = 0; i < purchases.length; i++) {
    let price = ticketData[purchases[i].ticketType].priceInCents[purchases[i].entrantType]
    let entrant = purchases[i].entrantType.slice(0,1).toUpperCase() + purchases[i].entrantType.slice(1).toLowerCase()
    let description = `${ticketData[purchases[i].ticketType].description}`;
    let extrasArr = purchases[i].extras
    let extrasStrOfArrays = []
    for(let i = 0; i < extrasArr.length; i++){
      if(i === extrasArr.length - 1){
        extrasStrOfArrays.push(`${ticketData.extras[extrasArr[i]].description}`)
      }else if(extrasArr.length === 1){
        extrasStrOfArrays.push(`${ticketData.extras[extrasArr[i]].description}`)
      }else {
        extrasStrOfArrays.push(`${ticketData.extras[extrasArr[i]].description}, `)
      }
      total += ticketData.extras[extrasArr[i]].priceInCents[purchases[i].entrantType]
    }
    total += price
    let extraStr = extrasStrOfArrays.reduce((str, item, _, arr) => {
      if(item === arr[arr.length - 1]){
        str += `${item}`
        return str
      }else {
        str += `${item}, `
        return str
      }
    },"")
    if(i === purchases.length - 1){
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
        continue;
    }
    receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})\n`
    }
    return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`// Total converted
  }

const purchases = [
    {
      ticketType: "genef",
      entrantType: "adult",
      extras: [],
    },
]
    // {
    //   ticketType: "general",
    //   entrantType: "senior",
    //   extras: ["terrace"],
    // },
    // {
    //   ticketType: "general",
    //   entrantType: "child",
    //   extras: ["education", "movie", "terrace"],
    // },
    // {
    //   ticketType: "general",
    //   entrantType: "child",
    //   extras: ["education", "movie", "terrace"],
    // },
                
// ];
console.log(purchaseTickets(exampleTicketData, purchases))

//     purchaseTickets(tickets, purchases);
 //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"
