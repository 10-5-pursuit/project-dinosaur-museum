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
  // Check if the ticket type exists in ticketData
  if (!ticketData[ticketInfo.ticketType]) {
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
  }

  // Check if the entrant type exists for the ticket type
  let priceInCents = ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType];
  if (priceInCents === undefined) {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  }

  // Start with the base price for the ticket
  let sum = priceInCents;

  // Add the price of extras
  for (let extra of ticketInfo.extras) {
    if (!ticketData.extras[extra]) {
      return `Extra type '${extra}' cannot be found.`;
    }
    sum += ticketData.extras[extra].priceInCents[ticketInfo.entrantType];
  }

  return sum;
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
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */

/**This is my helper funciton which checks if the purchase has valid Ticket type, Entrant type and extras. 
** I used some and every native array functions to check if any value is in the purchase other than the valid extras which is eithe "education", "movie"
** and "terrace" 
** @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
** @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
** @returns {string} - a string explaining what is wrong.
**/
function errorCheckforPurchase(ticketData, purchases){
  const extrlist = ['movie', 'terrace', 'education'];
  for (let idx=0; idx<purchases.length; idx++){
    if (!ticketData[purchases[idx].ticketType]) {
      return `Ticket type '${purchases[idx].ticketType}' cannot be found.`;
    }
    if(purchases[idx].extras.length>0){
      if (purchases[idx].extras.every(v => extrlist.includes(v))==false) {
        return `Extra type '${purchases[idx].extras[0]}' cannot be found.`;
      }
    }
  if (!ticketData[purchases[idx].entrantType]) {
    return `Entrant type '${purchases[idx].entrantType}' cannot be found.`;
  }
}
}
function purchaseTickets(ticketData, purchases) {
  let receipt="Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n"
  let total=0;
  let str= errorCheckforPurchase(ticketData, purchases)
   if (str.match("cannot be found.") && !(str.match("adult") || str.match('senior') || str.match('child')))
   {
    return str;
   }
   
   for (let i = 0; i < purchases.length; i++) {
    let capitalizedEntrant = purchases[i].entrantType.charAt(0).toUpperCase() + purchases[i].entrantType.slice(1);
    let capitalizedTicket = purchases[i].ticketType.charAt(0).toUpperCase() + purchases[i].ticketType.slice(1);
    let priceInDol = ticketData[purchases[i].ticketType].priceInCents[purchases[i].entrantType] / 100;

    let capitalizedExtras = "";
    let str1 = [];

    if (purchases[i].extras.length > 0) {
      capitalizedExtras = purchases[i].extras
        .map((extra) => extra.charAt(0).toUpperCase() + extra.slice(1))
        .join(' Access, ');

      priceInDol += purchases[i].extras.reduce((acc, extra) => {
        return acc + ticketData.extras[extra].priceInCents[purchases[i].entrantType] / 100;
      }, 0);

      str1.push(` (${capitalizedExtras} Access)`);
    }

    receipt += capitalizedEntrant + " " + capitalizedTicket + " Admission: $" + priceInDol.toFixed(2);
    receipt += str1.join('');
    receipt += "\n";

    total += priceInDol;
  }

  receipt += "-------------------------------------------\nTOTAL: $" + total.toFixed(2);
  return receipt;
}
 

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
