//* External Imports *//
import express from "express";

//* Internal Imports *//
import {
  getAllUser,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

export default router;
