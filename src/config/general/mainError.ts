export const mainError: any = {
	SUCCESS: {
		code: 200,
		message: "Success",
	},
	BAD_REQUEST: {
		code: 400,
		message: "Bad Request",
	},
	UNAUTHORIZED: {
		code: 401,
		message: "Unauthorized!",
	},
	FORBIDDEN: {
		code: 403,
		message: "Forbidden",
	},
	NOT_FOUND: {
		code: 404,
		message: "Not Found",
	},
	METHOD_NOT_ALLOWED: {
		code: 405,
		message: "Method Not Allowed",
	},
	NOT_ACCEPTABLE: {
		code: 406,
		message: "Not Acceptable",
	},
	CONFLICT: {
		code: 409,
		message: "Conflict",
	},
	GONE: {
		code: 410,
		message: "Gone",
	},
	UNPROCESSABLE_ENTITY: {
		code: 422,
		message: "Unprocessable Entity",
	},
	TOO_MANY_REQUESTS: {
		code: 429,
		message: "Too Many Requests",
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
		message: "Internal server error",
	},
};
export const subError: any = {
	INVALID_TOKEN: {
		code: 4005,
		message: "Invalid token",
		mainError: mainError.UNAUTHORIZED.message,
		mainErrorCode: mainError.UNAUTHORIZED.code,
	},
	USER_IS_NOT_LOGGED_IN: {
		code: 4006,
		message: "User is not logged in",
		mainError: mainError.UNAUTHORIZED.message,
		mainErrorCode: mainError.UNAUTHORIZED.code,
	},
	TOKEN_EXPIRED: {
		code: 4010,
		message: "Token expired",
		mainError: mainError.UNAUTHORIZED.message,
		mainErrorCode: mainError.UNAUTHORIZED.code,
	},
	NOT_VERIFIED: {
		code: 4012,
		message: "User is not verified",
		mainError: mainError.UNAUTHORIZED.message,
		mainErrorCode: mainError.UNAUTHORIZED.code,
	},
	KYC_NOT_DONE: {
		code: 4011,
		message: "Kyc is not done.",
		mainError: mainError.UNAUTHORIZED.message,
		mainErrorCode: mainError.UNAUTHORIZED.code,
	},
	// AUTH ERRORS
	USER_NOT_FOUND: {
		code: 4007,
		message: "User not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	ACCOUNT_BLOCKED: {
		code: 4014,
		message:
			"Your account has been temporarily blocked. Please contact us at contact@nordl.io for more details.",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	ACCOUNT_LOCKED: {
		code: 4016,
		message: "Account locked! Password needs to be reset!",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	CONTACT_ERROR: {
		code: 4017,
		message: "Invalid contact number! Please check the contact number!",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	// Product Errors
	OTP_NOT_FOUND: {
		code: 4408,
		message: "OTP not found!",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	POOL_NOT_FOUND: {
		code: 4401,
		message: "Pool not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	INVALID_INPUT: {
		code: 4000,
		message: "The field can't be empty or invalid input",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_PASSWORD: {
		code: 4002,
		message: "Invalid password",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_REFERRAL_CODE: {
		code: 4003,
		message: "Invalid referral code",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	PASSWORD_PREVIOUSLY_USED: {
		code: 4008,
		message: "Password previosuly used",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_OTP_MFAOTP: {
		code: 4009,
		message: "Invalid otp/mfa otp",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	NOT_ALLOWED: {
		code: 4015,
		message: "Process not allowed",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	// Wallet errors
	BELOW_WITHDRAW_AMOUNT: {
		code: 4202,
		message: "Amount is below minimum withdrawal amount",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	DAILY_LIMIT_EXCEED: {
		code: 4203,
		message: "Amount is greater than daily withdrawal limit",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_ADDRESS: {
		code: 4204,
		message: "Invalid wallet address",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	HIGH_NETWORK_FEES: {
		code: 4205,
		message: "Network fee is greater than withdrawal amount",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	LOW_BALANCE: {
		code: 4206,
		message: "User doesn't have enough balance",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_CHAIN: {
		code: 4207,
		message: "Invalid chain",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_COIN: {
		code: 4201,
		message: "Coin is not supported",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	NOT_ALLOWED_ADDRESS: {
		code: 4208,
		message:
			"This withdrawal address is associated with the norDL platform and cannot be used for withdrawals. Please use a different address.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	// Product Errors
	DCA_NOT_FOUND: {
		code: 4409,
		message: "DCA not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	BELOW_MIN_INVESTMENT_AMOUNT: {
		code: 4402,
		message: "Amount is less than the minimum investment amount",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	ASSET_MISSMATCH: {
		code: 4403,
		message: "User asset and pool underlying asset are not same",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	NOT_INVESTED_IN_POOL: {
		code: 4404,
		message:
			"User has either not invested in the pool or has insufficient number of shares.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	SHARES_REDEEMED: {
		code: 4405,
		message:
			"User already has shares being redeemed and does not have sufficient shares to complete this order.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	IN_PROCESS: {
		code: 4406,
		message: "Share allocation is in process you can't cancel your order now",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_ORDER_TYPE: {
		code: 4407,
		message: "Invalid order type.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_NUMBER_OF_TIMES: {
		code: 4416,
		message:
			"Number of instalment should be greater than or equal to completed instalment!",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	USER_EXISTS: {
		code: 4001,
		message: "The user already exists! Please log in to continue!",
		mainError: mainError.CONFLICT.message,
		mainErrorCode: mainError.CONFLICT.code,
	},

	USER_ALREADY_VERIFIED: {
		code: 4004,
		message: "User already verified",
		mainError: mainError.CONFLICT.message,
		mainErrorCode: mainError.CONFLICT.code,
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
		message: "Internal Server Error",
		mainError: mainError.INTERNAL_SERVER_ERROR.message,
		mainErrorCode: mainError.INTERNAL_SERVER_ERROR.code,
	},
	INVALID_SIGNATURE: {
		code: 4503,
		message: "Invalid Signature",
		mainError: mainError.FORBIDDEN.message,
		mainErrorCode: mainError.FORBIDDEN.code,
	},
	// crypto basket related:
	BASKET_NAME_NOT_AVAILABLE: {
		code: 4410,
		message:
			"Crypto basket name is not available please choose a different name.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	MIN_ASSETS_REQUIRED: {
		code: 4411,
		message: "The Crypto Basket should contain min. of 2 and max. of 20 assets",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	PRIVATE_BASKET_LIMIT_REACHED: {
		code: 4412,
		message: "You have reached the limit of private basket creation!",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	PUBLIC_BASKET_LIMIT_REACHED: {
		code: 4413,
		message: "You have reached the limit of public basket creation!",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	BASKET_NAME_NOT_CHANGABLE: {
		code: 4414,
		message:
			"You can't change the basket name after the basket is live on leader board!",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	NOT_ADMIN: {
		code: 4415,
		message: "You are not the admin of this basket to edit!",
		mainError: mainError.METHOD_NOT_ALLOWED.message,
		mainErrorCode: mainError.METHOD_NOT_ALLOWED.code,
	},
	CONTENT_NOT_FOUND: {
		code: 4013,
		message: "Content not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	TOO_MANY_REQUESTS: {
		code: 4101,
		message: "Too many requests",
		mainError: mainError.TOO_MANY_REQUESTS.message,
		mainErrorCode: mainError.TOO_MANY_REQUESTS.code,
	},
	BET_NOT_FOUND: {
		code: 4102,
		message: "Bet not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	REGISTRATION_NOT_FOUND: {
		code: 4103,
		message: "Registration not found",
		mainError: mainError.NOT_FOUND.message,
		mainErrorCode: mainError.NOT_FOUND.code,
	},
	REGISTRATION_ALREADY_APPROVED: {
		code: 4104,
		message: "Registration already approved",
		mainError: mainError.CONFLICT.message,
		mainErrorCode: mainError.CONFLICT.code,
	},
	API_KEY_DISABLED: {
		code: 4105,
		message: "Api key is disabled!",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	NOT_ELIGIBLE_LOGIN: {
		code: 4106,
		message: "No Successful api registration. You can't login right now.",
		mainError: mainError.NOT_ACCEPTABLE.message,
		mainErrorCode: mainError.NOT_ACCEPTABLE.code,
	},
	INVALID_API_KEY: {
		code: 4107,
		message: "Invalid api key",
		mainError: mainError.FORBIDDEN.message,
		mainErrorCode: mainError.FORBIDDEN.code,
	},
};
