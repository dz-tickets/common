import { CustomError, ErrorResponse } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode: number = 404;

    constructor() {
        super("NotFoundError");
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): ErrorResponse[] {
        return [{ message: "Not found" }];
    }
}