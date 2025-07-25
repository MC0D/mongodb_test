import express from "express";
import userController from "../users/user.controller.js";

const router = express.Router();

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));
router.put("/:id", (req, res) => userController.updateUserById(req, res));
router.delete("/:id", (req, res) =>
  userController.softDeleteUserById(req, res)
);

export default router;
