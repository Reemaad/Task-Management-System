import { InputValidator } from "../enums/input-validator";

export interface ErrorMessage {
  validator: InputValidator;
  message: string;
}