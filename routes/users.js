import express from "express";

import { getAllUsers,updateProfile } from "../controllers/Users.js";
import { login, signup } from "../controllers/auth.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile)

export default router;
