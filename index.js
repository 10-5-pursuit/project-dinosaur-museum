const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const exampleTicketData = require("./data/tickets");

/// Program your functions below //

const capitalizeFirstLtr = str => str[0].toUpperCase() + str.substring(1);
const toDollars = priceInCents => `$${(priceInCents/100)}.00`;

function purchaseTickets(ticketData, purchases) {
  let receipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  let receiptTotal = 0;

  const purchasesIterator = purchases[Symbol.iterator]();
  purchasesIterator.next();

  for (const purchase of purchases) {
    const { ticketType, entrantType, extras } = purchase;

    if (!(ticketType in ticketData))
      return `Ticket type '${ticketType}' cannot be found.`;
    else if (!(entrantType in ticketData[ticketType].priceInCents)) 
      return `Entrant type '${entrantType}' cannot be found.`;

    else {
      let price = ticketData[ticketType].priceInCents[entrantType];
      let extrasList = "";

      const extrasIterator = extras[Symbol.iterator]();
      extrasIterator.next();

      for (const extra of extras){
        if (!(extra in ticketData.extras))
          return `Extra type '${extra}' cannot be found.`;

        price += ticketData.extras[extra].priceInCents[entrantType];
        extrasList += `${capitalizeFirstLtr(extra)} Access`;

        if (!extrasIterator.next().done)
          extrasList += ", ";
      }
      receiptTotal += price;
      receipt += `${capitalizeFirstLtr(entrantType)} ${capitalizeFirstLtr(ticketType)} Admission: ${toDollars(price)}`;
      if (extrasList != "")
        receipt += ` (${extrasList})`;

      if (!purchasesIterator.next().done) receipt += "\n";
    }
  }
  receipt += `\n-------------------------------------------\nTOTAL: ${toDollars(receiptTotal)}`;
  return receipt;
}

const purchases = [
  {
    ticketType: "discount", // Incorrect
    entrantType: "adult",
    extras: ["movie", "terrace"],
  }
];

console.log(purchaseTickets(exampleTicketData, purchases));
console.log(`\n\n\n\n`);
//console.log("Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00");