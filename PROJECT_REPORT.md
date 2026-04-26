# Финальный отчёт по проекту «Веб-калькулятор»

## 1. Описание системы

### 1.1. Назначение
Веб-калькулятор — это простое веб-приложение для выполнения базовых арифметических операций: сложение, вычитание, умножение, деление. Приложение демонстрирует навыки работы с современным стеком технологий, CI/CD, контейнеризацией и безопасностью.

### 1.2. Основные возможности
- Выполнение четырёх базовых операций
- Обработка ошибок (деление на ноль, нечисловой ввод)
- Адаптивный веб-интерфейс
- Поддержка клавиатуры (Enter для вычисления)
- API для интеграции с другими сервисами

### 1.3. Целевая аудитория
- Разработчики, изучающие веб-технологии
- Пользователи, которым нужен простой калькулятор в браузере

## 2. Архитектура системы

### 2.1. Общая схема
Клиент (браузер) → Frontend (HTML/CSS/JS) → API → Backend (Node.js) → Вычисление → Ответ

### 2.2. Компоненты

| Компонент | Технология | Назначение |
|-----------|------------|------------|
| Frontend | HTML, CSS, JavaScript | Интерфейс пользователя |
| Backend | Node.js + Express | Логика вычислений и API |
| CI/CD | GitHub Actions | Автоматические проверки |
| Контейнеризация | Docker | Воспроизводимый запуск |
| Безопасность | Semgrep, Trivy | Статический анализ и проверка зависимостей |

### 2.3. Структура проекта
-introduction-to-the-specialty/
├── frontend/
│ └── index.html
├── backend/
│ ├── server.js
│ ├── calculator.js
│ └── package.json
├── tests/
│ ├── unit/
│ ├── integration/
│ └── e2e/
├── .github/workflows/
│ └── ci.yml
├── .semgrep/
├── Dockerfile
├── docker-compose.yml
└── README.md
text


## 3. Тестирование

### 3.1. Уровни тестирования

| Тип тестов | Инструмент | Описание |
|------------|------------|----------|
| Unit тесты | Jest | Проверка функций калькулятора |
| Integration тесты | Supertest | Проверка API эндпоинтов |
| E2E тесты | Playwright | Полные сценарии в браузере |

### 3.2. Пример unit-теста

```javascript
test('divide should throw error for division by zero', () => {
  expect(() => Calculator.divide(5, 0)).toThrow('Деление на ноль невозможно');
});

###3.3. Запуск тестов
bash

npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:all

###3.4. CI автоматизация

Тесты запускаются автоматически при каждом Pull Request. При ошибках merge блокируется.
##4. Безопасность
###4.1. Инструменты анализа
Инструмент	Назначение	Результаты
Semgrep	Статический анализ кода	9 найденных проблем (исправлены)
Trivy	Анализ зависимостей	Уязвимостей HIGH/CRITICAL не найдено
###4.2. Найденные и исправленные проблемы
Проблема	Решение
Неиспользуемые переменные	Удалены из кода
console.log в продакшене	Закомментирован
Отсутствие type="button"	Добавлен атрибут
###4.3. SBOM (Software Bill of Materials)

Сгенерирован файл sbom.json в формате CycloneDX, содержащий все зависимости проекта.
##5. Контейнеризация
###5.1. Docker образ
dockerfile

FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend ./backend
COPY frontend ./frontend
EXPOSE 3000
CMD ["node", "backend/server.js"]

###5.2. Запуск
bash

docker build -t web-calculator .
docker run -p 3000:3000 web-calculator

##6. CI/CD Pipeline
###6.1. Этапы CI

    Unit тесты

    Integration тесты

    E2E тесты

    Semgrep

    Trivy

    Quality Gate

###6.2. GitHub Actions workflow

Файл .github/workflows/ci.yml содержит все этапы. Pipeline запускается при каждом push и pull request.
##7. Инструкция для разработчика
###7.1. Клонирование и запуск
bash

git clone https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty.git
cd -introduction-to-the-specialty
npm install
cd backend && npm install && cd ..
npm start

Открыть: http://localhost:3000
###7.2. Запуск тестов
bash

npm run test:unit
npm run test:integration

###7.3. Запуск через Docker
bash

docker build -t web-calculator .
docker run -p 3000:3000 web-calculator

###7.4. Создание PR для новой функции
bash

git checkout -b feature/новая-функция
git add .
git commit -m "Описание изменений"
git push origin feature/новая-функция

##8. Выводы
###8.1. Достигнутые результаты

    Разработано работающее веб-приложение

    Настроен CI/CD с автоматическими проверками

    Добавлены тесты разных уровней

    Проведён статический анализ безопасности

    Выполнен анализ зависимостей (SBOM)

    Создан Docker-образ для воспроизводимого запуска

###8.2. Полученные навыки

    Работа с Git и GitHub (ветки, PR, ревью)

    Настройка CI/CD (GitHub Actions)

    Написание тестов (Jest, Supertest, Playwright)

    Контейнеризация (Docker, docker-compose)

    Инструменты безопасности (Semgrep, Trivy)

    Документирование проекта

###8.3. Планы по улучшению

    Добавить историю вычислений

    Реализовать тёмную тему

    Добавить больше операций (возведение в степень, квадратный корень)

    Развернуть приложение на облачном хостинге (Render, Railway)

##9. Ссылки

    Репозиторий: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty

    Pull Request README: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/2

    Pull Request Калькулятор: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/3

    Pull Request CI: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/4

    Pull Request Docker: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/5

    Pull Request Тесты: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/6

    Pull Request Semgrep: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/7

    Pull Request Trivy: https://github.com/egorzhirkov146-ctrl/-introduction-to-the-specialty/pull/8

##10. Заключение

Проект успешно завершён. Все 8 задач реализованы в соответствии с требованиями. Получен опыт работы с современными инструментами разработки, CI/CD и безопасностью. Проект готов к передаче другому разработчику для дальнейшего развития.

###Автор: egorzhirkov146-ctrl
