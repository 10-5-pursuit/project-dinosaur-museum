const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const exampleTicketData = require("./data/tickets");
/// Program your functions below //
function calculateTicketPrice(ticketData, ticketInfo) {
    if(!ticketData.hasOwnProperty(ticketInfo.ticketType)){
        return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
    }
    if(!ticketData.general.priceInCents.hasOwnProperty(ticketInfo.entrantType)){
        return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
    }
    if(!ticketData.membership.priceInCents.hasOwnProperty(ticketInfo.entrantType)){
        return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
    }
    if(!ticketData.extras.hasOwnProperty(ticketInfo.extras)){
        return `Extra type '${ticketInfo.extras}' cannot be found.`
    }
    

    let total = 0;
    let entrant = ticketInfo.entrantType
    if(ticketInfo.ticketType === "general"){
        if(ticketData.general.priceInCents[entrant]){
            total += ticketData.general.priceInCents[entrant]
        }
    }else {
        if(ticketData.membership.priceInCents[entrant]){
            total += ticketData.membership.priceInCents[entrant]
        }
    }
    if(ticketInfo.extras.length == 0){
        return total
    }else{
        for(const x of ticketInfo.extras){
            if(ticketData.extras.hasOwnProperty(x)){
                total += ticketData.extras[x].priceInCents[entrant]
            }
        }
    }
    return total
}

const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
};
console.log(calculateTicketPrice(exampleTicketData, ticketInfo))