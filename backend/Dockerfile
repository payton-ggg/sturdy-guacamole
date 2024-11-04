# Используем официальный образ Swift
FROM swift:5.8

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости и собираем проект
RUN swift build -c release

# Запускаем приложение
CMD [".build/release/Run"]
