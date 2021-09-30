const { getEmployee, getSalary } = require('../../app/nivell1/promises-callbacks')

const employees = [{
  id: 1,
  name: 'Linus Torvalds'
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

describe('PROMISES-CALLBACKS', () => {
  describe('getEmployee and getSalary', () => {
    test('if a valid employee id is provided, it returns its salary', () => {
      getEmployee(1, employees)
        .then(employee => getSalary(employee, salaries))
        .then((message) => {
          expect(message).toBe('El salari del treballador 1 és: 4000')
        })
      getEmployee(3, employees)
        .then(employee => getSalary(employee, salaries))
        .then((message) => {
          expect(message).toBe('El salari del treballador 3 és: 2000')
        })
    })
  })
  describe('getEmployee', () => {
    test('if no employees data is provided, it returns `No employees array provided`', () => {
      getEmployee(1, [])
        .catch(error => {
          expect(error).toBe('No employees array provided')
        })
    })
    test('if employees data is not an array, it returns `No employees array provided`', () => {
      getEmployee(1, {})
        .catch(error => {
          expect(error).toBe('No employees array provided')
        })
    })
    test('if employee id is not a number, it returns `Employee id is not valid`', () => {
      getEmployee(1, employees)
        .catch(error => {
          expect(error).toBe('Employee id is not valid')
        })
    })
    test('if employee id is valid but not found, it returns `Employee with id N not found`', () => {
      getEmployee(10, employees)
        .catch(error => {
          expect(error).toBe('Employee with id 10 not found')
        })
    })
    test('if employee id is valid and that employee exists, it returns it', () => {
      getEmployee(1, employees)
        .then(employee => {
          expect(employee.id).toBe(1)
          expect(employee.name).toBe('Linus Torvalds')
        })
    })
  })
  describe('getSalary', () => {
    test('if no salaries data is provided, it returns `No salaries array provided`', () => {
      getSalary(employees[0], [])
        .catch(error => {
          expect(error).toBe('No salaries array provided')
        })
    })
    test('if no employee is provided or id field is missing, it returns `Employee is not valid`', () => {
      getSalary({}, salaries)
        .catch(error => {
          expect(error).toBe('Employee is not valid')
        })
    })
    test('if valid employee object is provided but salary can\'t be found, it returns `Salary of employee with id N not found`', () => {
      getSalary({ id: 55, name: 'Jeff Bezos' }, salaries)
        .catch(error => {
          expect(error).toBe('Salary of employee with id 55 not found')
        })
    })
  })
})
