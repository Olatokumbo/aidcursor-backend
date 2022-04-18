import { Router } from "express";
import { findUserById } from "../controllers/user";
const router = Router();

router.get("/:id", findUserById);

export default router;
