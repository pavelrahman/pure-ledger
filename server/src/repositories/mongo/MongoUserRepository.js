//* Internal Imports *//
import contract from "../contract/index.js";
import mongoModels from "../../models/mongo/index.js";

const { MongoUserModel } = mongoModels;
const { UserRepositoryInterface } = contract;

class MongoUserRepository extends UserRepositoryInterface {
  async create(data) {
    return await MongoUserModel.create(data);
  }

  async findById(id) {
    return await MongoUserModel.findById(id);
  }

  async findAll() {
    return await MongoUserModel.find();
  }

  async updateById(id, payload, options = {}) {
    const finalOptions = {
      returnDocument: "after",
      runValidators: true,
      ...options,
    };
    return await MongoUserModel.findByIdAndUpdate(id, payload, finalOptions);
  }

  async deleteById(id) {
    const options = {
      returnDocument: "after",
      runValidators: true,
    };
    return await MongoUserModel.findByIdAndUpdate(
      id,
      {
        status: "inactive",
      },
      options,
    );
  }
}

export default MongoUserRepository;
