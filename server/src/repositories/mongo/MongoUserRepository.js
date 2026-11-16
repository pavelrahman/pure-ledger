//* Internal Imports *//
import { User } from "../../models/mongo/mongoUserModel.js";
import { UserRepositoryInterface } from "../contract/UserRepositoryInterface.js";

export class MongoUserRepository extends UserRepositoryInterface {
  async create(data) {
    return await User.create(data);
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findAll() {
    return await User.find();
  }

  async updateById(id, payload, options = {}) {
    const finalOptions = {
      returnDocument: "after",
      runValidators: true,
      ...options,
    };
    return await User.findByIdAndUpdate(id, payload, finalOptions);
  }

  async deleteById(id) {
    const options = {
      returnDocument: "after",
      runValidators: true,
    };
    return await User.findByIdAndUpdate(
      id,
      {
        status: "inactive",
      },
      options,
    );
  }

  async deleteAll() {
    return User.deleteMany({});
  }
}
