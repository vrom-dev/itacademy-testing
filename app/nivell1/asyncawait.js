/* Nivell 1 */
// Exercici 1
const getEmpleado = (id, employees) => {
  const employee = employees.find(e => e.id === id)
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    employee ? resolve(employee) : reject('Employee not found')
  })
}
const getSalario = (employee, salaries) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  if (!salaries) return Promise.reject('Error: Salaries array not found')
  // eslint-disable-next-line prefer-promise-reject-errors
  if (!employee) return Promise.reject('Error: Employee not specified')
  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    salary ? resolve(salary.salary) : reject('Error: Salary of employee not found')
  })
}

/* Nivell 2 */
// Exercici 1
let timeOutID
const sayHiAfter2s = (name) => {
  return new Promise((resolve, reject) => {
    timeOutID = setTimeout(() => {
      if (name.trim()) resolve(`Hi ${name}`)
      // eslint-disable-next-line prefer-promise-reject-errors
      else reject('You need to pass a name as a parameter')
    }, 2000)
    clearTimeout(timeOutID)
  })
}

const startFn = async (name) => {
  const message = await sayHiAfter2s(name)
  return message
}

module.exports = {
  startFn,
  getEmpleado,
  getSalario
}
