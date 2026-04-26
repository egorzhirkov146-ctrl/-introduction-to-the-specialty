class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    return a / b;
  }

  static calculate(num1, num2, operation) {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      throw new Error('Введите корректные числа');
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operation) {
      case '+': return this.add(a, b);
      case '-': return this.subtract(a, b);
      case '*': return this.multiply(a, b);
      case '/': return this.divide(a, b);
      default: throw new Error('Неизвестная операция');
    }
  }
}

module.exports = Calculator;
