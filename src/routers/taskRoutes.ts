const express = require("express");
const taskController = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/tasks/:id", taskController.getTask);
taskRouter.post("/tasks", taskController.addTask);
taskRouter.put("/tasks/:id", taskController.updateTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

export default taskRouter;
