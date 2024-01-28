import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  allUsers,
} from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(loginUser);

export default router;
