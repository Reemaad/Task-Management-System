import { InputValidator } from "../enums/input-validator";

export class ErrorMessage {
  type: InputValidator;
  message: string;

  constructor(type: InputValidator, message: string) {
    this.message = message;
    this.type = type;
  }
}
