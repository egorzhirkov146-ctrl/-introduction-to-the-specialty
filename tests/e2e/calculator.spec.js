const { test, expect } = require('@playwright/test');

test.describe('Calculator E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should add two numbers correctly', async ({ page }) => {
    await page.fill('#num1', '10');
    await page.fill('#num2', '5');
    await page.selectOption('#operation', '+');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Результат: 15');
  });

  test('should subtract two numbers correctly', async ({ page }) => {
    await page.fill('#num1', '20');
    await page.fill('#num2', '8');
    await page.selectOption('#operation', '-');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Результат: 12');
  });

  test('should multiply two numbers correctly', async ({ page }) => {
    await page.fill('#num1', '7');
    await page.fill('#num2', '6');
    await page.selectOption('#operation', '*');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Результат: 42');
  });

  test('should divide two numbers correctly', async ({ page }) => {
    await page.fill('#num1', '20');
    await page.fill('#num2', '4');
    await page.selectOption('#operation', '/');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Результат: 5');
  });

  test('should show error for division by zero', async ({ page }) => {
    await page.fill('#num1', '10');
    await page.fill('#num2', '0');
    await page.selectOption('#operation', '/');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Ошибка: Деление на ноль невозможно');
  });

  test('should show error for empty inputs', async ({ page }) => {
    await page.fill('#num1', '');
    await page.fill('#num2', '');
    await page.click('#calculate');

    const result = await page.textContent('#result');
    expect(result).toBe('Ошибка: введите числа');
  });
});
