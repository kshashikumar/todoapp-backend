import express from "express";
import cors from "cors";
import taskRouter from "./src/routers/taskRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", taskRouter);

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
