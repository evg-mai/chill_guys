# Проект Chill Guys для цифровой кафедры МАИ 2025

## Определение сварных дефектов на основе технологии React и Django

### Стек технологий
- Frontend: React.js
- Backend: Django

### Работа с проектом
1) Запуск Frontend

```
cd frontend
npm install           
npm run start --openssl-legacy-provider            
```

2) Запуск Backend (после sudo apt install python3.7-env)

```
cd backend
pip install requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```