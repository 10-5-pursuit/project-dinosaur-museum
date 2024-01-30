function getLongestDinosaur(dinosaurs) {
    let longestDinosaurLength = 0;
    let longestDinosaurName = '';
    if (dinosaurs.length === 0) return {};
    // Loop through the dinosaurs array.
    for ( let i = 0; i < dinosaurs.length; i++) {
      if (dinosaurs[i].lengthInMeters > longestDinosaurLength) {
        longestDinosaurLength = dinosaurs[i].lengthInMeters;
        dinosaurName = dinosaurs[i].name;
      }
    }

    lengthInFeet = longestDinosaurLength * 3.281;

    const longestDinosaur = {
      longestDinosaurName: lengthInFeet
      
    }
  // Return the longest dinosaur and its height in feet.
    return longestDinosaur
  }