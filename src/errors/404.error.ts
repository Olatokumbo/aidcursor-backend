import { BaseError, httpStatusCodes } from "../common/base/base.error";
export class Api404Error extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.NOT_FOUND,
    description = "Not found.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}
