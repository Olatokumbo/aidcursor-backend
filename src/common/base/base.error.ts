export class BaseError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(
    name: string,
    statusCode: number,
    isOperational: boolean,
    description: string = "Internal Server Error"
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

export enum httpStatusCodes {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}
