import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { InputComponent } from "./components/input/input.component";
import { InputValidator } from "./components/enums/input-validator";
import { ErrorMessage } from "./components/models/error-message.model";
import { TranslateModule } from "@ngx-translate/core";
import { InputType } from "./components/enums/input-type";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "Task-Management-System";
  loginForm!: FormGroup;
  InputType = InputType;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-@]{3,}$/),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
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
    ],
  };
}
