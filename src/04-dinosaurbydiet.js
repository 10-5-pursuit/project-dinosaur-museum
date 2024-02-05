
const exampleDinosaurData = require("../data/dinosaurs");

// Do not change the line above.

/**
 * getDinosaursByDiet()
 * ---------------------
 * Returns an object with the dinosaurs list by diets.
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the diet and the value is the name of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaursByDiet(dinosaurs);
 *  //> {herbivorous:["Apatosaurus",...] }
 */

function getDinosaursByDiet(dinosaurs){
let carnivorous=[],herbivorous=[],omnivorous=[]
let diets={}
dinosaurs.forEach(din=>{
    if(din.diet=='carnivorous') carnivorous.push(din.name)
    if(din.diet=='herbivorous') herbivorous.push(din.name)
    if(din.diet=='omnivorous') omnivorous.push(din.name)
})
diets["carnivorous"]=carnivorous
diets["herbivorous"]=herbivorous
diets["omnivorous"]=omnivorous

return diets
}

module.exports = {
    getDinosaursByDiet
  };