import { Component, Input, Output } from "@angular/core";
import { ButtonType } from "../enums/button-type";
import { CommonModule } from "@angular/common";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "custom-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./buttons.component.html",
  styleUrl: "./buttons.component.css",
})
export class ButtonComponent {
  @Input() type: ButtonType = ButtonType.PRIMARY;
  @Output() onClick = new EventEmitter();
  ButtonType = ButtonType;

  emitEvent() {
    this.onClick.emit("test");
  }
}
