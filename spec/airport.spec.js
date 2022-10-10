const { assertEquals } = require('./testing-framework');
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let airport;
let plane;
let sizeIncrease;


// Test 1 - has the plane landed in the airport?
console.log(`============================`);

console.log(`Test 1 - add plane to the airport`);

//Arrange
airport = new Airport();
plane = { id: `plane` };
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

// Test 2 - Can I override capacity in the airport?
console.log(`============================`);

console.log(`Test 2 - Increase airport capacity`);

//Arrange
airport = new Airport(4);
expected = 4;
//Act

actual = airport.capacity;
//Assert
result =  (actual,expected);
console.log(`Test 2:Increase airport capacity: ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 -  prevent landing when airport is full?
console.log(`============================`);

console.log(`Test 3 - airport is full you can't land`);

//Arrange
airport = new Airport();
item = {id: `plane`}
expected = 'The Airport is at maximum capacity';
//Act
airport.add(plane);
airport.add(plane);
airport.add(plane);
airport.add(plane);
actual = airport.add(plane);
//Assert
result =  (actual,expected);
console.log(`airport is full you can't land: ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;