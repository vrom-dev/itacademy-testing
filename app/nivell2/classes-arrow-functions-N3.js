class AbstractPerson {
  constructor () {
    if (this.constructor === AbstractPerson) {
      throw new Error("Person is an abstract class and can't be instantiated")
    }
  }

  sayName () {
    console.log(`My name is ${this.name}`)
  }

  sayRole () {
    throw new Error("Method 'sayRole()' has to be implemented")
  }
}

// Clase que exten la clase abstracta i implementa sayRole()
class DevStudent extends AbstractPerson {
  constructor (name, role) {
    super()
    this.name = name
    this.role = role
  }

  sayRole () {
    console.log(`My role is ${this.role}`)
  }
}

class DevStudentSayRoleNotImplemented extends AbstractPerson {
  constructor (name, role) {
    super()
    this.name = name
    this.role = role
  }
}

module.exports = {
  AbstractPerson,
  DevStudent,
  DevStudentSayRoleNotImplemented
}
