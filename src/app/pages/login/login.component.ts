import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputType } from '../../enums/input-type';
import { InputComponent } from "../../components/input/input.component";
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonComponent } from "../../components/button/button.component";
import { ButtonType } from '../../enums/button-type';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [TranslateModule, InputComponent, RouterOutlet, ReactiveFormsModule, ButtonComponent]
})
export class LoginComponent {
  loginForm!: FormGroup;
  InputType = InputType;
  ButtonType = ButtonType;

  constructor() {
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
}