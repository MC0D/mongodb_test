import userService from "./user.service.js";

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUser(req, res) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json({ message: "Utilisaterur enregistre", user });
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      if (!user)
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const updateDate = req.body;
      const updateUser = await this.userService.updateUserById(id, updateDate);
      if (!updateDate) {
        return res.status(404).json({ message: "Utilisateur non trouve" });
      }
      res
        .status(200)
        .json({ message: "Utilisateur mis a jour:", user: updateDate });
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  async softDeleteUserById(req, res) {
    try {
      const { id } = req.params;
      const deleteUser = await this.userService.deleteUserById(id);
      if (!deleteUser) {
        return res.status(404).json({ message: "Utilisateur non trouve" });
      }

      res
        .status(200)
        .json({ message: "Utilisateur supprimé", user: deleteUser });
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
export default new UserController(userService);
