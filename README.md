## Запуск через Docker

### Требования
- Docker Desktop: https://www.docker.com/products/docker-desktop/
- Docker Compose (входит в Docker Desktop)

### Команды для запуска

#### Сборка образа
```bash
docker build -t web-calculator .
Запуск контейнера
bash

docker run -p 3000:3000 web-calculator

Запуск через docker-compose
bash

docker-compose up -d

Остановка контейнера
bash

docker-compose down

Проверка

Откройте браузер: http://localhost:3000
Очистка
bash

# Удалить контейнер
docker rm web-calculator

# Удалить образ
docker rmi web-calculator

# Очистить кэш
docker system prune -

