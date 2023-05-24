FROM openjdk:17-ea-11-jdk-slim

ARG JAR_FILE=build/libs/backend-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

ENV TZ=Asia/Seoul
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
