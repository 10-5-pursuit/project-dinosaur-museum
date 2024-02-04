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
const moneyConverter = (strNum) => {
  if(strNum.length > 4){
    // If the strNum length is greater than 4 (10000) we want to add a money symbol, slice from index 0 up until index 3, add a dot, then slice the rest of the strNum
    return `$${strNum.slice(0, 3)}.${strNum.slice(3)}`
  }else if(strNum.length > 5){
    // else If the strNum length is greater than 5 (100000) we want to add a money symbol, slice from index 0 up until index 4, add a dot, then slice the rest of the strNum
    return `$${strNum.slice(0, 4)}.${strNum.slice(4)}`
  }
  // if none of the conditions are true, the strNum length is 4 (1000) so we want to add a money symbol, slice from index 0 up until index 2, add a dot, then slice the rest of the strNum
  return `$${strNum.slice(0, 2)}.${strNum.slice(2)}`
}

// ? Helper function to calculate discount
function apply10Discount(price) {
  // This function takes in the price and applies a 10% discount to the price
  return price - (price / 10);
}    
function purchaseTickets(ticketData, purchases) {
  // Creating variables for the receipt and receiptDescription to assign values to  the variables
  let receipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  let receiptDescription = "";
  let total = 0;
  
  // ! Sinlge Purchase Ticket 
  // if(purchases.length === 1){
  //   // Checking if the ticketdata has a key of the purchases ticket type
  //   if(!ticketData.hasOwnProperty(purchases[0].ticketType)) {
  //     // If it doesnt not exist within the ticketdata object return the given error message
  //     return `Ticket type '${purchases[0].ticketType}' cannot be found.`
  //   }
  //   // Checking if the ticketdata tickettype princeInCenst has a key of the purchases entrant type
  //   if(!ticketData[purchases[0].ticketType].priceInCents.hasOwnProperty(purchases[0].entrantType)){
  //     // If it doesnt not exist within the ticketdata object return the given error message
  //     return `Entrant type 'incorrect-entrant' cannot be found.`
  //   }
  //   // Creating variable and assinging them values of the purchases 
  //   let price = ticketData[purchases[0].ticketType].priceInCents[purchases[0].entrantType]
  //   let description = `${ticketData[purchases[0].ticketType].description}`;
  //   let entrant = purchases[0].entrantType.slice(0,1).toUpperCase() + purchases[0].entrantType.slice(1).toLowerCase()
  //   let extrasArr = purchases[0].extras;
  //   // Checking if the extrasArray is Empty.
  //   if(extrasArr.length === 0) {
  //     // If The extrasArray is empty we just add the description to the receiptDescription and add the price to the total 
  //     receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}`
  //     total += price;
  //     // Apply a 10% discount if discount = true
  //     if(purchases[0].discount === true){
  //       price = apply10Discount(price)
  //     }
  //   // Else The extras array has elements in it so we need to process the extras array and get the descriptions and add the extras price to the total
  //   }else {
  //     // Checking if the extras object has the key of the given purchases extras
  //     if(!ticketData.extras.hasOwnProperty(purchases[0].extras[0])){
  //       // If it doesnt exist return the given error message
  //       return `Extra type 'incorrect-extra' cannot be found.`
  //     }
  //     // Use reduce to create a string sentence of the extras descriptions
  //     let extraStr = extrasArr.reduce((str, item, _, arr) => {
  //       // If the current element is equal to the last item in the extras array
  //       if(item === arr[arr.length - 1]){
  //         // We add on to the string without a space at the end and add to the price of the current ticket 
  //         str += `${ticketData.extras[item].description}`
  //         price += ticketData.extras[item].priceInCents[purchases[0].entrantType]
  //         return str
  //       }else {
  //         // Else if it is not the last item in the extras array we add to the string with a space and comma, then add to the price of the current ticket
  //         str += `${ticketData.extras[item].description}, `
  //         price += ticketData.extras[item].priceInCents[purchases[0].entrantType]
  //         return str
  //       }
  //     },"")
  //     // * Apply a discount of 10% if discount is true
  //     if(purchases[0].discount === true){
  //       price = apply10Discount(price)
  //     }
  //     // After the condition statements we add the price to the total and add to the receiptDescription the description of the current purchase
  //     total += price;
  //     receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
  //   }
  //   // return the receipt with the description and the total
  //   return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`
  // }
  
  // Else if it is not a single purchase it has multiple purchases so we have to loop. We then do the same ticketType and entryType check. 
  for(let i = 0; i < purchases.length; i++) {
    if(!ticketData.hasOwnProperty(purchases[i].ticketType)) {
      return `Ticket type '${purchases[i].ticketType}' cannot be found.`
    }
    if(!ticketData[purchases[i].ticketType].priceInCents.hasOwnProperty(purchases[i].entrantType)){
      return `Entrant type '${purchases[i].ticketType}' cannot be found.`
    }
    // Creating variable and assinging them values from the purchases
    let price = ticketData[purchases[i].ticketType].priceInCents[purchases[i].entrantType]
    let entrant = purchases[i].entrantType.slice(0,1).toUpperCase() + purchases[i].entrantType.slice(1).toLowerCase()
    let description = `${ticketData[purchases[i].ticketType].description}`;
    let extrasArr = purchases[i].extras
    let extrasStrOfArrays = []
    //  Checking if extrasArray is empty or not. If empty process the description and add to the total
    if(extrasArr.length === 0) {
      // Checking if the current index is on the last element in the extrasArr.
      if(i === purchases.length - 1){
        //  If it is the last element in the extrasArr we add to the receiptDescription withput a new line. And add to the total 
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}`
        total += price;
        break;
      }
      // If The extrasArray is empty we just add the description to the receiptDescription and add the price to the total 
      receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))}\n`
      total += price;
    // else If the extrasArray is not empty Calculate the elements in the array, Along with the description.
    }else{
      // Looping to through the extrasarr
      for(let j = 0; j < extrasArr.length; j++){
        // If the purchases extras key does not exist with in the extrasArray
        if(!ticketData.extras.hasOwnProperty(...purchases[i].extras)){
          // If it doesnt exist return the given error message
          return `Extra type 'incorrect-extra' cannot be found.`
        }
        // Check if the current element in the extrasArr is on the last element or if the extras arr only has one element we want to push the description without a space. If false push the description with a space. and then add the price 
        j === extrasArr.length - 1 || extrasArr.length === 1 ? extrasStrOfArrays.push(`${ticketData.extras[extrasArr[j]].description}`) : extrasStrOfArrays.push(`${ticketData.extras[extrasArr[j]].description}, `)
        price += ticketData.extras[extrasArr[j]].priceInCents[purchases[i].entrantType]
      }
      // * If discount is true apply a 10% discount.
      if(purchases[i].discount === true){
        price = apply10Discount(price)
      }
      // Add the price to the total
      total += price
      // Now we want to reduce the created array with string sentences to an a string with the description.
      let extraStr = extrasStrOfArrays.reduce((str, item) => {
        str += `${item}`
        return str   
      },"")
      // If the current index is on the last index we want to add on to the receiptDescription without a new line and break out the code
      if(i === purchases.length - 1){
        receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})`
        break;
      }
      // else we add to the receiptDescription with a new line
      receiptDescription += `${entrant} ${description}: ${moneyConverter(String(price))} (${extraStr})\n`
    }
  }
  // Return Finihsed receipt 
  return `${receipt}${receiptDescription}\n-------------------------------------------\nTOTAL: ${moneyConverter(String(total))}`// Total converted
}
const purchases = [
  {
    ticketType: "general",
    entrantType: "adult",
    extras: ["movie", "terrace"],
    discount: true
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

console.log(purchaseTickets(exampleTicketData, purchases))