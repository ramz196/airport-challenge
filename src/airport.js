class Airport {

 airportPlanes ;
 capacity ;

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
    
  }
  planeLanded(plane) {
    this.airportPlanes.push(plane);
    return `The plane ${this.airportPlanes[0].planeID()} has landed`;
  }

  

}


module.exports = Airport
