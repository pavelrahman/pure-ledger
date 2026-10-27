//* External Imports *//
import express from "express";
import path from "path";

//* Internal Imports *//
import router from "./routes/index.js";
import morgan from "morgan";

const app = express();

//* Middlewares *//
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); //* Use to get logs *//
}

app.use(express.json());

//* Static File *//
app.use(express.static(path.join(import.meta.dirname, "..", "public")));

//* Routes *//
app.use("/api/v1", router);

export default app;
