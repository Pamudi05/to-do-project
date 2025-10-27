import { Router } from "express";
import { getAllTasks, getTask, createTask, updateTask, deleteTask} from "../controller/tasksController.js";

const appRouter = Router();

appRouter.get("/findAll", getAllTasks)
appRouter.get("/:id", getTask)
appRouter.post("/create", createTask)
appRouter.put("/update/:id", updateTask)
appRouter.delete("/delete/:id", deleteTask)

export default appRouter;