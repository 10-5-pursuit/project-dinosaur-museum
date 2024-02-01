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

// Finds out the Dino heights according to diet type.
function groupAndSortDinosaursByDietAndLength(dinosaurs) {
    const groupedDinosaurs = dinosaurs.reduce((accumulator, dinosaur) => {
      const key = dinosaur.diet;
      
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
  
      accumulator[key].push({
        diet: dinosaur.diet,
        lengthInMeters: dinosaur.lengthInMeters,
      });
  
      return accumulator;
    }, {});
  
    // Sort each diet group by ascending length
    for (const key in groupedDinosaurs) {
      groupedDinosaurs[key].sort((a, b) => a.lengthInMeters - b.lengthInMeters);
    }
  
    return groupedDinosaurs;
  }
  
  const groupedAndSortedDinosaurs = groupAndSortDinosaursByDietAndLength(exampleDinosaurData);
  console.log(groupedAndSortedDinosaurs);
  
  function calculateStatsForDiets(dinosaurs) {
    const dietStats = {};
  
    // Group dinosaurs by diet
    const groupedDinosaurs = dinosaurs.reduce((accumulator, dinosaur) => {
      const key = dinosaur.diet;
      
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
  
      accumulator[key].push(dinosaur.lengthInMeters);
  
      return accumulator;
    }, {});
  
    // Calculate average, median, and mode for each diet
    for (const diet in groupedDinosaurs) {
      const lengths = groupedDinosaurs[diet];
  
      // Calculate average
      const average = lengths.reduce((sum, length) => sum + length, 0) / lengths.length;
  
      // Calculate median
      const sortedLengths = lengths.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedLengths.length / 2);
      const median = sortedLengths.length % 2 !== 0 ? sortedLengths[mid] : (sortedLengths[mid - 1] + sortedLengths[mid]) / 2;
  
      // Calculate mode
      const lengthCount = {};
      let mode = null;
      let maxCount = 0;
  
      lengths.forEach((length) => {
        lengthCount[length] = (lengthCount[length] || 0) + 1;
  
        if (lengthCount[length] > maxCount) {
          mode = length;
          maxCount = lengthCount[length];
        }
      });
  
      dietStats[diet] = {
        average,
        median,
        mode,
      };
    }
  
    return dietStats;
  }
  
  const statsForDiets = calculateStatsForDiets(exampleDinosaurData);
  console.log(statsForDiets);
  

  function getDinoStats(dinosaurs) {
    if (!dinosaurs || dinosaurs.length === 0) {
      return null;
    }
  
    // Calculate the average length
    const totalLength = dinosaurs.reduce((sum, dino) => sum + dino.lengthInMeters, 0);
    const averageLength = totalLength / dinosaurs.length;
  
    // Find the smallest, average, and biggest dinosaurs
    let smallestDino = dinosaurs[0];
    let averageDino = dinosaurs[0];
    let biggestDino = dinosaurs[0];
  
    dinosaurs.forEach((dino) => {
      if (dino.lengthInMeters < smallestDino.lengthInMeters) {
        smallestDino = dino;
      }
  
      if (Math.abs(dino.lengthInMeters - averageLength) < Math.abs(averageDino.lengthInMeters - averageLength)) {
        averageDino = dino;
      }
  
      if (dino.lengthInMeters > biggestDino.lengthInMeters) {
        biggestDino = dino;
      }
    });
  
    return {
      smallest: smallestDino,
      average: averageDino,
      biggest: biggestDino,
    };
  }
  
  const dinoStats = getDinoStats(exampleDinosaurData);
  console.log(dinoStats);
 
  const plotly = require('plotly')('renadatpursuit', 'MXtcX2gHDvvHi47olUb3');
const dinosaurs = require('./data/dinosaurs');

// Extracting relevant data for the analysis
const data = dinosaurs.map(dino => ({
  diet: dino.diet,
  length: dino.lengthInMeters,
}));

// Creating arrays for each diet category
const carnivorousData = data.filter(d => d.diet === 'carnivorous');
const herbivorousData = data.filter(d => d.diet === 'herbivorous');
const omnivorousData = data.filter(d => d.diet === 'omnivorous');

// Create scatter plots
const carnivorousTrace = {
  x: carnivorousData.map(d => d.length),
  y: carnivorousData.map(() => Math.random()), // Using random values for y to avoid overlap
  mode: 'markers',
  type: 'scatter',
  name: 'Carnivorous',
};

const herbivorousTrace = {
  x: herbivorousData.map(d => d.length),
  y: herbivorousData.map(() => Math.random()),
  mode: 'markers',
  type: 'scatter',
  name: 'Herbivorous',
};

const omnivorousTrace = {
  x: omnivorousData.map(d => d.length),
  y: omnivorousData.map(() => Math.random()),
  mode: 'markers',
  type: 'scatter',
  name: 'Omnivorous',
};

// Define layout
const layout = {
  title: 'Dinosaur Diet vs. Length',
  xaxis: { title: 'Length (meters)' },
  yaxis: { title: 'Random Value' }, // You can customize or remove this axis
};

// Create regression lines
const carnivorousRegression = createRegressionLine(carnivorousData);
const herbivorousRegression = createRegressionLine(herbivorousData);
const omnivorousRegression = createRegressionLine(omnivorousData);

// Add regression lines to the traces
carnivorousTrace.line = {
  x: carnivorousRegression.x,
  y: carnivorousRegression.y,
  mode: 'lines',
  type: 'scatter',
  name: 'Carnivorous Regression',
};

herbivorousTrace.line = {
  x: herbivorousRegression.x,
  y: herbivorousRegression.y,
  mode: 'lines',
  type: 'scatter',
  name: 'Herbivorous Regression',
};

omnivorousTrace.line = {
  x: omnivorousRegression.x,
  y: omnivorousRegression.y,
  mode: 'lines',
  type: 'scatter',
  name: 'Omnivorous Regression',
};

// Plot the data
const plotData = [carnivorousTrace, herbivorousTrace, omnivorousTrace];
const plotOptions = { layout };

plotly.plot(plotData, plotOptions, function (err, msg) {
  if (err) return console.error(err);
  console.log(msg);
});

// Function to create a regression line
function createRegressionLine(data) {
  const x = data.map(d => d.length);
  const y = data.map(() => Math.random()); // Using random values for y to avoid overlap
  // You can use a proper regression algorithm here
  // For simplicity, I'm using random values as y for demonstration
  return { x, y };
}

// On to room 2. 

