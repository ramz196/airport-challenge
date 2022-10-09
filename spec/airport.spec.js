const { assertEquals } = require("./testing-framework");
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - has the plane landed in the airport?
console.log(`============================`);

console.log(`Test 1 - add plane to the airport`);

//Arrange
airport = new Airport();
plane = { id: 'plane' };
expected = 1;
//Act
airport.add(plane);
actual = airport.airportPlanes.length;
//Assert
result = (actual,expected);
console.log(`Test 1:add plane to the airport: ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
