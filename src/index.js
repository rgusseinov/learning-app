// Decorator Pattern

class Car {

  constructor(){
    this.price = 1500
    this.model = 'Volvo'
  }

  getPrice(){
    return this.price
  }

  getDescription(){
    return this.model
  }

}


class Audi extends Car {

  constructor(){
    super()
    this.price = 2500
    this.model = 'Audi A8'
  }

}

class BMW extends Car {
  constructor(){
    super()
    this.price = 3500
    this.model = 'BMW i8'
  }
}

// Decorator Autopilot

class Autopilot {

  constructor(car){
    this.car = car
  }

  getPrice(){
    return this.car.getPrice() + 1000
  }

  getDescription(){
    return `${this.car.getDescription()} with autopilot`
  }

}

// Decorator Parktronik

class Parktronik {

  constructor(car){
    this.car = car
  }

  getPrice(){
    return this.car.getPrice() + 2000
  }

  getDescription(){
    return `${this.car.getDescription()} with Parktronik`
  }

}


let audi = new Audi()
audi = new Autopilot(audi)

console.log(audi.getPrice(), audi.getDescription())
