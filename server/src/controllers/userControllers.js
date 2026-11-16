//* Internal Imports *//
import { userService } from "../services/UserService.js";

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      status: "success",
      result: 1,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    res
      .status(200)
      .json({ status: "success", result: users.length, data: { users } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ status: "success", result: 1, data: { user } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const user = await userService.updateUserById(req.params.id, req.body);
    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    await userService.deleteUserById(req.params.id);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
