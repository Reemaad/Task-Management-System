import { InputValidator } from "../enums/input-validator";

export class ErrorMessage {
  validator: InputValidator;
  message: string;

  constructor(validator: InputValidator, message: string) {
    this.validator = validator;
    this.message = message;
  }
}
