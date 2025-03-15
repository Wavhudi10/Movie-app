
# Use a Java base image
FROM eclipse-temurin:17-jdk-jammy

# Set working directory
WORKDIR /app

# Copy the JAR file into the container
COPY BackEnd/target/*.jar app.jar

# Expose port (match your Spring Boot port, e.g., 10000 for Render)
EXPOSE 10000

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]