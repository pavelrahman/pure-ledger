//* Internal Imports *//
import service from "../services/index.js";

const { UserService } = service;

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
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
  },
  getAllUser: async (req, res) => {
    try {
      const users = await UserService.getAllUser();
      res
        .status(200)
        .json({ status: "success", result: users.length, data: { users } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.status(200).json({ status: "success", result: 1, data: { user } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  },
  updateUserById: async (req, res) => {
    try {
      const user = await UserService.updateUserById(req.params.id, req.body);
      res.status(200).json({ status: "success", data: { user } });
    } catch (error) {
      res.status(404).json({ status: "fail", message: error.message });
    }
  },
  deleteUserById: async (req, res) => {
    try {
      await UserService.deleteUserById(req.params.id);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(404).json({ status: "fail", message: error.message });
    }
  },
};

export default userController;
