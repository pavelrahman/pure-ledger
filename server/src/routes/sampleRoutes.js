//* External Imports *//
import express from "express";

//* Internal Imports *//
import controllers from "../controllers/index.js";

const { sampleController } = controllers;

const router = express.Router();

router.route("/").get(sampleController.getAll);

export default router;
