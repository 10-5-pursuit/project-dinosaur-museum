
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
 // Three arrays (carnivorous, herbivorous, omnivorous) are initialized to store dinosaur names based on their diets. The diets object will be used to store these arrays.   
let carnivorous=[],herbivorous=[],omnivorous=[]
let diets={}
// The function uses forEach to iterate through each dinosaur in the dinosaurs array.
dinosaurs.forEach(din=>{
    if(din.diet=='carnivorous') carnivorous.push(din.name)
    if(din.diet=='herbivorous') herbivorous.push(din.name)
    if(din.diet=='omnivorous') omnivorous.push(din.name)
})
// Inside the loop, the function checks each dinosaur's diet and adds its name to the corresponding array (carnivorous, herbivorous, or omnivorous).

diets["carnivorous"]=carnivorous
diets["herbivorous"]=herbivorous
diets["omnivorous"]=omnivorous
// After iterating through all dinosaurs, the function creates the diets object with keys representing diet types and values as arrays containing the names of dinosaurs with those diets.
return diets;
// The function returns the final object, where dinosaurs are categorized by their diets.
}

module.exports = {
    getDinosaursByDiet
  };