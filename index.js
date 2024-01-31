const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const tickets = require("./data/tickets");
const exampleTicketData = require("./data/tickets");


/// Program your functions below //

// stretch goals

function getHerbivores(dinosaurs) {
    return dinosaurs.filter(dinosaur => dinosaur.diet === 'herbivorous');
}

const herbivores = getHerbivores(exampleDinosaurData);
console.log('Herbivores:', herbivores);


