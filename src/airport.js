class Airport {

  airportPlanes;
  capacity;

  constructor(capacity = 4) {
    this.airportPlanes = [];
    this.capacity = capacity;
  }

  add = plane => {
    if (this.airportPlanes.length <
      this.capacity) {
      this.airportPlanes.push(plane)
    }
    else {
      return 'Airport capacity is full'
    }
  }
  subtract = plane => {
    this.airportPlanes.splice(this.airportPlanes.indexOf(plane));
  }


  isAirportFull() {
    let full = false;
    if (this.airportPlanes.length === this.capacity) {
      full = true;
    } return full;
  }

  planeLanded(plane) {
    if (this.isAirportFull()) {
      return `The airport ${plane.planeID()} is at maximum capacity and is unable to land`;
    } else {
      this.airportPlanes.push(plane);
      return `The plane ${this.airportPlanes[0]} has landed`;
    }
  }
  planeDeparted(plane) {
    this.airportPlanes.splice(this.airportPlanes.indexOf(plane));
  
    //return `The plane ${plane.planeID()} has departed from the airport`
  }
};

module.exports = Airport
