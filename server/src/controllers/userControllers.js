//* Internal Imports *//
import service from "../services/index.js";

const { userService } = service;

const userController = {
  createUser: async (req, res) => {
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
  },
};

export default userController;
