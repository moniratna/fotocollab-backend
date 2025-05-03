class CustomError extends Error {
	subError: string;
	constructor(subError: string, message: string) {
		super(message);
		this.name = message;
		this.subError = subError;
	}
}
export default CustomError;
