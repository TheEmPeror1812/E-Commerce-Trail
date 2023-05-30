import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { config } from "dotenv";
import path from "path";
import errorMiddleware from "./middleware/error.js";

// Config

config({ path: "backend/config/config.env" })

app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Route Imports
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";
import order from "./routes/orderRoute.js";
import payment from "./routes/paymentRoute.js";
import paymentrazor from "./routes/paymentRouteRp.js"

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", paymentrazor);


// Middleware for Errors
app.use(errorMiddleware);

export default app;
