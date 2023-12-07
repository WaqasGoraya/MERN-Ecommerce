import express from "express";
import env from "dotenv";
env.config();
const app = express();
import color from "colors";
import connectDB from "./db/connection.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";

const port = process.env.PORT || 8080;
const DB_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(morgan("dev"));

// api routes
app.use('/api',authRoutes);
connectDB(DB_URL);

app.listen(port, () => {
  console.log(`App is running on port ${port}`.white);
});
