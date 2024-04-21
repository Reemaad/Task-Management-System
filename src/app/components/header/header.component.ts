import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule,TranslateModule],
  providers: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  showMenueItems: boolean = false;

  constructor(public translate: TranslateService) {
  }

  toggleMenue() {
    this.showMenueItems = !this.showMenueItems;
  }

  logout() {
    // TODO: Implement this method later (Manal)
  }
}
