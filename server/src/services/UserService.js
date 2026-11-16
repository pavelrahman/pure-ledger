import { RepositoryFactory } from "../repositories/RepositoryFactory.js";

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

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async updateUserById(id, payload, options) {
    return await this.userRepository.updateById(id, payload, options);
  }

  async deleteUserById(id) {
    return await this.userRepository.deleteById(id);
  }

  async deleteAllUser() {
    return await this.userRepository.deleteAll();
  }
}

export const userService = new UserService();
