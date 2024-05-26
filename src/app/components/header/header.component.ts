import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { PopUpComponent } from "../pop-up/pop-up.component";
import { ButtonComponent } from "../button/button.component";
import { ButtonType } from "../../enums/button-type";
@Component({
  selector: "custom-header",
  standalone: true,
  providers: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
  imports: [CommonModule, TranslateModule, PopUpComponent, ButtonComponent]
})
export class HeaderComponent {
  showMenuItems: boolean = false;
  ButtonType = ButtonType;
  
  @ViewChild(PopUpComponent) popup!: PopUpComponent;

  toggleMenu() {
    this.showMenuItems = !this.showMenuItems;
  }

  openPopup() {
    this.toggleMenu();
    this.popup.open();
  }

  closePopup() {
    this.popup.closePopup();
  }

  constructor(private router: Router) { }

  logout() {
    // If there is Logic when Manal implement login
    this.router.navigate(['/login']);
  }
}
