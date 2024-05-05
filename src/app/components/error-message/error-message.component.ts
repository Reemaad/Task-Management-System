import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "custom-error-message",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./error-message.component.html",
  styleUrl: "./error-message.component.css",
})
export class ErrorMessageComponent {
  @Input() message!: string;
}
