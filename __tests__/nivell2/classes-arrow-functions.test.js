// https://jestjs.io/docs/es6-class-mocks
const { Persona, AbstractPerson } = require('../../app/nivell2/classes-arrow-functions')
jest.mock('../../app/nivell2/classes-arrow-functions')

describe('CLASSES-ARROW-FUNCTIONS', () => {
  describe('Persona class', () => {
    test('foo', () => {
      const vic = new Persona('Vic')
      expect(Persona).toHaveBeenCalledTimes(1)
    })
  })
})
