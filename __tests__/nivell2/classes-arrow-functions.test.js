const Persona = require('../../app/nivell2/classes-arrow-functions-N2')
const {
  AbstractPerson,
  DevStudent,
  DevStudentSayRoleNotImplemented
} = require('../../app/nivell2/classes-arrow-functions-N3')

jest.mock('../../app/nivell2/classes-arrow-functions-N2')

describe('CLASSES-ARROW-FUNCTIONS', () => {
  describe('Persona class', () => {
    beforeEach(() => {
      Persona.mockClear()
    })
    test('when instantiating a new object, it calls the class constructor', () => {
      const vic = new Persona('Vic')
      const omar = new Persona('Omar')
      expect(Persona).toHaveBeenCalledTimes(2)
    })
    test('when calling its decirNombre() method, it calls it', () => {
      const vic = new Persona('Vic')
      const omar = new Persona('Omar')
      const mockPersonaInstance1 = Persona.mock.instances[0]
      const mockPersonaInstance2 = Persona.mock.instances[1]
      vic.decirNombre()
      vic.decirNombre()
      omar.decirNombre()
      expect(mockPersonaInstance1.decirNombre).toHaveBeenCalledTimes(2)
      expect(mockPersonaInstance2.decirNombre).toHaveBeenCalledTimes(1)
    })
  })
  describe('AbstractPerson class', () => {
    test('when instantiating the abstract class, it throws an error', () => {
      let vic
      try {
        vic = new AbstractPerson('Vic')
      } catch (e) {
        expect(e.message).toBe('Person is an abstract class and can\'t be instantiated')
        expect(vic).not.toBeDefined()
      }
    })
    test('when instantiating a child class, it calls the parent constructor and it doesn\'t throw an error', () => {
      const vic = new DevStudent('Vic', 'Node dev')
      expect(vic.name).toBe('Vic')
      expect(vic.role).toBe('Node dev')
      expect(vic.sayRole).toBeDefined()
      expect(vic.sayName).toBeDefined()
    })
    test('when calling the child with implemented sayRole, it calls it without any error', () => {
      const vic = new DevStudent('Vic', 'Node dev')
      DevStudent.prototype.sayRole = jest.fn()
      vic.sayRole()
      vic.sayRole()
      expect(DevStudent.prototype.sayRole).toHaveBeenCalledTimes(2)
    })
    test('when calling the child with not implemented sayRole, it throws an error', () => {
      const vic = new DevStudentSayRoleNotImplemented('Vic', 'Node dev')
      try {
        vic.sayRole()
      } catch (e) {
        expect(e.message).toBe('Method \'sayRole()\' has to be implemented')
      }
    })
  })
})
