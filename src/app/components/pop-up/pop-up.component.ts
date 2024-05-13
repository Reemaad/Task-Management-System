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
  @Input() isPopupVisible: boolean = false;
  @Input() title?: string;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
    this.close.emit();
  }
}