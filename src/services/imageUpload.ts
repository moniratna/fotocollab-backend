import { v2 as cloudinary } from "cloudinary";
import CustomError from "../config/general/customError";
import { subError } from "../config/general/mainError";
import streamifier from "streamifier";
const imageUpload = async (buffer: Buffer) => {
	try {
		cloudinary.config({
			cloud_name: "",
			api_key: "",
			api_secret: "",
		});

		// Upload an image
		const streamUpload = (buffer: Buffer): Promise<any> => {
			return new Promise((resolve, reject) => {
				const stream = cloudinary.uploader.upload_stream((error, result) => {
					if (result) resolve(result);
					else reject(error);
				});
				// Pipe the buffer into the stream
				streamifier.createReadStream(buffer).pipe(stream);
			});
		};

		const result = await streamUpload(buffer);
		console.log("checking upload result", result);
		return result;
	} catch (error: any) {
		throw new CustomError(subError.INTERNAL_SERVER_ERROR, error.message);
	}
};
export default imageUpload;
