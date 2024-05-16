import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @Input() title?: string;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  open(): void {
    this.dialog.nativeElement.showModal();
  }

  closePopup(): void {
    this.dialog.nativeElement.close();
    this.close.emit();
  }
}