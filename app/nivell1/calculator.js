const sum = (...args) => {
  return args.reduce((acc, currentValue) => {
    if (typeof currentValue !== 'number' || acc === 'Error: cannot add values different than numbers') {
      return 'Error: cannot add values different than numbers'
    } else {
      return acc + currentValue
    }
  }, 0)
}
const substract = (...args) => {
  return args.reduce((acc, currentValue, index) => {
    if (typeof currentValue !== 'number' || acc === 'Error: cannot add values different than numbers') {
      return 'Error: cannot add values different than numbers'
    } else {
      if (index === 0) return currentValue
      else return acc - currentValue
    }
  })
}
const multiply = (...args) => {
  return args.reduce((acc, currentValue, index) => {
    if (typeof currentValue !== 'number' || acc === 'Error: cannot add values different than numbers') {
      return 'Error: cannot add values different than numbers'
    } else {
      if (index === 0) return currentValue
      else return acc * currentValue
    }
  })
}

const divide = (...args) => {
  return args.reduce((acc, currentValue, index) => {
    if (typeof currentValue !== 'number' || acc === 'Error: cannot add values different than numbers') {
      return 'Error: cannot add values different than numbers'
    } else {
      if (index === 0) return currentValue
      else return acc / currentValue
    }
  })
}

module.exports = {
  sum,
  substract,
  multiply,
  divide
}
