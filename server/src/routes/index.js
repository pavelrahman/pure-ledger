//* External Imports *//
import express from "express";

//* Internal Imports *//
import sampleRoutes from "./sampleRoutes.js";

const router = express.Router();
router.use("/sample", sampleRoutes);

export default router;
