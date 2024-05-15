import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'popup',
  standalone: true,
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
  imports: [TranslateModule]
})
export class PopUpComponent {
  @Input() visible: boolean = false;
  @Input() title?: string;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}