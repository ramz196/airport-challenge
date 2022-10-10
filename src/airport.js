class Airport {

  // airportPlanes = [];
   capacity = 4;

  constructor(capacity) {
    this.airportPlanes = [];
  this.capacity = capacity;
  }


  add = plane => {
    if (this.airportPlanes.length <
      this.capacity) {
      this.airportPlanes.push(plane)
    }
    else {
      subtract = plane => {

        this.airportPlanes.splice(this.airportPlanes.indexOf(plane))
      };
    }
  }
}


module.export = Airport
