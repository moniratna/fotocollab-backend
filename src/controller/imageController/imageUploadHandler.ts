import { Request, Response } from "express";
import imageUpload from "../../services/imageUpload";
import { requestFailed, responseSuccess } from "../../config/commonResponse";
import { mainError, subError } from "../../config/general/mainError";
interface MulterRequest extends Request {
	file: Express.Multer.File;
}
const imageUploadHandler = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		console.log(req.file);
		const multerReq = req as MulterRequest;

		if (!multerReq.file) {
			return res.status(400).json({ message: "No file uploaded" });
		}
		const uploadFile = multerReq.file.buffer;
		const streamUpload = imageUpload(uploadFile);
		return responseSuccess(res, mainError.SUCCESS, streamUpload);
	} catch (error: any) {
		return requestFailed(
			res,
			error.subError || subError.INTERNAL_SERVER_ERROR,
			error.message
		);
	}
};
export default imageUploadHandler;
