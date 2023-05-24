# FROM (이미지 이름:버전)
FROM python:3.9
EXPOSE 8000
RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN echo Asia/Seoul > /etc/timezone

# 컨테이너 내 작업 경로
WORKDIR /app

# 파일 복사
COPY . .

# 파이썬 라이브러리 설치
RUN pip install -r requirements.txt

