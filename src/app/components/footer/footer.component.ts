import { Component, OnInit } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'custom-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

}
