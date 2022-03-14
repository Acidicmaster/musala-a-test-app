
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import express from "express";


import { errorHandler } from "./middleware/error.js";
import connectDB from "./config/db.js";

import gatewayRouter from "./routes/gateway.js";
import peripheralRouter from "./routes/peripheral.js";

const app = express();

//configure env
dotenv.config()

//connecting to database
connectDB();

if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
  }

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// For the rest routes that are not defined above: return 404 error
//app.use(notFound);

// Custom error handler middleware
app.use(errorHandler);
app.use(bodyParser.json());

app.use('/api/gateway', gatewayRouter);
app.use('/api/peripheral', peripheralRouter);




// Production env
if (process.env.NODE_ENV === "production") {
    // Make /build static
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    // Serve /build/index.html
    app.get(
      "*",
      (req, res) =>
        // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
        res.sendFile(path.join(__dirname, "frontend/build/index.html")) // same as above
    );
} else {
    // Development env
    app.get("/", (req, res) => {
      res.send("API is running");
    });
  }
// PORT
const PORT = process.env.PORT || 4000;
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  );
