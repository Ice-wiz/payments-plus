import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { userRoutes } from "./src/routes/userRoutes.js";
import { paymentRoutes } from "./src/routes/paymentRoutes.js";
import { connectDB } from "./src/config/connectDB.js";
import { notFound } from "./src/middlewares/notFoundMiddleware.js";
import { errorHandler } from "./src/middlewares/errorHandlerMiddleware.js";
import {
  hitCount,
  requestCount,
} from "./src/middlewares/requestCountMiddleware.js";
import { rateLimit } from "./src/middlewares/rateLimitMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(
  cors()
);
app.use(express.json());
app.use(requestCount);
app.use(rateLimit);

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Server is live", live: true });
});

app.get("/api/hits", (req, res) => {
  res.status(200).json({ count: hitCount });
});

app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
