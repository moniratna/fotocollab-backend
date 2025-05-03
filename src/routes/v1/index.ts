import { Router } from "express";
import imageApi from "./imageApi";
const router = Router();

router.use("/api", imageApi);

export default router;
