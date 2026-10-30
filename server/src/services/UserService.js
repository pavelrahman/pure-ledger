import RepositoryFactory from "../repositories/RepositoryFactory.js";

class UserService {
  constructor() {
    this.userRepository = RepositoryFactory.getUserRepository();
  }

  async createUser(userData) {
    // Business Logic
    return await this.userRepository.create(userData);
  }

  async getAllUser() {
    return await this.userRepository.findAll();
  }
}

export default new UserService();
