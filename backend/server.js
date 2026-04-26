const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (num1 === undefined || num2 === undefined || !operation) {
        return res.status(400).json({ error: 'Не все данные переданы' });
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Введите корректные числа' });
    }

    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                return res.status(400).json({ error: 'Деление на ноль невозможно' });
            }
            result = a / b;
            break;
        default:
            return res.status(400).json({ error: 'Неизвестная операция' });
    }

    result = parseFloat(result.toFixed(10));
    res.json({ result });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Страница не найдена' });
});

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
  });
}
