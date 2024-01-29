const metersToFeet = meter => meter * 3.28084;
const displayMessage = (dino, id) => {
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
    return room.name
}
module.exports = {
    metersToFeet,
    displayMessage,
    isDinosaurAlive,
    displayRoom
}