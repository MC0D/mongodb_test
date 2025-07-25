import UserRepository from "./user.repository.js";

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }
  async createUser(userData) {
    return await this.UserRepository.createUser(userData);
  }

  async getUserById(id) {
    return await this.UserRepository.getUserById(id);
  }

  async getAllUsers() {
    return await this.UserRepository.getAllUsers();
  }

  async updateUserById(id, updateData) {
    return await this.UserRepository.updateUserById(id, updateData);
  }

  async deleteUserById(id) {
    return await this.UserRepository.deleteUserById(id);
  }
}

export default new UserService(UserRepository);
