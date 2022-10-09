class Airport {

  airportPlanes = [];
  capacity = 4;
  add = plane => { 
    this.airportPlanes.push(plane)
  };
  increaseCapacity = (increment) => {
    this.capacity += increment;
  };
}

module.exports = Airport;
