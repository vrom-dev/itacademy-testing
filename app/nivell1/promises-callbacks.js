/* eslint-disable prefer-promise-reject-errors */

const getEmployee = (id, employees) => {
  if (!Array.isArray(employees) || employees.length === 0) return Promise.reject('No employees array provided')
  if (typeof id !== 'number') return Promise.reject('Employee id is not valid')
  const employee = employees.find(e => e.id === id)
  return new Promise((resolve, reject) => {
    employee ? resolve(employee) : reject(`Employee with id ${id} not found`)
  })
}

const getSalary = (employee, salaries) => {
  if (!Array.isArray(salaries) || salaries.length === 0) return Promise.reject('No salaries array provided')
  if (typeof employee !== 'object' || !employee.id) return Promise.reject('Employee is not valid')

  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((resolve, reject) => {
    salary ? resolve(`El salari del treballador ${employee.id} és: ${salary.salary}`) : reject(`Salary of employee with id ${employee.id} not found`)
  })
}

module.exports = {
  getEmployee,
  getSalary
}
