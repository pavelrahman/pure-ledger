//* Internal Imports *//
import service from "../services/index.js";

const { userService } = service;

const userController = {
  createUser: async (req, res) => {
    try {
      const userData = {
        name: "Gazi Mizanur Rahman",
        age: 34,
        sex: "Male",
      };

      const user = await userService.createUser(userData);

      res.status(200).json({
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
