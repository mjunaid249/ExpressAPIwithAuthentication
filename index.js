import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./data/database.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import cors from "cors";
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
dotenv.config();
const PORT = process.env.PORT || 2000;

const app = express();
connectDb();

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
