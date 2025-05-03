import express, { NextFunction, Request, Response } from "express";
import v1Routes from "./v1/index";
import { requestFailed } from "../config/commonResponse";
import { subError } from "../config/general/mainError";

const router = express.Router();

router.use("/v1", v1Routes);

router.use((req: Request, res: Response, next: NextFunction) => {
	requestFailed(res, subError.INTERNAL_SERVER_ERROR, "Route Not Found!");
});

export default router;
