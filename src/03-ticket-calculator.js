/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/

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
    const tickets = require("../data/tickets");
const exampleTicketData = require("../data/tickets");

    function calculateTicketPrice(ticketData, ticketInfo) {

      // Created a variable for the total.
    let ticketTotal = 0;

    // Created a variable to classify which entry type is on given Ticket. 
    let ticketEntrants = ticketInfo.entrantType;

    // Crossreferencing to check if the ticket Type on the Physical Ticket matches with the Ticket Data in the system. 
    let ticketStatus = ticketData[ticketInfo.ticketType]

    // These are the  ticket Extras on the Physical ticket. 
    let theExtrasOnTicket = ticketInfo.extras

    // This if statement is checking to see if the ticket type does not equal general and membership because we are assimilating any other other outcome between the two admission types that we only have and if it is true, run the error message specified in temperal literal specifying the given ticket type on the Ticket. 
      if(ticketInfo.ticketType !== 'general' && ticketInfo.ticketType !== 'membership') {
        return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
      }

      // This if statement checks if any of the ticket entrants does not match child, adult, or senior on the entrant Type on the customer ticket and assimilates any other outcome and if it is true, run the error message specified in the temperal literal specifying the given ticket type on the Ticket. 
      if(ticketInfo.entrantType !== 'child' && ticketInfo.entrantType !== 'adult' && ticketInfo.entrantType !== 'senior') {
        return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
      }
      // updates the Sum of ticketTotal to the match the standard price of the tickets entry type. aka (child, senior, adult).
      ticketTotal += ticketStatus.priceInCents[ticketEntrants]

      // Within the for Loop we are checking to see if our Ticket Data has any property of the extra ticket iteration(s) and if it does not match with our Data it runs an error message indicated below. Our second execution will add to sum of the all extraTicket iteration that is found and crossreferenced with our data found with the prices associated with that iteration/extraTicket. 
      for(let i = 0; i < theExtrasOnTicket.length; i++) {
        if(!ticketData.extras.hasOwnProperty(theExtrasOnTicket[i])) {
          return `Extra type '${theExtrasOnTicket[i]}' cannot be found.`
        } else {
          ticketTotal += ticketData.extras[theExtrasOnTicket[i]].priceInCents[ticketEntrants]
        }
      }
      // this one is self explanatory. >:)
    return ticketTotal; 
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
`
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
function purchaseTickets(ticketData, purchases) {
let listOfGuest = ''
let total = 0
// if(purchases.length <= 1) {
//   purchases.forEach(ticket => {
//     if (!ticketData[ticket.ticketType]) {
//         ticketResults = calculateTicketPrice(ticketData, ticket);

//     } else if (!ticketData[ticket.entrantType]) {
//         ticketResults = calculateTicketPrice(ticketData, ticket);

//     } else if (!ticketData[ticket.extras[0]]) {
//          return ticketResults = calculateTicketPrice(ticketData, ticket);

//     }
// });
// }
purchases.forEach(guestTicket => {

  let description = ticketData[guestTicket.ticketType].description

  let entrancesDescription = guestTicket.entrantType.charAt(0).toUpperCase() + guestTicket.entrantType.substring(1).toLowerCase()

  let ticketPrice = ticketData[guestTicket.ticketType].priceInCents[guestTicket.entrantType]

  listOfGuest += `${entrancesDescription} ${description}: $${ticketPrice/100}.00\n`

})

purchases.forEach(ticketPriceTotal => {
  total += calculateTicketPrice(ticketData,ticketPriceTotal)

})


return `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${listOfGuest}\n-------------------------------------------\nTOTAL: $${total/100}.00`;
}


// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
