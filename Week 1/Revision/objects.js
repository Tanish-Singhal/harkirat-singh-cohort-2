// object and prototypes
const employee = {
  calcTax() {
      console.log("tax rate is 10%");
  },
}

const karanArjun = {
  salary: 50000,
  calcTax() {
      console.log("tax rate is 20%");
  },
}

karanArjun.__proto__ = employee;




// classes
class toyotaCar {
  start() {
      console.log("start");
  }

  stop() {
      console.log("stop");
  }

  setBrand(brand) {
      this.brandName = brand;
  }
}

let fortuner = new toyotaCar();
// fortuner becomes an object which has start and stop function inside it
let lexus = new toyotaCar();

fortuner.setBrand("fornuter");
lexus.setBrand("lexus");
