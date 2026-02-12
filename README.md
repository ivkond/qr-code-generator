# QR Code Generator

Простой генератор QR-кодов для тестирования гипотезы.

## Функции

- Генерация QR-кодов из текста или URL
- Настройка размера и отступов
- Изменение цветов (QR-код и фон)
- Скачивание в формате PNG
- История последних генераций

## Развёртывание

### Локальный запуск

```bash
npm install
npm start
```

Открой http://localhost:3000

### Dokploy

1. Загрузи код в Git-репозиторий
2. В Dokploy создай новое приложение:
   - Build Type: Dockerfile
   - Port: 3000
   - Root Directory: qr-code-generator
