const exampleDinosaurData = require('../data/dinosaurs')

const groupDinosaursByDiet = dinosaurs => {
    return dinosaurs.reduce((groupDiets, dino) => {
        groupDiets[dino.diet] = (groupDiets[dino.diet] || []).concat(dino.name);
        return groupDiets;
    },{});
}
console.log(groupDinosaursByDiet(exampleDinosaurData));

const groupDinosaursByPeriod = dinosaurs => {
    return dinosaurs.reduce((groupPeriods, dino) => {
        groupPeriods[dino.period] = (groupPeriods[dino.period] || []).concat(dino.name);
        return groupPeriods;
    },{});
}
console.log(groupDinosaursByPeriod(exampleDinosaurData));