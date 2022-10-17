const { assertEquals } = require('./testing-framework');
const { assertTrue } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let airport;
let plane;
let sizeIncrease;
let plane1;
let plane2;
let plane3;
let plane4;



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
result = assertEquals(actual, expected);
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
result =  assertEquals(actual,expected);
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
result =  assertEquals(actual,expected);
console.log(`airport is full you can't land: ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4 -  instruct plane to take off and confirm it's not at airport?
console.log(`============================`);

console.log(`Test 4 - instruct plane to take off`);

//Arrange
airport = new Airport();
item = {id: `plane`}
expected = 0;
//Act
airport.add(plane);
airport.subtract(plane)
actual = airport.airportPlanes.length;
//Assert
result =  assertEquals(actual,expected);
console.log(`instruct plane to take off: ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5 -  will the airport return true if the airport is full?
console.log(`============================`);

console.log(`Test 5 - testing the isAirportfull function to return true at full capacity`);

//Arrange
airport = new Airport();
plane = new Plane(plane1)
plane = new Plane(plane2)
plane = new Plane(plane3)
plane = new Plane(plane4)
expected = true;
//Act
airport.planeLanded(plane1);
airport.planeLanded(plane2);
airport.planeLanded(plane3);
airport.planeLanded(plane4);
actual = airport.isAirportFull();
//Assert
result =  assertTrue(actual);
console.log(`Test 5 : testing the isAirportfull function to return true at full capacity ${result}`);
//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
plane1 = null;
plane2 = null;
plane3 = null;
plane4 = null;