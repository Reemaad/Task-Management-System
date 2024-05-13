import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { AppComponent } from "../../app.component";

@Component({
    selector: 'custom-popup',
    standalone: true,
    templateUrl: './pop-up.component.html',
    styleUrl: './pop-up.component.css',
    imports: [TranslateModule, AppComponent]
})
export class PopUpComponent {
  @Input() isPopupVisible: boolean = false;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.close.emit();
    this.isPopupVisible = false;
  }
}
