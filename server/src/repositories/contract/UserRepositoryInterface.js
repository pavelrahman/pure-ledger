class UserRepositoryInterface {
  async create(data) {
    throw new Error("Method 'create()' must be implemented.");
  }
  async findById(id) {
    throw new Error("Method 'findById()' must be implemented.");
  }
  async findAll() {
    throw new Error("Method 'findAll()' must be implemented.");
  }
  async updateById(id, payload, options = {}) {
    throw new Error("Method 'updateById()' must be implemented.");
  }
  async deleteById(id, payload, options = {}) {
    throw new Error("Method 'deleteById()' must be implemented.");
  }
}

export default UserRepositoryInterface;
