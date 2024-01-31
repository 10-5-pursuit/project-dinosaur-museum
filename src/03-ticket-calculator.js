/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
function calculateTicketPrice(ticketData, ticketInfo) {

  if(!ticketData.hasOwnProperty(ticketInfo.ticketType)) {
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
  }

  let total = 0;
  let entrant = ticketInfo.entrantType

  if(ticketInfo.ticketType === "general") {
    if(!ticketData.general.priceInCents.hasOwnProperty(entrant)) {
      return `Entrant type '${entrant}' cannot be found.`
    }
    total += ticketData.general.priceInCents[entrant]
  }else if(!ticketData.membership.priceInCents.hasOwnProperty(entrant)) {
    return `Entrant type '${entrant}' cannot be found.`
  }else {
    total += ticketData.membership.priceInCents[entrant]
  }

  if(ticketInfo.extras.length == 0) {
    return total
  }else {
    for(const x of ticketInfo.extras) {
      if(ticketData.extras.hasOwnProperty(x)) {
        total += ticketData.extras[x].priceInCents[entrant]
      }else {
        return `Extra type '${ticketInfo.extras}' cannot be found.`
      }
    }
  }

  return total
}

/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
        discount: true
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found.
 */

//! Create a Discount option, There is only 1 discount option. If discount is true take 10% off price. 
// ? Helper Function to convert string(number) into dollars. 
const moneyConverter = (strNum) => {
  if(strNum.length > 4){
    return `$${strNum.slice(0, 3)}.${strNum.slice(3)}`
  }
  if(strNum.length > 5){
    return `$${strNum.slice(0, 4)}.${strNum.slice(4)}`
  }
  return `$${strNum.slice(0, 2)}.${strNum.slice(2)}`
}

// ? Helper function to calculate discount
function applyDiscount(price) {
  return price - (price / 10);
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
    if(!ticketData[purchases[0].ticketType].priceInCents.hasOwnProperty(purchases[0].entrantType)){
      return `Entrant type 'incorrect-entrant' cannot be found.`
    }
    let price = ticketData[purchases[0].ticketType].priceInCents[purchases[0].entrantType]
    let description = `${ticketData[purchases[0].ticketType].description}`;
    let entrant = purchases[0].entrantType.slice(0,1).toUpperCase() + purchases[0].entrantType.slice(1).toLowerCase()
    let extrasArr = purchases[0].extras;
    
    if(extrasArr.length === 0) {
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}`
        total += price;
    }else {
      if(!ticketData.extras.hasOwnProperty(purchases[0].extras[0])){
        return `Extra type 'incorrect-extra' cannot be found.`
      }
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
      // * apply a discount of 10% if discount is true
      if(purchases[0].discount === true){
        price = applyDiscount(price)
      }
      total += price;
      receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
    }

    return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`
  }

  // Multiple Purchases 
  for(let i = 0; i < purchases.length; i++) {
    if(!ticketData.hasOwnProperty(purchases[i].ticketType)) {
      return `Ticket type '${purchases[i].ticketType}' cannot be found.`
    }
    if(!ticketData[purchases[i].ticketType].priceInCents.hasOwnProperty(purchases[i].entrantType)){
      return `Entrant type '${purchases[i].ticketType}' cannot be found.`
    }

    let price = ticketData[purchases[i].ticketType].priceInCents[purchases[i].entrantType]
    let entrant = purchases[i].entrantType.slice(0,1).toUpperCase() + purchases[i].entrantType.slice(1).toLowerCase()
    let description = `${ticketData[purchases[i].ticketType].description}`;
    let extrasArr = purchases[i].extras
    let extrasStrOfArrays = []
    // Checking if extrasArray is empty or not. If empty process the description and add to the total
    if(extrasArr.length === 0) {
      if(i === purchases.length - 1){
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}`
        total += price;
        break;
      }
      receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}\n`
      total += price;
    // If the extrasArray is not empty Calculate the elements in the array. 
    }else{
      for(let j = 0; j < extrasArr.length; j++){
        if(!ticketData.extras.hasOwnProperty(...purchases[i].extras)){
          return `Extra type 'incorrect-extra' cannot be found.`
        }
        if(j === extrasArr.length - 1 || extrasArr.length === 1){
          extrasStrOfArrays.push(`${ticketData.extras[extrasArr[j]].description}`)
        }else {
          extrasStrOfArrays.push(`${ticketData.extras[extrasArr[j]].description}, `)
        }
        price += ticketData.extras[extrasArr[j]].priceInCents[purchases[i].entrantType]
      }
      if(purchases[i].discount === true){
        price = applyDiscount(price)
      }
      total += price
      let extraStr = extrasStrOfArrays.reduce((str, item) => {
        str += `${item}`
        return str   
      },"")
      if(i === purchases.length - 1){
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
        break;
      }
      receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})\n`
    }
  }
  return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`// Total converted
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
