//* Internal Imports *//
import mongoRepository from "./mongo/index.js";

const { MongoUserRepository } = mongoRepository;

class RepositoryFactory {
  static getUserRepository() {
    const dbType = process.env.DB_TYPE || "mongo";

    if (dbType === "mongo") {
      return new MongoUserRepository();
    } else {
      throw new Error(`Unsupported DB_TYPE: ${dbType}`);
    }
  }
}

export default RepositoryFactory;
