import { Component, OnInit } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  ngOnInit(): void {

  }
}
