const request = require('supertest');
const app = require('../../backend/server');

describe('API Integration Tests', () => {
  describe('POST /api/calculate', () => {
    test('should return sum of two numbers', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 5, num2: 3, operation: '+' });

      expect(response.statusCode).toBe(200);
      expect(response.body.result).toBe(8);
    });

    test('should return difference', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 10, num2: 4, operation: '-' });

      expect(response.statusCode).toBe(200);
      expect(response.body.result).toBe(6);
    });

    test('should return product', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 6, num2: 7, operation: '*' });

      expect(response.statusCode).toBe(200);
      expect(response.body.result).toBe(42);
    });

    test('should return quotient', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 15, num2: 3, operation: '/' });

      expect(response.statusCode).toBe(200);
      expect(response.body.result).toBe(5);
    });

    test('should return error for division by zero', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 10, num2: 0, operation: '/' });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe('Деление на ноль невозможно');
    });

    test('should return error for non-numeric input', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 'abc', num2: 3, operation: '+' });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe('Введите корректные числа');
    });

    test('should return error for missing data', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ num1: 5, operation: '+' });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe('Не все данные переданы');
    });
  });
});
