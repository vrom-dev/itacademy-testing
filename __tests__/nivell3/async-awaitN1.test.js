const { getEmpleado, getSalario, startFn } = require('../../app/nivell3/async-await')

const employeeFakeData = [{
  id: 1,
  name: 'Vic'
}, {
  id: 2,
  name: 'Omar'
}]

const salariesFakeData = [{
  id: 1,
  salary: 2300
}, {
  id: 2,
  salary: 3300
}]

const employees = jest.fn()
  .mockReturnValue(employeeFakeData)

const salaries = jest.fn()
  .mockReturnValue(salariesFakeData)

describe('ASYNC AWAIT NV 1', () => {
  describe('getEmpleado', () => {
    test('when passed an id as a argument, it returns an employee object', () => {
      getEmpleado(2, employees())
        .then(result => {
          expect(result.name).toBe('Omar')
          expect(result.id).toBe(2)
          expect(typeof result).toBe('object')
          expect(Object.keys(result)[0]).toBe('id')
          expect(Object.keys(result)[1]).toBe('name')
          expect(Object.keys(result).length).toBe(2)
        })
    })
    test('when passed an non valid id , it returns an error', () => {
      const id = 4
      getEmpleado(id, employees())
        .then(result => {
          expect(result.name).not.toBeDefined()
          expect(result.id).not.toBeDefined()
          expect(typeof result).not.toBe('object')
          expect(Object.keys(result)[0]).not.toBe('id')
          expect(Object.keys(result)[1]).not.toBe('name')
          expect(Object.keys(result).length).not.toBe(2)
        })
        .catch(error => {
          expect(error).toBe('Employee not found')
        })
    })
  })

  describe('getSalario', () => {
    test('when passed an id as an argument, it returns an the salary of that employeet', () => {
      const id = 2
      getEmpleado(id, employees())
        .then(empleado => {
          getSalario(empleado, salaries())
            .then(result => {
              expect(result).toBe(salaries()[1].salary)
            })
        })
    })
    test('when no id is passed as an argument, it returns an error', () => {
      getSalario(undefined, salaries())
        .catch(error => {
          expect(error).toBe('Error: Employee not specified')
        })
    })
    const id = 2
    test('when no valid salaries array is passed as an argument, it returns an error', () => {
      getSalario(id, undefined)
        .catch(error => {
          expect(error).toBe('Error: Salaries array not found')
        })
    })
  })
})

describe('ASYNC AWAIT NV 3', () => {
  describe('sayHiAfter2s', () => {
    const name = 'Vic'
    test('it says hi after 2s with the provided name', () => {
      const callback = jest.fn()
      jest.useFakeTimers()
      startFn(name, callback)
      expect(callback).not.toHaveBeenCalled()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalled()
      expect(callback).toBeCalledWith(`Nice! ${name}`)
    })
    test('if an empty string is provided as a name it returns an error message', () => {
      const callback = jest.fn()
      jest.useFakeTimers()
      startFn('', callback)
      expect(callback).not.toHaveBeenCalled()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalled()
      expect(callback).toBeCalledWith('Error. You need to pass a string as a parameter')
    })
    test('if value different from string is provided as a name it returns an error message', () => {
      const callback = jest.fn()
      jest.useFakeTimers()
      startFn(5, callback)
      expect(callback).not.toHaveBeenCalled()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalled()
      expect(callback).toBeCalledWith('Error. You need to pass a string as a parameter')
    })
  })
})
