# To-Do Reminder Mock APIs

A RESTful API service built with JSON Server to manage to-do tasks. This service provides endpoints for creating, reading, updating, and deleting to-do tasks.

## 🌐 Live Demo

API Base URL: https://to-do-reminder-mock-apis.onrender.com

## 🛠️ Built With

- [JSON Server](https://github.com/typicode/json-server) - Used for creating mock REST APIs
- Database: `db.json` file for data persistence

## 📋 API Endpoints

### Get All Tasks
```http
GET /tasks
```

### Create New Task
```http
POST /tasks
```

### Update Task
```http
PUT /tasks/:id
```

### Delete Task
```http
DELETE /tasks/:id
```

### Delete All Tasks
```http
DELETE /tasks
```

## 🚀 API Features

- Add new to-do tasks
- Retrieve a list of all to-do tasks
- Edit existing tasks
- Delete individual tasks
- Bulk delete all tasks
- Automatic data persistence using db.json

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ManiSetharasipalli/to-do-reminder-mock-apis.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── db.json          # Database file containing task data
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## 📝 Sample Task Object

```json
{
  "id": "1",
  "title": "Complete project",
  "description": "Finish the pending project work",
  "dueDate": "2024-03-20",
  "priority": "high",
  "completed": false
}
```

## 🚀 Deployment

This API is deployed on [Render](https://render.com) and is accessible at https://to-do-reminder-mock-apis.onrender.com

## 👤 Author

**Mani Setharasipalli**

* GitHub: [@ManiSetharasipalli](https://github.com/ManiSetharasipalli)
