const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");
const tickets = require("./data/tickets");
const exampleTicketData = require("./data/tickets");


/// Program your functions below ///

// Room 1 Stretch Goals:

// 1.  Learned how to install and use Plotly. Used it to make a scatter graph mapping diet to length.  Tried to do regression to find out if there was any correlation, it's not working as I think it only does a linear regression, the relationship might not be linear.

const plotly = require('plotly')('renadatpursuit', 'MXtcX2gHDvvHi47olUb3');
const regression = require('regression');
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
const carnivorousTrace = createScatterPlot(carnivorousData, 'Carnivorous', 'red');
const herbivorousTrace = createScatterPlot(herbivorousData, 'Herbivorous', 'green');
const omnivorousTrace = createScatterPlot(omnivorousData, 'Omnivorous', 'blue');

// Define layout
const layout = {
  title: 'Dinosaur Diet vs. Length',
  xaxis: { title: 'Length (meters)' },
  yaxis: { title: 'Random Value' }, // You can customize or remove this axis
};

// Plot the data
const plotData = [carnivorousTrace, herbivorousTrace, omnivorousTrace];
const plotOptions = { layout };

plotly.plot(plotData, plotOptions, function (err, msg) {
  if (err) return console.error(err);
  console.log(msg);
});

// Function to create a scatter plot
function createScatterPlot(data, name, color) {
  return {
    x: data.map(d => d.length),
    y: data.map(() => Math.random()), // Using random values for y to avoid overlap
    mode: 'markers',
    type: 'scatter',
    name,
    marker: { color },
    line: {
      x: calculateRegressionLine(data),
      y: calculateRegressionLine(data, true),
      mode: 'lines',
      type: 'scatter',
      name: `${name} Regression`,
    },
  };
}

// Function to calculate the regression line
function calculateRegressionLine(data, inverse = false) {
  const xy = data.map(d => [d.length, Math.random()]); // Replace Math.random() with actual y values
  const result = regression.linear(xy, { order: 2, precision: 15 });

  if (inverse) {
    // If inverse is true, return the inverse of the regression line
    return result.equation.map(coef => 1 / coef);
  }

  return result.equation;
}

// Helper function to capitalize Diet entries since they're all in lowercaps. To make the table look nicer.
function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Created a Dino Table using the helper function above and logged it into an actual table on vscode.  I discovered console.table while trying to understand the library/books in Objects exercise, I finally found an opportunity to use it. It is very cool.

function createDinosaurTable(data) {
  const tableData = data.map((dino) => ({
    Dinosaur: dino.name,
    Diet: capitalizeFirstChar(dino.diet),
    Length: dino.lengthInMeters,
    Period: dino.period,
  }));

  console.table(tableData);
}

// Example usage
createDinosaurTable(exampleDinosaurData);


// Room 2 Stretch Goals:
// Decided to add a Cafe and a Giftshop to the rooms in our Dino Museum because all museums have both! 
// Made helper function to generate the Unique Room Id's found in the dataset. I inserted my name in the Cafe and Giftshop RoomIds for no good reason. 

// To make Rizel's Cafe
const cafeRoom = {
    roomId: generateUniqueRoomId(), // Unique ID for cafe
    name: "Rizel's Jurassic Cafe",
    requiredTicketPermissions: [],
    dinosaurs: [], // I was tempted to add carnivores in this array. The carnivores are waiting for the humans to get yummier then eat them. [hehe]
    connectsTo: ["L72moIRcrX"], // Connects to Kit Hopkins Education Wing
};

// To make Rizel's Gift Shop
const giftShopRoom = {
    roomId: generateUniqueRoomId(), // Unique ID for gift shop
    name: "Rizel's Dino Gift Shop",
    requiredTicketPermissions: [],
    dinosaurs: [], 
    connectsTo: ["CafeRoom"], // Connects to Dino Cafe
};


const rooms = [
    cafeRoom,
    giftShopRoom,
];

// Helper function to generate a unique alphanumeric ID with "rizel" inserted

function generateUniqueRoomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = 'rizel';

    for (let i = 0; i < 5; i++) {
        roomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return roomId;
}


console.log('Unique ID for Rizel\'s Jurassic Cafe:', cafeRoom.roomId);
console.log('Unique ID for Rizel\'s Dino Gift Shop:', giftShopRoom.roomId);

// Function to check if cafe and gift shop exist
function checkCafeAndGiftShop(rooms) {
    const cafe = rooms.find(room => room.name === "Rizel's Jurassic Cafe");
    const giftShop = rooms.find(room => room.name === "Rizel's Dino Gift Shop");

    return {
        cafeExists: !!cafe,
        giftShopExists: !!giftShop,
    };
}

const cafeAndGiftShopCheck = checkCafeAndGiftShop(rooms);

console.log('Rizel\'s Cafe Exists:', cafeAndGiftShopCheck.cafeExists);
console.log('Rizel\'s Gift Shop Exists:', cafeAndGiftShopCheck.giftShopExists);

// Room 3 stretch goals:
// Checked out the Museum of Natural History and they have an extra pricing level. They have what is called a "Pay What You Want" option - so I made a function that if a 10.5Der comes, they can opt to pay what they want [because we all still need to pay back 70K to Pursuit!!!]

function calculateTicketPriceForFellow10_5() {
    return {
        fullPriceInDollars: 'Pay What You Want',
        discountsApplied: ['10.5 Fellow Discount: Unlimited'],
        netPriceToPay: "You and 2 guests can come in for free. :) - says rizel",
    };
}

const isFellow10_5 = true;
const ticketDetailsForFellow = calculateTicketPriceForFellow10_5();
console.log('Full Price in Dollars:', ticketDetailsForFellow.fullPriceInDollars);
console.log('Discounts Applied:', ticketDetailsForFellow.discountsApplied.join(', '));
console.log('Net Price to Pay:', ticketDetailsForFellow.netPriceToPay);
