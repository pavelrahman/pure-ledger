//* External Imports *//
import express from "express";

//* Internal Imports *//
import userRoutes from "./userRoutes.js";

const router = express.Router();
router.use("/users", userRoutes);

export default router;
