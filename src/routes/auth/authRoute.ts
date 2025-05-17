import { Router } from "express";
import { authController } from "src/controllers/auth/auth.controller";
const router = Router();

router.post("/sign-in", authController.signInController);
router.post("/sign-up", authController.signUpController);
export default router;
