import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { InputValidator } from "../../enums/input-validator";
import { InputType } from "../../enums/input-type";
import { TranslateModule } from "@ngx-translate/core";
import { ErrorMessage } from "../../models/error-message";

@Component({
  selector: "custom-input",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    TranslateModule,
  ],
  templateUrl: "./input.component.html",
  providers: [],
  styleUrl: "./input.component.css",
})
export class InputComponent {
  @Input({ required: true }) generalFormGroup!: FormGroupDirective;
  @Input() controlName!: string;
  @Input() errorMessages!: ErrorMessage[];
  @Input() label = "";
  @Input() id = "";
  @Input() type: InputType = InputType.text;
  @Input() submitted: boolean = false;
  InputType = InputType;

  getErrorByType(validator: InputValidator): boolean {
    const control = this.generalFormGroup.form.get(this.controlName);
    return (
      control &&
      control?.errors &&
      (control?.touched|| this.submitted) &&
      control?.errors?.[InputValidator[validator]]
    );
  }
}
