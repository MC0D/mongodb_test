import express from "express";
import connectDB from "./config/db.js";
import ordersRouter from "./routes/orders.router.js"
import productRouter from "./routes/products.router.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use('/orders', ordersRouter)
app.use('/products', productRouter)

app.listen(process.env.port, () => {
  console.log(`Server is running at http://localhost:${process.env.port}`);
});