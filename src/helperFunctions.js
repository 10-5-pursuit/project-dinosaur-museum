const metersToFeet = meter => meter * 3.28084;

const displayDinosaurInfo = (dino, id) => {
    if(dino == undefined){
        return `A dinosaur with an ID of '${id}' cannot be found.`
    }
    else{
        const {name, pronunciation, info, period, mya} = dino
        return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${mya[mya.length - 1]} million years ago.`
    }
}

const isDinosaurAlive = (dino, mya) => {
    const { mya: dinoMya } = dino;
    return (
      (mya >= dinoMya[dinoMya.length - 1] && mya <= dinoMya[0]) ||
      (dinoMya.length === 1 && dinoMya[0] - 1 === mya)
    );
}

const displayRoom = (dino, room, dinoName) => {
    if(dino == undefined){
        return `Dinosaur with name '${dinoName}' cannot be found.`;
    }
    if(room == undefined){
        return `Dinosaur with name '${dinoName}' cannot be found in any rooms.`;
    }
    return room.name;
}

const displayConnectedRooms = (roomInfo, rooms, id) => {
    if(roomInfo == undefined){
        return `Room with ID of '${id}' could not be found.`;
    }
    const roomNames = roomInfo.connectsTo.reduce((names, id) => {
        return names.concat(rooms.find(room => room.roomId == id)?.name);
      },[]);
    return roomNames.includes(undefined) ? `Room with ID of 'incorrect-id' could not be found.`: roomNames;
}

const centsToDollars = cents => cents / 100;

const calculateTicketPriceForEachCustomer = (ticketData, ticketInfo) => {
    const {ticketType, entrantType, extras} = ticketInfo;
    let totalPrice = 0;
    if(ticketType in ticketData){
      if(entrantType in ticketData[ticketType].priceInCents){
        totalPrice += ticketData[ticketType].priceInCents[entrantType];
        if(extras.length){
          for(const extra of extras){
            if(extra in ticketData.extras){
                totalPrice += ticketData.extras[extra].priceInCents[entrantType];
            }
            else{
              return "Extra type 'incorrect-extra' cannot be found.";
            }
          }
        }
      }
      else{
        return "Entrant type 'incorrect-entrant' cannot be found.";
      }
    }
    else{
      return "Ticket type 'incorrect-type' cannot be found."
    }
    totalPrice = centsToDollars(totalPrice);
    ticketInfo.priceInDollars = totalPrice;
    return ticketInfo;
}

const total = tickets => tickets.reduce((sum, ticket) => sum + ticket.priceInDollars,0);

const addZeros = num => `$${num}.00`;

const capitalizefirstLetter = str => str[0].toUpperCase() + str.slice(1);

const extrasDisplay = extras => {
    return extras.map((extra, idx) => {
        const capitalizedExtra = capitalizefirstLetter(extra);
        return idx !== extras.length - 1 ? `${capitalizedExtra} Access,` : `${capitalizedExtra} Access`;
    }).join(' ');
}

const createReceipt = receiptInfo => {
    let receipt = receiptInfo.map(customer => {
        const {entrantType, extras, priceInDollars, ticketType} = customer;
        if(extras.length){
            return `${capitalizefirstLetter(entrantType)} ${capitalizefirstLetter(ticketType)} Admission: ${addZeros(priceInDollars)} (${extrasDisplay(extras)})`;
        }
        else{
            return `${capitalizefirstLetter(entrantType)} ${capitalizefirstLetter(ticketType)} Admission: ${addZeros(priceInDollars)}`;
        }
    })
    receipt.unshift('Thank you for visiting the Dinosaur Museum!', '-------------------------------------------');
    receipt.push('-------------------------------------------', `TOTAL: ${addZeros(total(receiptInfo))}`);
    return receipt.join('\n');
}

module.exports = {
    metersToFeet,
    displayDinosaurInfo,
    isDinosaurAlive,
    displayRoom,
    displayConnectedRooms,
    calculateTicketPriceForEachCustomer,
    createReceipt
}