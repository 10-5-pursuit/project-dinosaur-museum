/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const { validate } = require("@babel/types");
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
  //Validate ticket type
  let error = validateTicketType(ticketData, ticketInfo.ticketType);
  if (error) return error;

  // Validate entrant type
  error = validateEntrantType(ticketData, ticketInfo.ticketType, ticketInfo.entrantType);
  if (error) return error; // return error IF entrant type validation fails.

  // Calulate price only after passing validations.
  let price = ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]; // Calculate base price

  // Assume calculateExtrasPrice is implemented correctly
  let extrasResult = calculateExtrasPrice(ticketData, ticketInfo.extras, ticketInfo.entrantType);
  if (extrasResult.error) return extrasResult.error;
  price += extrasResult.price;

  return price;
}

// 1st helper function to validate if the provided entrantType is valid for a ticketType
function validateTicketType(ticketData, ticketType) {
  if (!ticketData[ticketType]) {
    return "Ticket type 'incorrect-type' cannot be found.";
  }
  return null;
}

// 2nd helper function to validate entrantType and if its valid for 
function validateEntrantType(ticketData, ticketType, entrantType) {
  if (!ticketData[ticketType] || !ticketData[ticketType].priceInCents[entrantType]) {
    return "Entrant type 'incorrect-entrant' cannot be found."
  }
  return null;
}

// 3rd helper function to calulcate 'extrasPrice'
function calculateExtrasPrice(ticketData, extras, entrantType) {
  let extrasPrice = 0;
  for (let extra of extras) {
    if (!ticketData.extras[extra]) {
      return { error: `Extra type '${extra}' cannot be found.` };
    }
    extrasPrice += ticketData.extras[extra].priceInCents[entrantType];
  }
  return { price: extrasPrice };
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
function purchaseTickets(ticketData, purchases) {
  let total = 0;
  let receipt = "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n";

  for (let purchase of purchases) {
    let { ticketType, entrantType, extras } = purchase;

    // validate ticketType
    if (!ticketData[ticketType]) {
      return `Ticket type '${ticketType}' cannot be found.'`;
    }

    // validate entrantType
    if (!ticketData[ticketType].priceInCents[entrantType]) {
      return `Entrant type '${entrantType}' cannot be found.'`;
    }

    // calculate ticket price
    let ticketPrice = ticketData[ticketType].priceInCents[entrantType] / 100;
    total += ticketPrice;

    // Start building ticket description
    let ticketDescription = `${capitalize(entrantType)} ${capitalize(ticketType)} Admission: $${ticketPrice.toFixed(2)}`;


    // validate & calculate extras
    if (extras.length > 0) {
      let extrasDescription = [];
      let extrasTotal = 0;
      for (let extra of extras) {
        if (!ticketData.extras[extras]) {
          return `Extras type '${extra}' cannot be found.`;
        }
        let extrasPrice = ticketData.extras[extra].priceInCents[entrantType] / 100;
        extrasTotal += extrasPrice;
        extrasDescription.push(ticketData.extras[extra].description);
      }
      total += extrasTotal;
      ticketDescription += ` (${extrasDescription.join(", ")} Access)`;
    }
    // Add the ticket description to the receipt
    receipt += ticketDescription + "\n";
  }

  // Add total to the receipt
  receipt += "-------------------------------------------\n";
  receipt += `TOTAL: $${total.toFixed(2)}`;

  return receipt;
}

// Helper function to capitalize the 1st letter of a word.
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
