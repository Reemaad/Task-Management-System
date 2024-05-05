import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {
  FormGroupDirective,
  ReactiveFormsModule,
} from "@angular/forms";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { ErrorMessage } from "../models/error-message.model";
import { InputValidator } from "../enums/input-validator";

@Component({
  selector: "custom-input",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: "./input.component.html",
  providers: [],
  styleUrl: "./input.component.css",
})
export class InputComponent {
  @Input({required:true}) formGroup1!: FormGroupDirective;
  @Input() controlName!: string;
  @Input() errorMessages!: ErrorMessage[];
  @Input() label = "";
  @Input() type = "";



  getErrorByType(type: InputValidator): boolean {
    // if (
    //   this.formGroup1.form.get(this.controlName) &&
    //   this.formGroup1.form.get(this.controlName)?.errors &&
    //   this.formGroup1.form.get(this.controlName)?.touched &&
    //   this.formGroup1.form.get(this.controlName)?.dirty &&
    //   this.formGroup1.form.get(this.controlName)?.errors?.[type]
    // ) {
    //   return true;
    // }
    return false;
  }
}
