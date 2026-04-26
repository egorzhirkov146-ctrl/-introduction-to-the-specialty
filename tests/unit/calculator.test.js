const Calculator = require('../../backend/calculator');

describe('Calculator Unit Tests', () => {
  describe('Basic operations', () => {
    test('add should return sum of two numbers', () => {
      expect(Calculator.add(2, 3)).toBe(5);
      expect(Calculator.add(-1, 1)).toBe(0);
      expect(Calculator.add(0, 0)).toBe(0);
    });

    test('subtract should return difference', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
      expect(Calculator.subtract(0, 5)).toBe(-5);
    });

    test('multiply should return product', () => {
      expect(Calculator.multiply(4, 3)).toBe(12);
      expect(Calculator.multiply(-2, 3)).toBe(-6);
    });

    test('divide should return quotient', () => {
      expect(Calculator.divide(10, 2)).toBe(5);
      expect(Calculator.divide(7, 2)).toBe(3.5);
    });

    test('divide by zero should throw error', () => {
      expect(() => Calculator.divide(5, 0)).toThrow('Деление на ноль невозможно');
    });
  });

  describe('calculate method', () => {
    test('should calculate addition', () => {
      expect(Calculator.calculate(5, 3, '+')).toBe(8);
    });

    test('should calculate subtraction', () => {
      expect(Calculator.calculate(10, 4, '-')).toBe(6);
    });

    test('should calculate multiplication', () => {
      expect(Calculator.calculate(6, 7, '*')).toBe(42);
    });

    test('should calculate division', () => {
      expect(Calculator.calculate(15, 3, '/')).toBe(5);
    });

    test('should throw error for invalid operation', () => {
      expect(() => Calculator.calculate(5, 3, '%')).toThrow('Неизвестная операция');
    });

    test('should throw error for non-numeric input', () => {
      expect(() => Calculator.calculate('abc', 3, '+')).toThrow('Введите корректные числа');
    });
  });
});
