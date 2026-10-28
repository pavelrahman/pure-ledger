//* External Imports *//
import express from "express";

//* Internal Imports *//
import controllers from "../controllers/index.js";

const { userController } = controllers;

const router = express.Router();

router.route("/").post(userController.createUser);

export default router;
