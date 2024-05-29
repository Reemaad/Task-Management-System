import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { InputType } from "../../enums/input-type";
import { InputComponent } from "../../components/input/input.component";
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonComponent } from "../../components/button/button.component";
import { ButtonType } from "../../enums/button-type";
import { InputValidator } from "../../enums/input-validator";
import { ErrorMessage } from "../../models/error-message";
import { Router } from "@angular/router";
import {
  USERNAME_PATTERN,
  PASSWORD_PATTERN,
} from "../..//constants";
import { ButtonRole } from "../../enums/button-role";

@Component({
  selector: "login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  imports: [
    TranslateModule,
    InputComponent,
    RouterOutlet,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class LoginComponent {
  loginForm!: FormGroup;
  InputType = InputType;
  ButtonType = ButtonType;
  ButtonRole = ButtonRole;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.pattern(USERNAME_PATTERN),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(PASSWORD_PATTERN),
        Validators.maxLength(30),
      ]),
    });
  }

  errorMessages: { [type: string]: ErrorMessage[] } = {
    username: [
      {
        validator: InputValidator.required,
        message: "ERROR_MESSAGE.REQUIRED",
      },
      {
        validator: InputValidator.pattern,
        message: "ERROR_MESSAGE.PATTERN_USERNAME",
      },
    ],
    password: [
      {
        validator: InputValidator.required,
        message: "ERROR_MESSAGE.REQUIRED",
      },
      {
        validator: InputValidator.pattern,
        message: "ERROR_MESSAGE.PATTERN_PASSWORD",
      },
      {
        validator: InputValidator.maxlength,
        message: "ERROR_MESSAGE.LENGTH_PASSWORD",
      },
    ],
  };

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(["tasks"]);
    }
  }
}
