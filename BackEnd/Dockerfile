
# Stage 1: Build the JAR
FROM maven:3.8.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
# Skip tests and enable debug logs
RUN mvn clean package -DskipTests -e -X

# Stage 2: Run the JAR
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 10000
ENTRYPOINT ["java", "-jar", "app.jar"]