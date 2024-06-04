import { Component, Input, Output } from "@angular/core";
import { ButtonType } from "../../enums/button-type";
import { CommonModule } from "@angular/common";
import { EventEmitter } from "@angular/core";
import { ButtonRole } from "../../enums/button-role";

@Component({
  selector: "custom-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
})

export class ButtonComponent {
  @Input() type: ButtonType = ButtonType.PRIMARY;
  @Input() role: ButtonRole = ButtonRole.button;
  @Output() onClick = new EventEmitter();
  ButtonType = ButtonType;
  ButtonRole = ButtonRole;

  emitEvent() {
    this.onClick.emit();
  }
}
