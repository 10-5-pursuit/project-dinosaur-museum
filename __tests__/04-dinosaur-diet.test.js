const {
    getDinosaursByDiet
  } = require("../src/04-dinosaurbydiet");
  
  // Dinosaur data
  const dinosaurs = require("../data/dinosaurs");

test('dinosaurs by diet', () => {
    expect(getDinosaursByDiet(dinosaurs)).toEqual({
        carnivorous: [
          'Allosaurus',
          'Compsognathus',
          'Elasmosaurus',
          'Indosuchus',
          'Spinosaurus',
          'Tyrannosaurus',
          'Utahraptor'
        ],
        herbivorous: [
          'Apatosaurus',
          'Brachiosaurus',
          'Dracorex',
          'Giraffatitan',
          'Jingshanosaurus',
          'Minmi',
          'Ouranosaurus',
          'Parasaurolophus',
          'Vulcanodon',
          'Xenoceratops',
          'Zephyrosaurus'
        ],
        omnivorous: [ 'Khaan' ]
      })
})