import { Response } from "express";
import { mainError, subError } from "./general/mainError";
import statusCode from "./general/statusCode";

/**
 * Used to decrypt the text.
 * @param
 * res -- Response object.
 * code -- Status code for error.
 * error -- Error message.
 * @example
 * request requestFailed(req,401,'Error!');
 
 **/
const requestFailed = (res: Response, subErrorMsg: any, error?: string) => {
	let composeMessage = "";
	switch (subErrorMsg.mainErrorCode) {
		case 400:
			composeMessage = subErrorMsg.mainError;
			break;
		case 401:
			composeMessage = subErrorMsg.mainError;
			break;
		case 403:
			composeMessage = subErrorMsg.mainError;
			break;
		case 404:
			composeMessage = subErrorMsg.mainError;
			break;
		case 405:
			composeMessage = subErrorMsg.mainError;
			break;
		case 406:
			composeMessage = subErrorMsg.mainError;
			break;
		case 409:
			composeMessage = subErrorMsg.mainError;
			break;
		case 410:
			composeMessage = subErrorMsg.mainError;
			break;
		case 422:
			composeMessage = subErrorMsg.mainError;
			break;
		case 429:
			composeMessage = subErrorMsg.mainError;
			break;
		default:
			composeMessage = mainError["INTERNAL_SERVER_ERROR"].message;
			break;
	}

	return res.status(subErrorMsg.mainErrorCode).json({
		success: false,
		code: subErrorMsg.code,
		data: null,
		message: subErrorMsg.message || composeMessage,
		error: error || "",
	});
};
const responseSuccess = (
	res: Response,
	subErrorMsg: any,
	data: any,
	message?: string,
	rowsCount?: number
) => {
	let composeMessage = "";
	switch (subErrorMsg.code) {
		case 200:
			composeMessage = `OK`;
			break;
		case 201:
			composeMessage = `Created`;
			break;
		case 202:
			composeMessage = `Accepted`;
			break;
		case 204:
			composeMessage = `No Content`;
			break;
		default:
			composeMessage = `Success`;
			break;
	}

	if (rowsCount === null) {
		return res.status(subErrorMsg.code).json({
			success: true,
			code: null,
			data: data,
			message: message || composeMessage,
			detailMessage: null,
			error: "",
		});
	} else {
		return res.status(subErrorMsg.code).json({
			success: true,
			code: subErrorMsg.code,
			data: data,
			message: message || composeMessage,
			detailMessage: null,
			error: "",
			rowsCount: rowsCount,
		});
	}
};

const internalServerError = (res: Response, error: any, message?: string) => {
	return res.status(statusCode.INTERNAL_SERVER_ERROR).json({
		code: statusCode.INTERNAL_SERVER_ERROR,
		success: false,
		data: null,
		message: message ? message : "Internal Server Error",
		detailMessage: message,
		error:
			typeof error === "object" && error != null
				? error.error || error.message
				: error,
	});
};

const responseInvalidArgumentsError = (res: Response, response: any) => {
	return res.status(statusCode.INVALID_ARGUMENTS).json({
		success: false,
		data: null,
		message: response.error.details.map((i: any) => i.message).join(","),
		error: "",
	});
};

const responseFunction = (status: boolean, data: any, message?: string) => {
	if (!message) {
		return {
			status: status,
			data: data,
		};
	} else
		return {
			status: status,
			data: data,
			message: message,
		};
};

export {
	requestFailed,
	internalServerError,
	responseInvalidArgumentsError,
	responseSuccess,
	responseFunction,
};
