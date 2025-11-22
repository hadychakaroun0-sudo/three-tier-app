FROM python:3.11-slim

WORKDIR /app

# انسخ requirements.txt وثبّت المكتبات
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# انسخ كل الملفات من مجلد backend
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]

