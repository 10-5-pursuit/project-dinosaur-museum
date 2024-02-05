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
  let returnTotalSum = 0; // the main return variable of this function
  const { ticketType, entrantType, extras } = ticketInfo;  // deconstructing ticketInfo

  // TICKETDATA:

  //GENERAL:
  // General Entrant Prices
  const generalChildPrice = ticketData.general.priceInCents.child;
  const generalAdultPrice = ticketData.general.priceInCents.adult;
  const generalSeniorPrice = ticketData.general.priceInCents.senior;

  // MEMBERSHIP:
  // Membership Entrant Prices
  const membershipChildPrice = ticketData.membership.priceInCents.child;
  const membershipAdultPrice = ticketData.membership.priceInCents.adult;
  const membershipSeniorPrice = ticketData.membership.priceInCents.senior;

  // EXTRA:
  // Movie Entrant Prices
  const extraMovieChildPrice = ticketData.extras.movie.priceInCents.child;
  const extraMovieAdultPrice = ticketData.extras.movie.priceInCents.adult;
  const extraMovieSeniorPrice = ticketData.extras.movie.priceInCents.senior;

  // Education Entrant Prices
  const extraEducationChildPrice = ticketData.extras.education.priceInCents.child;
  const extraEducationAdultPrice = ticketData.extras.education.priceInCents.adult;
  const extraEducationSeniorPrice = ticketData.extras.education.priceInCents.senior;

  // Terrace Entrants Prices
  const extraTerraceChildPrice = ticketData.extras.terrace.priceInCents.child;
  const extraTerraceAdultPrice = ticketData.extras.terrace.priceInCents.adult;
  const extraTerraceSeniorPrice = ticketData.extras.terrace.priceInCents.senior;


  if (ticketData && typeof ticketData === 'object' && ticketInfo && typeof ticketInfo === 'object') {

    if (ticketType !== 'general' && ticketType !== 'membership') {
      return `Ticket type 'incorrect-type' cannot be found.`;
    }

    if (entrantType != 'child' && entrantType != 'adult' && entrantType != 'senior') {
      return `Entrant type 'incorrect-entrant' cannot be found.`;
    }

    if (extras.length > 0) {
      if (!extras.includes('movie')) {
        if (!extras.includes('education')) {
          if (!extras.includes('terrace')) {
            return `Extra type 'incorrect-extra' cannot be found.`;
          }
        }
      }
    }

    if (ticketType === 'general') {   /*====== GENERAL: =======*/

      if (entrantType === 'child') { /* GENERAL CHILD ADMISSION */
      
        if (extras.length === 0) {  
          returnTotalSum = generalChildPrice;

        } else if (extras.length > 0) {      /* GENERAL ADMISSION + EXTRAS */
          returnTotalSum = generalChildPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieChildPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationChildPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceChildPrice;
          }
        }

      } else if (entrantType === 'adult') {  /* GENERAL ADULT ADMISSION */

        if (extras.length === 0) {
          returnTotalSum = generalAdultPrice;

        } else if (extras.length > 0) {       /* GENERAL ADMISSION + EXTRAS */
          returnTotalSum = generalAdultPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieAdultPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationAdultPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceAdultPrice;
          }
        }
        
      } else if (entrantType === 'senior') { /* GENERAL SENIOR ADMISSION */

        if (extras.length === 0) {
          returnTotalSum = generalSeniorPrice;

        } else if (extras.length > 0) {       /*  GENERAL ADMISSION + EXTRAS  */
          returnTotalSum = generalSeniorPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieSeniorPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationSeniorPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceSeniorPrice;
          }
        }
      }
  
    } else if (ticketType === 'membership') {  /*======= MEMBERSHIP ======*/

      if (entrantType === 'child') {  /* CHILD MEMBER ADMISSION */

        if (extras.length === 0) {
          returnTotalSum = membershipChildPrice;

        } else if (extras.length > 0) {    /* MEMBERSHIP ADMISSION + EXTRAS */
          returnTotalSum = membershipChildPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieChildPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationChildPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceChildPrice;
          }
        }

      } else if (entrantType === 'adult') { /*  ADULT MEMBERSHIP ADMISSION  */

        if (extras.length === 0) {
          returnTotalSum = membershipAdultPrice;

        } else if (extras.length > 0) {           /*  MEMBERSHIP ADMISSION + EXTRAS  */
          returnTotalSum = membershipAdultPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieAdultPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationAdultPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceAdultPrice;
          }
        }

      } else if (entrantType === 'senior') { /*  SENIOR MEMBER ADMISSION  */
        if (extras.length === 0) {
          returnTotalSum = membershipSeniorPrice;

        } else if (extras.length > 0) {             /*  MEMBERSHIP ADMISSION + EXTRAS  */
          returnTotalSum = membershipSeniorPrice;

          if (extras.includes('movie')) {
            returnTotalSum += extraMovieSeniorPrice;
          }

          if (extras.includes('education')) {
            returnTotalSum += extraEducationSeniorPrice;
          }

          if (extras.includes('terrace')) {
            returnTotalSum += extraTerraceSeniorPrice;
          }
        }
      }
    }
  } else {
    return null;  // RETURN NULL IF BOTH ARGUMENTS ARE EMPTY, OR BOTH ARGUMENTS ARE NOT OBJECTS.
  }

  return returnTotalSum;
}

// const ticketInfo = {
//   ticketType: "membership",
//   entrantType: "child",
//   extras: ["movie"],
// };
// console.log(calculateTicketPrice(exampleTicketData, ticketInfo));


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

  let ticketCollections = [];

  function ticketSummaries(ticketsArr) {
    let returnArr = [];

    for (const ticket of ticketsArr) {
      returnArr.push(`${ticket.entrantType} ${ticket.admissionType}: $${(ticket.totalTicketSum / 100).toFixed(2)} (${ticket.extraPurchases.join(', ')})\n`);
    }
    return returnArr.join('');
  }

  function totalTicketsSumInDollars(ticketsArr) {
    let totalSum = 0;
    for (const tickets of ticketsArr) {
      totalSum += tickets.totalTicketSum;
    }
    return (totalSum / 100).toFixed(2);
  }

  const generalAdmissionDescript = ticketData.general.description;

  const generalChildPrice = ticketData.general.priceInCents.child;
  const generalAdultPrice = ticketData.general.priceInCents.adult;
  const generalSeniorPrice = ticketData.general.priceInCents.senior;
  
  const membershipAdmissionDescript = ticketData.membership.description;

  const membershipChildPrice = ticketData.membership.priceInCents.child;
  const membershipAdultPrice = ticketData.membership.priceInCents.adult;
  const membershipSeniorPrice = ticketData.membership.priceInCents.senior;

  const extraMovieDescription = ticketData.extras.movie.description;
  const extraMovieChildPrice = ticketData.extras.movie.priceInCents.child;
  const extraMovieAdultPrice = ticketData.extras.movie.priceInCents.adult;
  const extraMovieSeniorPrice = ticketData.extras.movie.priceInCents.senior;

  const extraEducationDescription = ticketData.extras.education.description;
  const extraEducationChildPrice = ticketData.extras.education.priceInCents.child;
  const extraEducationAdultPrice = ticketData.extras.education.priceInCents.adult;
  const extraEducationSeniorPrice = ticketData.extras.education.priceInCents.senior;

  const extraTerraceDescription = ticketData.extras.terrace.description;
  const extraTerraceChildPrice = ticketData.extras.terrace.priceInCents.child;
  const extraTerraceAdultPrice = ticketData.extras.terrace.priceInCents.adult;
  const extraTerraceSeniorPrice = ticketData.extras.terrace.priceInCents.senior;

  
  if (ticketData && typeof ticketData === 'object' && purchases && typeof purchases === 'object') {
    
    for (const purchaseObj of purchases) {
      
      let totalTicketSum = 0;
      let admissionType = '';
      let entrantType = '';
      let extraPurchases = [];
      let ticketOutline = {};

      if (purchaseObj.ticketType !== 'general' && purchaseObj.ticketType !== 'membership') {
        return `Ticket type 'incorrect-type' cannot be found.`;
      }
  
      if (purchaseObj.entrantType != 'child' && purchaseObj.entrantType != 'adult' && purchaseObj.entrantType != 'senior') {
        return `Entrant type 'incorrect-entrant' cannot be found.`;
      }
  
      if (purchaseObj.extras.length > 0) {
        if (!purchaseObj.extras.includes('movie')) {
          if (!purchaseObj.extras.includes('education')) {
            if (!purchaseObj.extras.includes('terrace')) {
              return `Extra type 'incorrect-extra' cannot be found.`;
            }
          }
        }
      }

      if (purchaseObj.ticketType === 'general') {   /*====== GENERAL: =======*/

        if (purchaseObj.entrantType === 'child') { /* GENERAL CHILD ADMISSION */

          admissionType = generalAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;

          entrantType = 'Child';
          ticketOutline['entrantType'] = entrantType;

        
          if (purchaseObj.extras.length === 0) {  
            totalTicketSum = generalChildPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {      /* GENERAL ADMISSION + EXTRAS */
            totalTicketSum = generalChildPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieChildPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationChildPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceChildPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }

        } else if (purchaseObj.entrantType === 'adult') {  /* GENERAL ADULT ADMISSION */

          admissionType = generalAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;

          entrantType = 'Adult';
          ticketOutline['entrantType'] = entrantType;

          if (purchaseObj.extras.length === 0) {
            totalTicketSum = generalAdultPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {       /* GENERAL ADMISSION + EXTRAS */
            totalTicketSum = generalAdultPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieAdultPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationAdultPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceAdultPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }
          
        } else if (purchaseObj.entrantType === 'senior') { /* GENERAL SENIOR ADMISSION */

          admissionType = generalAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;

          entrantType = 'Senior';
          ticketOutline['entrantType'] = entrantType;

          if (purchaseObj.extras.length === 0) {
            totalTicketSum = generalSeniorPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {       /*  GENERAL ADMISSION + EXTRAS  */
            totalTicketSum = generalSeniorPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieSeniorPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationSeniorPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceSeniorPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }
        }
  
      } else if (purchaseObj.ticketType === 'membership') {  /*======= MEMBERSHIP ======*/

        if (purchaseObj.entrantType === 'child') {  /* CHILD MEMBER ADMISSION */

          admissionType = membershipAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;
          
          entrantType = 'Child';
          ticketOutline['entrantType'] = entrantType;

          if (purchaseObj.extras.length === 0) {
            totalTicketSum = membershipChildPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {    /* MEMBERSHIP ADMISSION + EXTRAS */
            totalTicketSum = membershipChildPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieChildPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationChildPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceChildPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }

        } else if (purchaseObj.entrantType === 'adult') { /*  ADULT MEMBERSHIP ADMISSION  */

          admissionType = membershipAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;

          entrantType = 'Adult';
          ticketOutline['entrantType'] = entrantType;

          if (purchaseObj.extras.length === 0) {
            totalTicketSum = membershipAdultPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {           /*  MEMBERSHIP ADMISSION + EXTRAS  */
            totalTicketSum = membershipAdultPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieAdultPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationAdultPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceAdultPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }

        } else if (purchaseObj.entrantType === 'senior') { /*  SENIOR MEMBER ADMISSION  */

          admissionType = membershipAdmissionDescript;
          ticketOutline['admissionType'] = admissionType;

          entrantType = 'Senior';
          ticketOutline['entrantType'] = entrantType;

          if (purchaseObj.extras.length === 0) {
            totalTicketSum = membershipSeniorPrice;
            ticketOutline['totalTicketSum'] = totalTicketSum;

          } else if (purchaseObj.extras.length > 0) {             /*  MEMBERSHIP ADMISSION + EXTRAS  */
            totalTicketSum = membershipSeniorPrice;

            if (purchaseObj.extras.includes('movie')) {
              extraPurchases.push(extraMovieDescription);
              totalTicketSum += extraMovieSeniorPrice;
            }

            if (purchaseObj.extras.includes('education')) {
              extraPurchases.push(extraEducationDescription);
              totalTicketSum += extraEducationSeniorPrice;
            }

            if (purchaseObj.extras.includes('terrace')) {
              extraPurchases.push(extraTerraceDescription);
              totalTicketSum += extraTerraceSeniorPrice;
            }

            ticketOutline['extraPurchases'] = extraPurchases;
            ticketOutline['totalTicketSum'] = totalTicketSum;
          }
        }
      }

      ticketCollections.push(ticketOutline);
    }

  } else {
    return null;
  }

  return `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${ticketSummaries(ticketCollections)}-------------------------------------------\nTOTAL: $${totalTicketsSumInDollars(ticketCollections)}`;
}


// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
