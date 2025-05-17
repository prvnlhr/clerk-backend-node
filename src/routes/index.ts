import { Router } from "express";
const router = Router();

import authRoutes from "./auth/authRoute";

router.use("/auth", authRoutes);

export default router;
