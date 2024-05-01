import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { ErrorMessageComponent } from "./error-message/error-message.component";

@Component({
  selector: "custom-input",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: "./input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
  styleUrl: "./input.component.css",
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label = "";
  @Input() type = "";
  formControl!: FormControl;

  onChange!: (value: string) => void;
  onTouched!: () => void;

  //ControlValueAccessor

  ngOnInit(): void {
    const validators: ValidatorFn[] = this.getValidatorsForType(this.type);
    this.formControl = new FormControl("", validators);
  }

  writeValue(value: any) {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  //password should have: (1) at least on digit (2) at least one uppercase letter (3) at least one lowercase letter (4) length 8 and above
  //username should have : (1) at least one letter uppercase or lowercase (2) any combination (3) length 3 and above
  getValidatorsForType(type: string): ValidatorFn[] {
    switch (type) {
      case "password":
        return [
          Validators.required,
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
        ];
      case "username":
        return [
          Validators.required,
          Validators.pattern(/^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-@]{3,}$/),
        ];
      case "description":
        return [];
      default:
        return [Validators.required];
    }
  }
}
