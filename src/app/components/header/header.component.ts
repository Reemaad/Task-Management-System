import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  showMenuItems: boolean = false;

  toggleMenu() {
    this.showMenuItems = !this.showMenuItems;
  }

  logout() {
    // TODO: Implement this method later (Manal)
  }
}
