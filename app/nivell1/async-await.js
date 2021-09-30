/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable node/no-callback-literal */

/* Nivell 1 */
// Exercici 1
const getEmpleado = (id, employees) => {
  const employee = employees.find(e => e.id === id)
  return new Promise((resolve, reject) => {
    employee ? resolve(employee) : reject('Employee not found')
  })
}
const getSalario = (employee, salaries) => {
  if (!salaries) return Promise.reject('Error: Salaries array not found')
  if (!employee) return Promise.reject('Error: Employee not specified')
  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((resolve, reject) => {
    salary ? resolve(salary.salary) : reject('Error: Salary of employee not found')
  })
}

/* Nivell 2 */
// Exercici 1
const sayHiAfter2s = (name, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || typeof name !== 'string' || !name.trim()) {
        const error = 'Error. You need to pass a string as a parameter'
        cb(error)
        reject(error)
      } else {
        const msg = `Nice! ${name}`
        cb(msg)
        resolve(msg)
      }
    }, 2000)
  })
}

const startFn = async (name, cb) => {
  sayHiAfter2s(name, cb)
    .then(message => message)
    .catch(error => error)
}

module.exports = {
  startFn,
  getEmpleado,
  getSalario
}
