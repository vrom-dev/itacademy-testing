const { getEmpleado, getSalario } = require('../../app/nivell1/asyncawait')

const employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
}, {
  id: 3,
  name: 'Jeff Bezos'
}]

const salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}]

describe('ASYNC AWAIT NV 1', () => {
  describe('getEmpleado', () => {
    test('when passed an id as a argument, it returns an employee object', () => {
      getEmpleado(2, employees)
        .then(result => {
          expect(result.name).toBe('Bill Gates')
          expect(result.id).toBe(2)
          expect(typeof result).toBe('object')
          expect(Object.keys(result)[0]).toBe('id')
          expect(Object.keys(result)[1]).toBe('name')
          expect(Object.keys(result).length).toBe(2)
        })
    })
    test('when passed an non valid id , it returns an error', () => {
      const id = 4
      getEmpleado(id, employees)
        .then(result => {
          expect(result.name).not.toBe('Bill Gates')
          expect(result.id).not.toBe(2)
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
      getEmpleado(id, employees)
        .then(empleado => {
          getSalario(empleado, salaries)
            .then(result => {
              expect(result).toBe(salaries[1].salary)
            })
        })
    })
    test('when no id is passed as an argument, it returns an error', () => {
      getSalario()
        .then(result => {
          expect(result).toBe(salaries[1].salary)
        })
        .catch(error => {
          expect(error).toBe('Error: Employee not specified')
        })
    })
    const id = 2
    test('when no valid salaries array is passed as an argument, it returns an error', () => {
      getEmpleado(id, employees)
        .then(empleado => {
          getSalario(empleado)
            .catch(error => {
              expect(error).toBe('Error: Salaries array not found')
            })
        })
    })
  })
})
