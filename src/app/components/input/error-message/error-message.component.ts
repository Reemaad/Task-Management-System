import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "custom-error-message",
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: "./error-message.component.html",
  styleUrl: "./error-message.component.css",
})
export class ErrorMessageComponent {
  @Input() formControl!: FormControl;
  @Input() type!: string;
}
