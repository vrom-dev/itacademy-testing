class Persona {
  constructor (nombre) {
    this.nombre = nombre
  }

  decirNombre () {
    console.log(`${this.nombre}`)
  }
}

module.exports = Persona
