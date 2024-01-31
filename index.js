const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const tickets = require("./data/tickets");
const exampleTicketData = require("./data/tickets");


/// Program your functions below //

// Stretch Goals:
// Dino Fun Facts

// Get the Dinosaur Diets!
function getDinoNamesAndDiets(dinosaurs) {
    return dinosaurs.map(dinosaur => ({ name: dinosaur.name, diet: dinosaur.diet }));
}

const dinoNamesAndDiets = getDinoNamesAndDiets(exampleDinosaurData);
console.log('Dinosaur Names and Diets:', dinoNamesAndDiets);

// Get the unique set of Dinosaur Diets!
function getUniqueDiets(dinosaurs) {
    const allDiets = dinosaurs.map(dinosaur => dinosaur.diet);
    const uniqueDiets = [...new Set(allDiets)];
    return uniqueDiets;
}

const uniqueDiets = getUniqueDiets(exampleDinosaurData);
console.log('Unique Diets:', uniqueDiets);

// Find the Herbivores!
function getHerbivores(dinosaurs) {
    return dinosaurs
        .filter(dinosaur => dinosaur.diet === 'herbivorous')
        .map(dinosaur => dinosaur.name);
}
const herbivores = getHerbivores(exampleDinosaurData);
console.log('Plant-based!', herbivores);

// Find the Carnivores!
function getCarnivores(dinosaurs) {
    return dinosaurs
    .filter(dinosaur => dinosaur.diet === 'carnivorous')
    .map(dinosaur => dinosaur.name);
}

const carnivores = getCarnivores(exampleDinosaurData);
console.log('Meat! Meat! and More Meat!', carnivores);

// Find the Omnivores!
function getOmnivores(dinosaurs) {
    return dinosaurs
    .filter(dinosaur => dinosaur.diet === 'omnivorous')
    .map(dinosaur => dinosaur.name)
}
const omnivores = getOmnivores(exampleDinosaurData);
console.log('Eats anything and everything!', omnivores);

