import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

// 1. GLOBAL MIDDLEWARE
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. ROUTES

// 3. NOT FOUND (404)
app.use(notFound);

// 4. ERROR HANDLER
app.use(errorHandler);

export default app;
