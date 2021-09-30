class Persona {
  constructor (nombre) {
    this.nombre = nombre
  }

  decirNombre () {
    console.log(`${this.nombre}`)
  }
}

class AbstractPerson {
  constructor () {
    if (this.constructor === AbstractPerson) {
      throw new Error("Person is an abstract class and can't be instantiated.")
    }
  }

  sayName () {
    console.log(`N3-E1: My name is ${this.name}`)
  }

  sayRole () {
    throw new Error("Method 'sayRole()' has to be implemented.")
  }
}

module.exports = {
  AbstractPerson,
  Persona
}
