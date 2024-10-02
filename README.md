# Basic Inventory Management Panel

## Introduction

If you want to save your inventory data and manage it in one panel you can use this basic inventory management panel. You can list your products, add new products to inventory, update and delete products.

Used technologies: Java Spring Boot, PostgreSQL, Docker, Typescript, React, React-Bootstrap

## Prerequisites

Clone this repository:
```console
git clone https://github.com/oguzhancttnky/inventory-management.git
cd inventory-management
```

## Running with Docker

Build and run three containers (db-container, frontend-container and backend-container):
```console
docker compose up --build
```
## Running Locally
### Frontend

1. Navigate to frontend directory:
```console
cd inventory-management/inventory-frontend
```
2. Install dependencies:
```console
pnpm i
```
3. Start the frontend server:
```console
pnpm start
```
### Backend

1. Navigate to the backend directory:
```console
cd inventory-management/inventory-backend
```
2. Install dependencies:
```console
mvn clean install
```
3. Run the backend server:
```console
java -jar target/inventory-management-1.0-SNAPSHOT.jar
```

Frontend:`http://localhost:3000`
Backend API: `http://localhost:8080`
Swagger UI: `http://localhost:8080/swagger-ui.html`

## Screenshots

Demo
![Demo](https://github.com/user-attachments/assets/1f685593-64f9-414c-a4ba-1b6b55e24487)

Swagger UI
![Swagger](https://github.com/user-attachments/assets/819de514-a6aa-46a5-a55a-dc1f75a5da97)


