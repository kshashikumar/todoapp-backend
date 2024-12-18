# TodoApp Backend

This is the **back-end** application for the **Todo List App**, built with **Express.js**, **Prisma**, and **MySQL**. It provides RESTful APIs for managing tasks and serves as the server-side component for the TodoApp project.

---

## Features

- **REST API Endpoints**:
  - Fetch all tasks.
  - Fetch a specific task by ID.
  - Create new tasks.
  - Update existing tasks.
  - Delete tasks.
- **Database**:
  - Uses Prisma ORM with MySQL for seamless database management.
- **Validation and Error Handling**:
  - Ensures API reliability with proper validations and error responses.

---

## Setup Instructions

### Prerequisites

- **Node.js** (>= 14.x recommended).
- A running instance of **MySQL** database.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kshashikumar/todoapp-backend.git
   cd todoapp-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:

- Create a `.env` file in the project root.
- Add the following variable (update with your MySQL credentials):

```bash
DATABASE_URL="mysql://username:password@localhost:3306/todo_app"
```

4. Initialize the database:

- Generate the Prisma client

```bash
npx prisma generate
```

- Apply migrations

```bash
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
npm run dev
```

6. Test the API:

- Access the API endpoints at [http://localhost:4000/api](http://localhost:4000/api).

### API Endpoints

- `/tasks` Fetch all tasks. (GET)
- `/tasks/:id` Fetch a specific task by ID. (GET)
- `/tasks/` Create a new task. (POST)
- `/tasks/:id` Update a specific task. (PUT)
- `/tasks/:id` Delete a specific task. (DELETE)

### Prisma Database Initialization

## Database Setup

1. Ensure you have a running MySQL database.

- Example connection string for `.env`

```bash
DATABASE_URL="mysql://root:password@localhost:3306/todo_app"
```

2. Run Prisma commands:

- Generate the Prisma client:

```bash
npx prisma generate
```

- Apply database migrations:

```bash
npx prisma migrate dev --name init
```

### Scripts

- `npm run dev`: Starts the development server with live reloading.
- `npm run build`: Compiles the project for production.
- `npm start`: Starts the compiled production server.
