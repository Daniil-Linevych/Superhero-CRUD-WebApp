# Superheroes CRUD Web App

JSNinja Test Task.

---

## Table of Contents

- [Technical Requirements](#technical-requirements)  
- [Installation](#installation)
- [Usage](#usage)
- [Assumptions](#assumptions)  

---

## Technical Requirements

**List the technical requirements:**
  - OS: Windows
  - Framework: Node.js + Express / React   
  - Database: PostgreSQL   

---

## Installation

Follow these steps to run the project locally:

**Note:** The setup steps were tested only on Windows 10.  
They should also work on Linux/Mac, but paths or environment setup may differ slightly.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Daniil-Linevych/Superhero-CRUD-WebApp.git
2. **Navigate to the project folder**
    - cd Superhero-CRUD-WebApp
3. **Create PostgreSQL database**
4. **Set up environment variables for backend**
    - Create .env file
    - Copy .env.example to .env
    - Fill in your DB connection (change username, userpass, db)
5. **Navigate to the backend and Install dependencies**
    - cd backend
    - npm install
    - npx prisma generate
    - npx prisma migrate dev
6. **Navigate to the frontend and Install dependencies**
    - cd frontend
    - npm install
7. **Run the backend**
    - cd backend
    - npm run dev
8. **Run the frontend**
    - cd frontend
    - npm run dev

## Usage

 - Backend runs on: http://localhost:3000
 - Frontend runs on: http://localhost:5173

## Assumptions
 - Each superhero must have a unique nickname.
 - Images are stored locally in the backend uploads/ folder.
 - Validation only on backend

## Limitations / Known Issues
- No advanced **frontend validation** was implemented due to deadline constraints.  
  (Basic required fields exist, but more detailed validation could be added with libraries like Zod or Yup.)  
- No **unit tests** are included.  
  During development, the backend was tested manually via Postman to verify endpoints and data flow.  
