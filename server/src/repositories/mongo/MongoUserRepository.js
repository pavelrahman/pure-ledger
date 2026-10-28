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
}

export default MongoUserRepository;
