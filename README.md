### 1. Запуск серверной части (Backend)

#### Предварительные требования:

- Установлен **Swift** и **Vapor**
- Установлен **Docker** для контейнера с PostgreSQL
- Установлен **Visual Studio Code**

#### Шаги:

1. **Создайте контейнер PostgreSQL с помощью Docker**:
   В терминале запустите команду для создания и запуска PostgreSQL:

   ```bash
   docker run --name postgres-chat -e POSTGRES_DB=chatdb -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
   ```

2. **Настройте подключение к базе данных**:

   - Убедитесь, что настройки соответствуют параметрам контейнера PostgreSQL:
     ```swift
     app.databases.use(.postgres(
       hostname: "localhost",
       port: 5432,
       username: "admin",
       password: "admin",
       database: "chatdb"
     ), as: .psql)
     ```

3. **Миграции базы данных**:
   Выполните миграции для создания необходимых таблиц:

   ```bash
   vapor run migrate
   ```

4. **Запустите сервер Vapor**:
   В корневой папке `ChatApp` выполните:
   ```bash
   vapor run serve
   ```
   Сервер будет доступен по адресу `http://localhost:8080`.

### 2. Запуск фронтенд-части (Frontend)

#### Предварительные требования:

- Установлен **Node.js** и **npm** или **yarn**

#### Шаги:

1. **Установите зависимости**:
   Перейдите в папку `frontend` и установите зависимости:

   ```bash
   cd frontend
   npm install
   # или
   yarn install
   ```

2. **Настройте API-пути**:

   - Проверьте, что ваши API-запросы направлены на `http://localhost:8080` (или на порт, который использует Vapor).
   - Если нужно изменить базовый URL, это можно сделать в файле `api.ts` в папке `utils`:
     ```typescript
     const BASE_URL = "http://localhost:8080";
     ```

3. **Запустите Next.js в режиме разработки**:
   Выполните:
   ```bash
   npm run dev
   # или
   yarn dev
   ```
   Фронтенд будет доступен по адресу `http://localhost:3000`.

### 3. Тестирование чата

После запуска обоих сервисов:

1. Откройте браузер и перейдите на `http://localhost:3000`.
2. Создавайте новые чаты, отправляйте и получайте сообщения через интерфейс.

### 4. Дополнительные команды и сборка для продакшн

- **Сборка и запуск бэкенда в продакшн-режиме**:

  ```bash
  vapor build
  vapor run serve --env production
  ```

- **Сборка фронтенда для продакшн**:
  ```bash
  npm run build
  npm start
  ```
  Фронтенд будет доступен по тому же адресу `http://localhost:3000`, но уже в режиме продакшн.

### 5. Закрытие и удаление контейнера PostgreSQL (при необходимости)

Для остановки контейнера PostgreSQL:

```bash
docker stop postgres-chat
```

Чтобы удалить контейнер:

```bash
docker rm postgres-chat
```
