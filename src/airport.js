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

  

}


module.exports = Airport
