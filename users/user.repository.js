import User from "../models/user.model.js";
class UserRepository {
  async createUser(userData) {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async getByEmail(email) {
    return await User.findOne({ email });
  }
  async getByName(name) {
    return await User.findOne({ name });
  }

  async getAllUsers() {
    return await User.find({}).populate("address deliveryAddress");
  }

  async getUserById(id) {
    return await User.findById(id)
      .populate("address deliveryAddress")
      .select("-password");
  }

  async updateUserById(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }
  async deleteUserById(id) {
    return (
      await User.findByIdAndDelete(id),
      { isDeleted: true, deleteDate: new Date() },
      { new: true }
    );
  }
}
export default new UserRepository();
