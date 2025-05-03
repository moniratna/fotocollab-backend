import { Router } from "express";
import imageUploadHandler from "../../controller/imageController/imageUploadHandler";
import upload from "../../middlewares/upload";

const router = Router();

// router.use(ensureAdmin);
router.post("/upload", upload.single("image"), imageUploadHandler);

export default router;
