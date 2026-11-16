//* Internal Imports *//
import { MongoUserRepository } from "./mongo/MongoUserRepository.js";

export class RepositoryFactory {
  static getUserRepository() {
    const dbType = process.env.DB_TYPE || "mongo";

    if (dbType === "mongo") {
      return new MongoUserRepository();
    } else {
      throw new Error(`Unsupported DB_TYPE: ${dbType}`);
    }
  }
}
