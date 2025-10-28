# to-do-project

This project is a full-stack Todo application featuring a React + TypeScript frontend and a Node.js/Express backend written in JavaScript, with MySQL as the database. The app allows users to create tasks, view all tasks, and update task status seamlessly. All components are containerized using Docker for easy setup and deployment.

## Features
- Add new tasks
- Mark tasks as completed
- View tasks
- Responsive UI
- Toast notifications for success/error

## Technologies
- Frontend: React, TypeScript, Axios
- Backend: Node.js, Express, JavaScript
- Database: MySQL
- Others: Docker, Toastify

## Installation

Clone the repository
```
git clone https://github.com/Pamudi05/to-do-project.git
```
cd backend
npm install
cd ../frontend
npm install

## Setup .env file in backend
DB_HOST=localhost
DB_USER=todo_user
DB_PASSWORD=1010
DB_NAME=todo_db
PORT=5000

## Running the Project

### Using Docker (Recommended)
Make sure you have Docker and Docker Compose installed.  
Then run:

```bash
docker-compose up --build
```

## Run backend and frontend (Without Docker)
# In backend folder
```bash
npm run dev
```
# In frontend folder
```bash
npm start
```

### Usage
```markdown
- Open http://localhost:3000 in your browser
- Add a task using the input field
- Click "Done" to mark it as completed


