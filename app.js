import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

connectDB();
app.listen(process.env.port, () => {
  console.log(`Server is running at http://localhost:${process.env.port}`);
});
