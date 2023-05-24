FROM python:3.9
WORKDIR /app
COPY . .

EXPOSE 8000
RUN pip install -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
