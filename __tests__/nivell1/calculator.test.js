const {
  sum,
  substract,
  multiply,
  divide
} = require('../../app/nivell1/calculator')

describe('CALCULATOR TEST', () => {
  describe('sum', () => {
    test('if two numbers are passed as arguments, it sums them', () => {
      expect(sum(1, 2)).toBe(3)
    })
    test('if more than two numbers are passed as arguments, it sums them all', () => {
      expect(sum(1, 2, 3, 4)).toBe(10)
    })

    test('if a non-number value is passed, returns error', () => {
      expect(sum(1, 2, 3, undefined)).toBe('Error: cannot add values different than numbers')
    })
  })

  describe('substract', () => {
    test('if two numbers are passed as arguments, it subtracts them', () => {
      expect(substract(1, 2)).toBe(-1)
    })
    test('if more than two numbers are passed as arguments, it substracts them sequentially', () => {
      expect(substract(1, 2, 3, 4)).toBe(-8)
    })

    test('if a non-number value is passed, returns error', () => {
      expect(substract(1, 2, 3, {})).toBe('Error: cannot add values different than numbers')
    })
  })

  describe('multiply', () => {
    test('if two numbers are passed as arguments, it multiplies them', () => {
      expect(multiply(1, 2)).toBe(2)
    })
    test('if a negative number is passed as argument, it changes the sign of the result properly', () => {
      expect(multiply(1, -2)).toBe(-2)
    })
    test('if more than two numbers are passed as arguments, it multiply them sequentially', () => {
      expect(multiply(2, 2, -3, -2)).toBe(24)
    })

    test('if a non-number value is passed, returns error', () => {
      expect(multiply(1, 2, null, 3)).toBe('Error: cannot add values different than numbers')
    })
  })

  describe('divide', () => {
    test('if two numbers are passed as arguments, it divides them', () => {
      expect(divide(1, 2)).toBeCloseTo(0.5)
    })
    test('if more than two numbers are passed as arguments, it substracts them sequentially', () => {
      expect(divide(47, 2, 3, 4)).toBeCloseTo(1.958)
    })

    test('if a non-number value is passed, returns error', () => {
      expect(divide(1, 2, undefined)).toBe('Error: cannot add values different than numbers')
    })
  })
})
