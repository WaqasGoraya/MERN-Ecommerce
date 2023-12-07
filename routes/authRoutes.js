import express from "express";
import {
  loginUser,
  registerUser,
  test,
} from "../controllers/authController.js";
import { isAdmin, requireSigIn } from "../middleware/authMiddleware.js";
const router = express.Router();

// Register Route
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/test", requireSigIn,isAdmin, test);

export default router;
