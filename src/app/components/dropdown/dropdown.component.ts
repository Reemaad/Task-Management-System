import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { DropdownItem } from "../../models/dropdown-item";
import { TranslateModule } from "@ngx-translate/core";
import { ErrorMessage } from "../../models/error-message";
import { InputValidator } from "../../enums/input-validator";
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from "../error-message/error-message.component";

@Component({
    selector: "custom-dropdown",
    standalone: true,
    templateUrl: "./dropdown.component.html",
    styleUrl: "./dropdown.component.css",
    imports: [ TranslateModule, ErrorMessageComponent, ReactiveFormsModule]
})
export class DropdownComponent {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() items!: DropdownItem[];
  @Input() errorMessages!: ErrorMessage[];
  @Input() controlName!: string;
  @Input() isRequired!: boolean;
  @Input({ required: true }) generalFormGroup!: FormGroupDirective;
  @Output() selectedItemChanged = new EventEmitter<string>();

  @ViewChild('dropdown') dropdown!: ElementRef<HTMLSelectElement>;

  onSelect(value: string) {
    this.selectedItemChanged.emit(value);
  }
  
  getErrorByType(validator: InputValidator): boolean {
    const control = this.generalFormGroup.form.get(this.controlName);
    return (
      control &&
      control?.errors &&
      control?.touched &&
      control?.errors?.[InputValidator[validator]]
    );
  }

  resetDropdown() {
    this.dropdown.nativeElement.value = "-1";
  }
}
